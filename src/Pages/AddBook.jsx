import React, { useState } from "react";

const AddBook = () => {
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  // console.log(category, careLevel);

  // const handleCategory = (e) => {
  //   setCategory(e.target.value);
  // };
  // const handleLevel = (e) => {
  //   setStatus(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const plantData = Object.fromEntries(formData.entries());
    const allData = { ...plantData, category, status };
    console.log(allData);
    console.log(plantData);
  };

  return (
    <div>
      {" "}
      <div className="my-10 w-11/12 mx-auto">
        <div className="p-12  ">
          <div className=" space-y-4 pb-10 border-b border-blue-300">
            <h1 className="text-4xl text-sky-400 font-bold">
              Add your favourite book{" "}
            </h1>
            <p>
              Ferns are non-flowering vascular plants with feathery fronds and a
              preference for moist, shaded environments. <br /> They reproduce
              via spores rather than seeds .
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 pt-4">
              {/* user name */}
              <fieldset className="fieldset   rounded-box w-full  p-4">
                <label className="label">User Name</label>
                <input
                  type="text"
                  className="input w-full  border-purple-500"
                  placeholder="Name.."
                  // value={displayName}
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
                  // value={email}
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
                  required
                />
              </fieldset>
              {/* Reading status */}
              <fieldset className="fieldset   rounded-box w-full  p-4">
                <label className="label">Reading Status</label>
                <select
                  defaultValue="status"
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
                  defaultValue="Category"
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
              {/* ---------------------------------------- */}

              {/* Book author*/}
              <fieldset className="fieldset   rounded-box w-full  p-4">
                <label className="label">Book Author</label>
                <input
                  type="text"
                  className="input w-full border-purple-500"
                  placeholder="Author"
                  name="Book_Author"
                />
              </fieldset>
              {/* description */}
              <fieldset className="fieldset   rounded-box w-full  p-4 md:col-span-2 ">
                <label className="label">Book Overview</label>
                <textarea
                  name="overview"
                  id=""
                  className="border border-purple-500 forced-colors:to-blue-400"
                  rows={4}
                ></textarea>
              </fieldset>

              <fieldset className="fieldset   rounded-box w-full  p-4">
                <label className="label">Up vote</label>
                <input
                  type="number"
                  className="input w-full border-purple-500"
                  placeholder="....."
                  name="up_vote"
                />
              </fieldset>
              {/* buttons */}
              <div className="flex justify-center gap-10 items-center md:col-span-2">
                <button
                  type="button"
                  className="  btn bg-blue-400 text-white w-32 border-0"
                >
                  Up Vote
                </button>
                <button className="  btn bg-purple-500 text-white w-32 border-0">
                  Add Book
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
