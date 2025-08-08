import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Book1 from "../../assets/bk-1.jpg";
import Book2 from "../../assets/bk-2.jpg";
// import Book3 from "../../assets/bk-3.jpg";
// import Book4 from "../../assets/bk-4.jpg";
// import Book5 from "../../assets/bk-5.jpg";
// import Book6 from "../../assets/bk-6.jpg";
// import Book7 from "../../assets/bk-7.jpg";
// import Book8 from "../../assets/bk-8.jpg";
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
          <div className="flex justify-center items-center relative z-10 ">
            <img className=" " height={680} width={680} src={Book1} alt="" />
            <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-indigo-500 transition-all duration-700 group-hover:h-full z-0  "></span>
            {/* Hidden text that fades in on hover */}
            <div className="absolute inset-0 p-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
              <h1 className="text-2xl font-bold text-black">
                this is good for health
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                cum tempora tempore quasi. Vel, ad.
              </p>
            </div>
          </div>
        </motion.div>
        {/* second div */}
        {/* <motion.div
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
            <h1>Machu picchu</h1>
            <div className="text-orange-400 flex ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="">$ 56.00</p>
          </div>
        </motion.div> */}
        {/* third div */}
        {/* <motion.div
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
            <h1>mockingBird</h1>
            <div className="text-orange-400 flex ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="">$ 62.00</p>
          </div>
        </motion.div> */}
        {/* forth div */}
        {/* <motion.div
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
            <h1>To Killa</h1>
            <div className="text-orange-400 flex ">
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="">$ 48.00</p>
          </div>
        </motion.div> */}
        {/* sixth div */}
        {/* <motion.div
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
            <h1>Inca wraith</h1>
            <div className="text-orange-400 flex ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="">$ 72.00</p>
          </div>
        </motion.div> */}
        <div className="flex justify-center items-center relative z-10 ">
          <img className=" w[240px]" src={Book1} alt="" />
          <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-indigo-500 transition-all duration-700 group-hover:h-full z-0  "></span>
          {/* Hidden text that fades in on hover */}
          <div className="absolute inset-0 p-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
            <h1 className="text-2xl font-bold text-black">
              this is good for health
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              cum tempora tempore quasi. Vel, ad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
