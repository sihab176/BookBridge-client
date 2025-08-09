import React from "react";
import CardShower from "./CardShower";
import { inView, motion } from "framer-motion";

const CardContainer = ({ fetchData }) => {
  const test = fetchData?.sort((a, b) => b.upVote - a.upVote);
  const mainData = test.slice(0, 6);

  return (
    <div className="w-11/12 mx-auto my-20 max-w-[1280px]">
      <h1 className=" text-4xl font-bold  mb-20">Popular Books</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-28">
        {mainData.map((book, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <CardShower book={book} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
