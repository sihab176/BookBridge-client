import axios from "axios";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const EditReview = ({ review, setTrue, isTrue }) => {
  const handleReview = (e) => {
    e.preventDefault();
    const updateReview = e.target.user_review.value;
    // console.log(updateReview);
    console.log(review._id);

    //
    axios
      .put(
        `https://assignment-11-server-six-alpha.vercel.app/review/${review?._id}`,
        {
          user_review: updateReview,
        }
      )
      .then((res) => {
        setTrue(!isTrue);
        toast.success("you successfully update a review");
      });
  };
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <h1 className="text-center text-3xl  font-semibold mb-4">
              Post a review
            </h1>
            <form onSubmit={handleReview}>
              <fieldset className="fieldset   rounded-box w-full  p-4 md:col-span-2 ">
                <label className="label">Book Overview</label>
                <textarea
                  name="user_review"
                  placeholder="Share experience at this page"
                  defaultValue={review.user_review}
                  required
                  id=""
                  className="border border-sky-500 focus:outline-emerald-500 w-full"
                  rows={4}
                ></textarea>
              </fieldset>

              <button className="btn ml-4">edit review</button>
            </form>
          </div>
        </div>
      </dialog>
      <ToastContainer />
    </div>
  );
};

export default EditReview;
