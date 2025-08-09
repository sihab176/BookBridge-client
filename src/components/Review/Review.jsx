import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Swal from "sweetalert2";
import EditReview from "./EditReview";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";

const Review = ({ userId }) => {
  const { user } = use(AuthContext);
  const { photoURL, displayName } = user;
  const reviewEmail = user?.email;
  const [isTrue, setTrue] = useState(false);
  const [data, setData] = useState([]);

  //!------------------------ post ------------------>
  useEffect(() => {
    axios
      .get("https://assignment-11-server-six-alpha.vercel.app/review")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, [userId, isTrue]);
  // console.log(data, userId);
  const filter = data?.filter(
    (singleData) =>
      singleData.userId === userId && singleData.reviewEmail === reviewEmail
  );

  const handleReview = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const bookData = Object.fromEntries(formData.entries());
    const finalData = {
      ...bookData,
      reviewEmail,
      userId,
      photoURL,
      displayName,
    };
    // console.log(finalData);
    if (filter?.length >= 1) {
      // console.log("hello");
      return toast.warn("you can post one review per book");
    }
    //! ------------------- post --------------- >
    axios
      .post(
        "https://assignment-11-server-six-alpha.vercel.app/review",
        finalData
      )
      .then((res) => {
        // console.log(res.data);
        setTrue(!isTrue);
        Swal.fire({
          title: "you successfully add a review",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  //! -------------------- delete -------------->
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
              `https://assignment-11-server-six-alpha.vercel.app/review/${id}`
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

              const remaingingData = data.filter(
                (singleData) => singleData._id !== id
              );
              setData(remaingingData);
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

  const allReviews = data.filter((element) => element.userId === userId);
  // console.log(allReviews);
  return (
    <div>
      <h1 className="text-5xl text-center font-bold mb-20">
        reviews on this Book{" "}
      </h1>
      <div className="flex  justify-between lg:flex-row flex-col gap-20">
        {/* post review */}
        <div>
          <h1 className="text-center text-3xl  font-semibold mb-4">
            Post a review
          </h1>
          <form onSubmit={handleReview}>
            <fieldset className="fieldset   rounded-box w-full  p-4 md:col-span-2 ">
              <label className="label">Book review</label>
              <textarea
                name="user_review"
                placeholder="Share experience at this page"
                required
                id=""
                className="border border-sky-500 focus:outline-emerald-500 md:w-[550px]"
                rows={4}
              ></textarea>
            </fieldset>

            <button className="btn bg-purple-500 ml-4">review</button>
          </form>
        </div>
        {/* show review  */}
        <div className="">
          <h1 className="text-center text-3xl  font-semibold mb-4">
            All reviews
          </h1>
          <div>
            {allReviews.length == 0 && (
              <img
                className="md:w-[300px]"
                src="https://i.ibb.co.com/HpYyyncx/Whats-App-Image-2025-08-09-at-10-48-50-PM-removebg-preview.png"
                alt="review image"
              />
            )}
          </div>
          {/*  review of the  all user */}
          {allReviews?.map((review) => (
            <div
              key={review._id}
              className="flex items-center border-b border-sky-400"
            >
              <div className="p-5">
                <img
                  className="w-20 "
                  src={review?.photoURL}
                  alt="user photo"
                />
              </div>

              <div className="md:pt-4">
                <h1 className="text-xl font-semibold">{review.displayName}</h1>
                <p className="max-w-[400px]">{review.user_review}</p>
                {review.reviewEmail === user?.email && (
                  <div className="gap-10 flex">
                    {/* edit */}
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                      className="text-green-400 hover:text-green-600"
                    >
                      <MdOutlineModeEditOutline size={26} />
                    </button>
                    {/* delete */}
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="text-red-400 hover:text-red-600"
                    >
                      <RiDeleteBin6Line size={26} />
                    </button>
                    <EditReview
                      review={review}
                      setTrue={setTrue}
                      isTrue={isTrue}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Review;
