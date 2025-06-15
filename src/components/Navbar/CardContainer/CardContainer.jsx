import React from "react";
import CardShower from "./CardShower";

const CardContainer = ({ fetchData }) => {
  const test=fetchData.sort((a,b)=>b.upVote -a.upVote)
  const mainData=test.slice(0,6)
  

 
  return (
    <div className="w-11/12 mx-auto my-20">
      <h1 className="text-center text-5xl font-bold text-purple-500 mb-20">Popular Books</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-28">
        {mainData.map((book) => (
          <CardShower book={book} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
