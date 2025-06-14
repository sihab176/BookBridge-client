import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Lottie from "lottie-react";
import reviewAnimition from "../../src/assets/Animation - 1749912324124.json";

const Details = () => {
  const { user } = use(AuthContext);
  const data = useLoaderData();
  const [singleData, setSingleData] = useState(data);
  const {
    Book_Author,
    Book_Title,
    Cover_photo,
    category,
    upVote,
    Total_Page,
    status,
    email,
    overview,
    _id,
  } = singleData || {};
  // console.log(category, upVote);

  // handle upvote
  const handleUpVote = () => {
    if (user?.email === email) {
      return toast.warn("you cant Upvote own book ");
    }
    const upVoteInfo = {
      bookId: _id,
      upvoterEmail: user?.email,
    };

    // axios
    axios
      .post(`http://localhost:3000/upVote/${_id}`, upVoteInfo)
      .then((res) => {
        console.log(res);
        setSingleData((prev) => {
          return { ...prev, upVote: prev.upVote + 1 };
        });
      });
  };

  const handleReview = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const bookData = Object.fromEntries(formData.entries());
    console.log(bookData);
  };

  return (
    <div className="w-11/12 mx-auto  my-20">
      <section className="mt-16 mb-16 flex flex-col md:flex-row justify-center">
        <div className="bg-sky-100 p-16 rounded-3xl ">
          <img className="w-[420px] " src={Cover_photo} alt="" />
        </div>
        <div className="md:w-[550px] px-10">
          <h1 className="text-3xl">{Book_Title}</h1>
          <p>
            Write By: <span className="text-gray-400">{Book_Author}</span>
          </p>
          <div className="border-b border-gray-400 p-3"></div>
          <p className="p-3 text-green-400">{category}</p>
          <div className="border-b border-gray-400 "></div>
          <p>
            <span className="font-bold">overview</span>{" "}
            <span className="text-gray-400">{overview}</span>
          </p>
          {/* <div className='flex gap-16 mt-6 items-center'>
                    <p className='font-bold'>Tag:</p>
                    <div className='flex gap-16 text-green-400 my-3'>
                    {
                        tags.map(tag=><p>{tag}</p>)
                    }
                    </div>
                </div> */}
          <div className="border-b border-gray-400 p-3 "></div>
          <div className="space-y-4 mb-2">
            <p>
              Total Pages :{" "}
              <span className="text-purple-400">{Total_Page}</span>
            </p>
            <p>
              upVote: <span className="text-purple-500">{upVote}</span>
            </p>
            <p>
              Status: <span className="text-gray-400">{status}</span>
            </p>
            <p>
              email: <span className="text-gray-400">{email}</span>
            </p>
          </div>

          <button onClick={handleUpVote} className="btn  bg-purple-500 mr-4 ">
            up vote
          </button>
        </div>
      </section>
      {/* -----------------------  review  */}
      <div className="flex items-center">
        <div className="w-[500px]">
          <Lottie animationData={reviewAnimition} loop={true}></Lottie>
        </div>
        <div>
          <form onSubmit={handleReview}>
            <fieldset className="fieldset   rounded-box w-full ">
              <label className="label">User Name</label>
              <input
                type="text"
                className="input w-[600px]  border-purple-500"
                placeholder="Name.."
                name="review"
              />
            </fieldset>
            {/* rating */}
            {/* <div className="rating">
              <input
                type="radio"
                name="rating-2"
                value="1"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                value="2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                value="3"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                value="4"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                value="5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div> */}
            <button className="btn ">review</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Details;
