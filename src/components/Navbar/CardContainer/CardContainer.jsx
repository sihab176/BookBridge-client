import React from "react";
import CardShower from "./CardShower";

const CardContainer = ({ fetchData }) => {
  return (
    <div className="w-11/12 mx-auto my-20">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-28">
        {fetchData.map((book) => (
          <CardShower book={book} />
        ))}
      </div>

      {/* -------------------------------------------- */}

      <button
        type="submit"
        className="relative z-10 px-6 py-3 mx-auto flex items-center justify-center gap-2 text-lg font-semibold text-gray-800 border-2 border-gray-200 rounded-full bg-gray-50 overflow-hidden group shadow-xl transition-all duration-300 hover:text-white"
      >
        <span className="relative z-10">Explore</span>
        <svg
          className="w-8 h-8 p-2 transition-transform duration-300 ease-linear transform rotate-45 border border-gray-700 rounded-full text-gray-800 group-hover:rotate-90 group-hover:bg-white group-hover:border-transparent"
          viewBox="0 0 16 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            className="fill-current"
          />
        </svg>

        {/* Background hover effect */}
        <span className="absolute left-0 top-0 h-full w-full bg-emerald-500 scale-0 group-hover:scale-150 transition-transform duration-700 ease-out rounded-full z-0"></span>
      </button>
    </div>
  );
};

export default CardContainer;
