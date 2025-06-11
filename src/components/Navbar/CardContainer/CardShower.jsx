import React from "react";
import { BiLike } from "react-icons/bi";

const CardShower = ({ book }) => {
  console.log(book);
  const { Book_Author, Book_Title, Cover_photo, category, upVote } = book;
  return (
    <div>
      <div className=" rounded-md shadow-md ">
        <div className="relative">
          <img
            src={Cover_photo}
            alt=""
            className="object-cover py-6 object-center w-full rounded-t-md h-[270px] bg-sky-300"
          />
          <button className="absolute bottom-[-10px] bg-purple-400  px-5 rounded-full ml-5 flex items-center gap-1">
            <BiLike /> Like : {upVote}
          </button>
        </div>
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold ">{Book_Title}</h2>
            <p className=" text-gray-400">
              <span className="font-semibold">Author</span> : {Book_Author}
            </p>
            <div className="flex justify-between items-center ">
              <p className=" text-gray-400">
                <span className="font-semibold">category</span> : {category}
              </p>
              <button
                type="submit"
                className="relative z-10 px-4 py-1 btn btn-sm    bg-base-100 overflow-hidden group shadow-xl transition-all duration-300 hover:text-white"
              >
                <span className="relative z-10">View More</span>

                {/* Background hover effect */}
                <span className="absolute left-0 top-0 h-full w-full bg-emerald-500 scale-0 group-hover:scale-150 transition-transform duration-700 ease-out rounded-full z-0"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShower;
