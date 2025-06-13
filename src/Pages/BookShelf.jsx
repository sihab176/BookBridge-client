import React from "react";
import { useLoaderData } from "react-router";
import CardShower from "../components/Navbar/CardContainer/CardShower";

const BookShelf = () => {
  const allData = useLoaderData();
  console.log(allData);
  return (
    <div className="w-11/12 mx-auto my-20">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-28">
        {allData.map((book) =><CardShower book={book}></CardShower>)}
      </div>
    </div>
  );
};

export default BookShelf;
