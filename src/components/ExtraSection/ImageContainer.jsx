import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const ImageContainer = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div className="w-11/12 mx-auto my-20">
      <h1 className="text-5xl text-center font-bold my-20">Special book </h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2   lg:ml-8">
        {/* first div */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 * 0.5, duration: 0.5 }}
        >
          <img
            className="w-[160px]"
            src="https://i.ibb.co/4wM87pP8/bk-1.jpg"
            alt=""
          />
          <div>
            <h1>The Macking bird</h1>
            <div className="text-orange-400 flex ">
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="">$ 36.00</p>
          </div>
        </motion.div>
        {/* second div */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2 * 0.5, duration: 0.5 }}
        >
          <img
            className="w-[160px] h-[200px]"
            src="https://i.ibb.co/M5KknyPS/bk6.webp"
            alt=""
          />
          <div>
            <h1>The Macking bird</h1>
            <div className="text-orange-400 flex ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="">$ 56.00</p>
          </div>
        </motion.div>
        {/* third div */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 3 * 0.5, duration: 0.5 }}
        >
          <img
            className="w-[160px] h-[200px]"
            src="https://i.ibb.co/LdpMG1fj/bk2.jpg"
            alt=""
          />
          <div>
            <h1>The Macking bird</h1>
            <div className="text-orange-400 flex ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="">$ 62.00</p>
          </div>
        </motion.div>
        {/* forth div */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 4 * 0.5, duration: 0.5 }}
        >
          <img
            className="w-[160px] h-[200px]"
            src="https://i.ibb.co/GvDMr7B9/bk5.jpg"
            alt=""
          />
          <div>
            <h1>The Macking bird</h1>
            <div className="text-orange-400 flex ">
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="">$ 48.00</p>
          </div>
        </motion.div>
        {/* sixth div */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 5 * 0.5, duration: 0.5 }}
        >
          <img
            className="w-[160px] h-[200px]"
            src="https://i.ibb.co/JWDB1hH9/bk7.jpg"
            alt=""
          />
          <div>
            <h1>The Macking bird</h1>
            <div className="text-orange-400 flex ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="">$ 72.00</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageContainer;
