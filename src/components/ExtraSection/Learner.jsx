import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BGImg from "../../assets/Motivation March Banner.png";
import Girl from "../../assets/girl-1-removebg-preview.png";

const Learner = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div className="w-11/12 mx-auto my-20 max-w-[1280px]">
      <h1 className="text-4xl font-bold  my-20">Our Latest Blog</h1>
      <div className="flex md:flex-row flex-col gap-20 items-center ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="space-y-3"
        >
          <h1 className="text-4xl font-bold">
            Best Choice For <br /> Learners
          </h1>
          <div className="pt-6">
            <i>
              Bookshelf is a modern web application designed to help you
              organize, track, and <br /> enjoy your reading journey. Whether{" "}
              you’re a casual reader or a dedicated <br /> bookworm . Bookshelf{" "}
              provides a clean, user-friendly interface to manage <br /> your
              books in three key categories:
            </i>
          </div>
          <br />
          <button className="bg-sky-500 px-5 py-2 hover:bg-purple-400 ">
            READ MORE
          </button>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ backgroundImage: `url(${BGImg})` }}
          className=""
        >
          <img src={Girl} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Learner;
