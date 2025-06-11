import React from "react";
import { useLoaderData } from "react-router";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";

const MyBook = () => {
  const myAllBook = useLoaderData();
  // console.log(myAllBook);
  // const { Book_Author, Book_Title, Cover_photo, category, upVote } = book;
  return (
    <section>
      <div
        className="container p-2 mx-auto sm:p-4 h-screen my-16"
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
                  <td className="px-3 py-2">
                    <p>{singleBook.email}</p>
                  </td>
                  <td className="px-3 py-2">
                    <p>{singleBook.status}</p>
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex gap-5 items-center">
                      <button className="cursor-pointer">
                        <RiDeleteBin6Line size={20} />
                      </button>
                      <button className="cursor-pointer">
                        <MdOutlineModeEditOutline size={20} />
                      </button>
                      <button className="cursor-pointer">
                        <VscPreview size={20} />
                      </button>
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
