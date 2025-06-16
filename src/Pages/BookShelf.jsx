import React, { useEffect, useState } from "react";

import CardShower from "../components/Navbar/CardContainer/CardShower";
import { inView, motion } from "framer-motion";

const BookShelf = () => {
  const [allData, setAllData] = useState([]);
  const [search, setSearch] = useState("");

  const [newStatus, setNewStatus] = useState(null);
  //search
  useEffect(() => {
    fetch(`http://localhost:3000/books?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  }, [search]);

  useEffect(() => {
    fetch(`http://localhost:3000/books?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => {
        if (newStatus) {
          const filterData = data.filter(
            (element) => element.status === newStatus
          );
          setAllData(filterData);
          console.log(filterData);
        }
      });
  }, [newStatus]);

  return (
    <div className="w-11/12 mx-auto my-14">
      {/* search bar  */}
      <h1 className="text-sky-400 text-4xl font-bold text-center mb-4">
        All Books
      </h1>

      <fieldset className="w-full space-y-1 ">
        <label htmlFor="Search" className="hidden">
          Search
        </label>
        <div className="flex justify-center items-center mb-10">
          <div className="relative " bis_skin_checked="1">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                title="search"
                className="p-1 focus:outline-none "
                fdprocessedid="gjpl0b"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 "
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              name="Search"
              placeholder="Search..."
              className="md:w-[550px] py-3 pl-10 px-2 text-sm rounded-l-4xl border border-sky-600 focus:outline-violet-600"
            />
          </div>
          {/* Reading status */}
          <fieldset className="fieldset">
            <select
              defaultValue="status"
              className="select select-accent md:w-32 h-[46px] bg-purple-400 border-purple-500 rounded-none rounded-r-4xl"
              name="status"
              onChange={(e) => setNewStatus(e.target.value)}
            >
              <option disabled={true}>status</option>
              <option>Read</option>
              <option>Reading</option>
              <option>Want-to-read</option>
            </select>
          </fieldset>
        </div>
      </fieldset>

      <div>
        {allData.length == 0 && (
          <div className="flex justify-center">
            <img
              src="https://t4.ftcdn.net/jpg/09/01/16/97/360_F_901169786_9cXZ3uxVHdR18Wi6OE2Pqge1bWi0kSOM.jpg"
              alt=""
            />
          </div>
        )}
      </div>

      {/* card  */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-28">
        {allData.map((book, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <CardShower book={book}></CardShower>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
