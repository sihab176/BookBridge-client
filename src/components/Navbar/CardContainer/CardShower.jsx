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
            <p className=" text-gray-400">
              <span className="font-semibold">category</span> : {category}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShower;
