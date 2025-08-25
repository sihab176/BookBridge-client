import React from "react";
import CardShower from "./CardShower";
import { inView, motion } from "framer-motion";

const CardContainer = ({ fetchData }) => {
  const test = fetchData?.sort((a, b) => b.upVote - a.upVote);
  const mainData = test.slice(0, 8);

  return (
    <div className=" my-20   mx-10">
      <h1 className=" text-4xl font-bold  mb-20">Popular Books</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {mainData.map((book, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3, ease: "easeInOut" }, // smoother hover
            }}
          >
            <CardShower book={book} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
