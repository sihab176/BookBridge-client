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
    </div>
  );
};

export default CardContainer;
