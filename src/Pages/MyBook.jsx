import React, { use, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const MyBook = () => {
  useEffect(() => {
    document.title = "Book Bridge | MyBook";
  }, []);

  const { email } = useParams();
  const { user } = use(AuthContext);
  const { accessToken } = user;
  // const AllBook = useLoaderData();
  const [myAllBook, SetMyAllBook] = useState([]);

  //! fetch data -------------->
  useEffect(() => {
    axios
      .get(
        `https://assignment-11-server-six-alpha.vercel.app/my-books/${email}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        // console.log(res.data);
        SetMyAllBook(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  //fetch delete
  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          // console.log("hello im delete :", id);
          axios
            .delete(
              `https://assignment-11-server-six-alpha.vercel.app/books/${id}`
            )

            .then((res) => {
              // console.log(res.data);

              if (res.data.deletedCount) {
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }

              const remaingingData = myAllBook.filter(
                (singleData) => singleData._id !== id
              );
              SetMyAllBook(remaingingData);
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };
  console.log(myAllBook.length);

  return (
    <section>
      {/* ---------------------------------- table -------------------------- */}
      {myAllBook.length == 0 ? (
        <div className="flex justify-center my-40">
          <img
            className="max-w-[450px]"
            src="https://i.ibb.co/hJWrgFbq/data-removebg-preview.png"
            alt=""
          />
        </div>
      ) : (
        <div
          className="container p-2 mx-auto sm:p-4 h-screen my-16 md:block hidden"
          bis_skin_checked="1"
        >
          {/* <h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2> */}
          <div className="overflow-x-auto" bis_skin_checked="1">
            <table className="w-full p-6 text-xs text-left whitespace-nowrap">
              <colgroup>
                <col className="w-5" />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="w-5" />
              </colgroup>
              {/* ------------------------  table head --------------------- */}
              <thead>
                <tr className="bg-sky-300">
                  <th className="p-3">Photo</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Author</th>
                  <th className="p-3">category</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">status</th>
                  <th className="p-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              {/* -------------------------  table body -------------------- */}
              {myAllBook.map((singleBook) => (
                <tbody className="border-b border-sky-200  ">
                  <tr className="">
                    <td className=" text-2xl font-medium py-3 ">
                      <img className="" src={singleBook.Cover_photo} alt="" />
                    </td>
                    <td className="px-3 py-2">
                      <p>{singleBook.Book_Title}</p>
                    </td>
                    <td className="px-3 py-2">
                      <span>{singleBook.Book_Author}</span>
                    </td>
                    <td className="px-3 py-2">
                      <p>{singleBook.category}</p>
                    </td>
                    {/* em */}
                    <td className="px-3 py-2 ">
                      <p>{singleBook.email}</p>
                    </td>
                    <td className="px-3 py-2">
                      <p>{singleBook.status}</p>
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex gap-5 items-center">
                        <button
                          onClick={() => handleDelete(singleBook._id)}
                          className="cursor-pointer hover:text-red-600 "
                        >
                          <RiDeleteBin6Line size={24} />
                        </button>
                        <Link to={`/updateBook/${singleBook._id}`}>
                          <button className="cursor-pointer">
                            <MdOutlineModeEditOutline size={24} />
                          </button>
                        </Link>
                        {/* <Link to={`/details/${singleBook._id}`}>
                        <button className="cursor-pointer">
                          <VscPreview size={20} />
                        </button>
                      </Link> */}
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      )}

      {/*----------------------------------- responsive----------------------> */}
      <div
        className="container p-2 mx-auto sm:p-4 h-screen my-16 md:hidden"
        bis_skin_checked="1"
      >
        {/* <h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2> */}
        <div className="overflow-x-auto" bis_skin_checked="1">
          <table className="w-full p-6 text-xs text-left whitespace-nowrap">
            <colgroup>
              <col className="w-5" />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-5" />
            </colgroup>
            {/* ------------------------  table head --------------------- */}
            <thead>
              <tr className="bg-sky-300">
                <th className="p-3">Photo</th>
                <th className="p-3">Name</th>

                <th className="p-3">category</th>

                <th className="p-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            {/* -------------------------  table body -------------------- */}
            {myAllBook.map((singleBook) => (
              <tbody className="border-b border-sky-200  ">
                <tr className="">
                  <td className=" text-2xl font-medium py-3 ">
                    <img className="" src={singleBook.Cover_photo} alt="" />
                  </td>
                  <td className="px-3 py-2">
                    <p>{singleBook.Book_Title}</p>
                  </td>

                  <td className="px-3 py-2">
                    <p>{singleBook.category}</p>
                  </td>

                  <td className="px-3 py-2">
                    <div className="flex gap-5 items-center">
                      <button
                        onClick={() => handleDelete(singleBook._id)}
                        className="cursor-pointer"
                      >
                        <RiDeleteBin6Line size={20} />
                      </button>
                      <Link to={`/updateBook/${singleBook._id}`}>
                        <button className="cursor-pointer">
                          <MdOutlineModeEditOutline size={20} />
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyBook;
