import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Lottie from "lottie-react";
import Review from "../components/Review/Review";
import Swal from "sweetalert2";
// import reviewAnimition from "../../src/assets/Animation - 1749912324124.json";

const Details = () => {
  const { user } = use(AuthContext);
  const { accessToken } = user;
  // const data = useLoaderData();
  const { id } = useParams();
  const [singleData, setSingleData] = useState();

  const [isTrue, setTrue] = useState(false);

  useEffect(() => {
    axios
      .get(`https://assignment-11-server-six-alpha.vercel.app/books/${id}`)
      .then((res) => {
        // console.log(res.data);
        setSingleData(res.data);
      });
  }, [isTrue]);

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

  //? handle upvote ------------>
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
      .post(
        `https://assignment-11-server-six-alpha.vercel.app/upVote/${_id}`,
        upVoteInfo
      )
      .then((res) => {
        // console.log(res);
        setSingleData((prev) => {
          return { ...prev, upVote: prev.upVote + 1 };
        });
      });
  };

  //! handle status ----------->

  const [state, setState] = useState(status);

  useEffect(() => {
    if (status) {
      setState(status);
    }
  }, [status]);

  const handleStatusChange = (e) => {
    const current = e.target.value;
    if (user?.email !== email) {
      toast.warn("This is not your book you can not change this.");
      return;
    }

    if (state === "Read") {
      toast.warn("You can not change the status");
      return;
    }
    if ((state == "Read" || state == "Reading") && current === "Want-to-Read") {
      return;
    }
    setState(current);
    setTrue(!isTrue);
  };
  // console.log("state", state);

  useEffect(() => {
    if (_id) {
      axios
        .put(
          `https://assignment-11-server-six-alpha.vercel.app/books/${_id}`,
          { status: state },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => {
          if (res.data.modifiedCount) {
            Swal.fire({
              title: "successfully update the book",
              icon: "success",
              draggable: true,
            });
          }
          setTrue(!isTrue);
        })
        .catch((err) => {
          // console.log(err);
        });
    }
  }, [isTrue]);

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

          <div className=" flex items-center gap-4">
            {/* button upvote */}
            <button
              onClick={handleUpVote}
              className="btn  bg-purple-500 mr-4 mt-4"
            >
              up vote
            </button>
            {/* select */}
            <select
              className="select select-accent w-full border-purple-500 mt-4"
              name="status"
              onChange={handleStatusChange}
              value={state}
            >
              <option disabled>status</option>
              <option value="Want-to-Read">Want-to-Read</option>
              <option value="Reading">Reading</option>
              <option value="Read">Read</option>
            </select>
          </div>
        </div>
      </section>
      {/* -----------------------  review-----------------------  */}
      <Review userEmail={email} userId={_id}></Review>
      <ToastContainer />
    </div>
  );
};

export default Details;
