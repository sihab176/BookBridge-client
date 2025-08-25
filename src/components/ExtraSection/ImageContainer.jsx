import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Book1 from "../../assets/bk-1.jpg";
import Book2 from "../../assets/bk-2.jpg";
import Book3 from "../../assets/bk3.jpg";
import Book4 from "../../assets/bk-4.jpg";
import Book5 from "../../assets/bk-5.jpg";
import Book6 from "../../assets/bk-6.jpg";
import Book7 from "../../assets/bk-7.jpg";
import Book8 from "../../assets/bk-8.jpg";
const ImageContainer = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="w-11/12 mx-auto my-20 max-w-[1280px]">
      <h1 className="text-3xl  font-bold mt-20 mb-10">Special Editions</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10  ">
        {/* div-1 */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 * 0.5, duration: 0.5 }}
          className="border p-3 border-gray-300 rounded hover:shadow-xl hover:shadow-black/10"
        >
          <section className=" relative  overflow-hidden group">
            <div className="flex justify-center items-center relative  ">
              <img className="w-full " src={Book1} alt="" />

              {/* Hidden text that fades in on hover */}
              <div className="absolute inset-0  text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 ">
                <img className="w-full " src={Book3} alt="" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Extraordinaries</h3>
              <div className="text-orange-400 flex justify-center text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="font-bold text-sky-500">
                $760
                <s className="text-gray-600 ml-1"> $800</s>
              </p>
            </div>
          </section>
        </motion.div>
        {/* div-2 */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 * 0.5, duration: 0.5 }}
          className="border p-3 border-gray-300 rounded hover:shadow-xl hover:shadow-black/10"
        >
          <section className=" relative  overflow-hidden group">
            <div className="flex justify-center items-center relative  ">
              <img className="w-full " src={Book2} alt="" />

              {/* Hidden text that fades in on hover */}
              <div className="absolute inset-0  text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 ">
                <img className="w-full " src={Book4} alt="" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">say everything</h3>
              <div className="text-orange-400 flex justify-center text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="font-bold text-sky-500">
                $999
                <s className="text-gray-600 ml-1"> $1010</s>
              </p>
            </div>
          </section>
        </motion.div>
        {/* div-3 */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 * 0.5, duration: 0.5 }}
          className="border p-3 border-gray-300 rounded hover:shadow-xl hover:shadow-black/10"
        >
          <section className=" relative  overflow-hidden group">
            <div className="flex justify-center items-center relative  ">
              <img className="w-full " src={Book5} alt="" />

              {/* Hidden text that fades in on hover */}
              <div className="absolute inset-0  text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 ">
                <img className="w-full " src={Book6} alt="" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Being seen</h3>
              <div className="text-orange-400 flex justify-center text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="font-bold text-sky-500">
                $630
                <s className="text-gray-600 ml-1"> $690</s>
              </p>
            </div>
          </section>
        </motion.div>
        {/* div-4 */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 * 0.5, duration: 0.5 }}
          className="border p-3 border-gray-300 rounded hover:shadow-xl hover:shadow-black/10"
        >
          <section className=" relative  overflow-hidden group">
            <div className="flex justify-center items-center relative  ">
              <img className="w-full " src={Book7} alt="" />

              {/* Hidden text that fades in on hover */}
              <div className="absolute inset-0  text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 ">
                <img className="w-full " src={Book8} alt="" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">The ministry of time</h3>
              <div className="text-orange-400 flex justify-center text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="font-bold text-sky-500">
                $870
                <s className="text-gray-600 ml-1"> $899</s>
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageContainer;
