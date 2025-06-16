import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Learner = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div className="w-11/12 mx-auto my-20">
      <h1 className="text-5xl font-bold text-center my-20">Our Latest Blog</h1>
      <div className="flex md:flex-row flex-col gap-20 items-center ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-bold">
            Best Choice For <br /> Learners
          </h1>
          <div className="pt-6">
            <i>
              Bookshelf is a modern web application designed to help you
              organize, track, <br /> and enjoy your reading journey. Whether{" "}
              you’re a casual reader or a <br /> dedicated bookworm . Bookshelf{" "}
              provides a clean, user-friendly interface to manage your books in
              three key categories:
            </i>
          </div>
          <br />
          <button className="bg-sky-500 px-7 py-4 hover:bg-purple-400 font-semibold">
            READ MORE
          </button>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className=""
        >
          <img src="https://i.ibb.co/9mSPDDt3/extra-bk.webp" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Learner;
