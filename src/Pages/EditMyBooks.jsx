import React, { use, useEffect } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const EditMyBooks = () => {
  useEffect(() => {
    document.title = "Book Bridge | EditBook";
  }, []);

  const { user } = use(AuthContext);
  const { accessToken } = user;
  const { email, displayName } = user || {};

  const updateData = useLoaderData();

  const {
    Book_Author,
    Book_Title,
    Cover_photo,
    Total_Page,
    category,
    overview,
    status,
    _id,
    upVote,
  } = updateData;
  // console.log(updateData);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const bookData = Object.fromEntries(formData.entries());
    // console.log(bookData);

    //axios put method
    axios
      .put(`http://localhost:3000/books/${_id}`, bookData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "successfully update the book",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <div className="my-6 w-11/12 mx-auto">
      <div className="p-12  ">
        <div className=" space-y-4 pb-10 border-b text-center">
          <h1 className="text-4xl text-emerald-500 font-bold ">
            Update your book
          </h1>
          <p>
            Ferns are non-flowering vascular plants with feathery fronds and a
            preference for moist, shaded environments. <br /> They reproduce via
            spores rather than seeds .
          </p>
        </div>

        <form onSubmit={handleUpdate}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 pt-4">
            {/* user name */}
            <fieldset className="fieldset   rounded-box w-full  p-4">
              <label className="label">User Name</label>
              <input
                type="text"
                className="input w-full  border-purple-500"
                placeholder="Name.."
                value={displayName}
                name="Name"
              />
            </fieldset>
            {/* user email */}
            <fieldset className="fieldset   rounded-box w-full  p-4">
              <label className="label">User Email</label>
              <input
                type="email"
                className="input w-full  border-purple-500"
                placeholder="email"
                value={email}
                name="email"
              />
            </fieldset>
            {/* Book title name */}
            <fieldset className="fieldset   rounded-box w-full  p-4">
              <label className="label">Book Title</label>
              <input
                type="text"
                className="input w-full  border-purple-500"
                placeholder="Book Title"
                required
                name="Book_Title"
                defaultValue={Book_Title}
              />
            </fieldset>
            {/* photo  */}
            <fieldset className="fieldset   rounded-box w-full  p-4">
              <label className="label">cover Photo</label>
              <input
                type="url"
                className="input w-full  border-purple-500"
                placeholder="https//...."
                name="Cover_photo"
                defaultValue={Cover_photo}
              />
            </fieldset>
            {/* total page  */}
            <fieldset className="fieldset   rounded-box w-full  p-4">
              <label className="label">Total Page</label>
              <input
                type="number"
                className="input w-full border-purple-500"
                placeholder="page..."
                name="Total_Page"
                defaultValue={Total_Page}
                required
              />
            </fieldset>

            {/* Book author*/}
            <fieldset className="fieldset   rounded-box w-full  p-4">
              <label className="label">Book Author</label>
              <input
                type="text"
                className="input w-full border-purple-500"
                placeholder="Author"
                name="Book_Author"
                defaultValue={Book_Author}
                required
              />
            </fieldset>
            {/* ---------------------------------- */}
            <div className="flex w-full md:col-span-2">
              {/* upvote */}
              <fieldset className="fieldset   rounded-box w-full  p-4">
                <label className="label">Up vote</label>
                <input
                  type="text"
                  className="input w-full border-purple-500"
                  value={upVote}
                  name="upVote"
                  required
                />
              </fieldset>
              {/* Reading status */}
              <fieldset className="fieldset   rounded-box w-full  p-4">
                <label className="label">Reading Status</label>
                <select
                  defaultValue={status}
                  className="select select-accent w-full border-purple-500"
                  name="status"
                  // onChange={handleLevel}
                >
                  <option disabled={true}>status</option>
                  <option>Read</option>
                  <option>Reading</option>
                  <option>Want-to-read</option>
                </select>
              </fieldset>
              {/* category */}
              <fieldset className="fieldset   rounded-box w-full  p-4">
                <label className="label">Book Category</label>
                <select
                  defaultValue={category}
                  className="select select-secondary w-full border-purple-500"
                  name="category"

                  //  onChange={handleCategory}
                >
                  <option disabled={true}>Category</option>
                  <option>Fiction</option>
                  <option>Non-Fiction</option>
                  <option>Fantasy</option>
                </select>
              </fieldset>
            </div>
            {/* description */}
            <fieldset className="fieldset   rounded-box w-full  p-4 md:col-span-2 ">
              <label className="label">Book Overview</label>
              <textarea
                name="overview"
                defaultValue={overview}
                id=""
                className="border border-purple-500 forced-colors:to-blue-400"
                rows={4}
              ></textarea>
            </fieldset>

            {/* buttons */}

            <button
              type="submit"
              className="relative z-10 px-6 py-3  font-semibold  w-32 ml-4  btn bg-emerald-500 overflow-hidden group shadow-xl"
            >
              <span className="relative z-10">UpdateBook</span>

              {/* Left-to-right background sweep effect */}
              <span className="absolute top-0 left-0 h-full w-0 bg-sky-500 transition-all duration-700 ease-out group-hover:w-full z-0"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMyBooks;
