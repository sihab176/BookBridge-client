import React from "react";
import BookOffer1 from "../../assets/bfr-1-removebg-preview.png";
import BookOffer2 from "../../assets/bfr-2-removebg-preview.png";
import BookOffer3 from "../../assets/bfr-3-removebg-preview.png";
import { motion } from "framer-motion";
const OfferSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.07 },
  };
  return (
    // <section className="w-11/12 mx-auto max-w-[1280px]">
    //   <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10 text-black">
    //     {/* section-1 */}
    //     <section className="flex items-center justify-between p-6 bg-[#faedcd] h-[260px] ">
    //       <div className="flex-1 space-y-4">
    //         <h1 className="text-2xl font-semibold">Echoes Of Th Past</h1>
    //         <button className="bg-[#eafffd] hover:bg-[#80ced7] px-3 py-1">
    //           Shop Now
    //         </button>
    //       </div>
    //       <div className="flex-1">
    //         <img className="w-[230px]  " src={BookOffer1} alt="" />
    //       </div>
    //     </section>
    //     {/* section-2 */}
    //     <section className="flex items-center justify-between p-6 bg-[#98c1d9] h-[260px] ">
    //       <div className="flex-1 space-y-4">
    //         <h1 className="text-2xl font-semibold">Echoes Of Th Past</h1>
    //         <button className="bg-[#eafffd] hover:bg-[#80ced7] px-3 py-1">
    //           Shop Now
    //         </button>
    //       </div>
    //       <div className="flex-1">
    //         <img className="w-[230px]  " src={BookOffer2} alt="" />
    //       </div>
    //     </section>
    //     {/* section-3 */}
    //     <section className="flex items-center justify-between p-6 bg-[#fee9e1] h-[260px] ">
    //       <div className="flex-1 space-y-4">
    //         <h1 className="text-2xl font-semibold">Echoes Of Th Past</h1>
    //         <button className="bg-[#eafffd] hover:bg-[#80ced7] px-3 py-1">
    //           Shop Now
    //         </button>
    //       </div>
    //       <div className="flex-1">
    //         <img className="w-[230px]  " src={BookOffer3} alt="" />
    //       </div>
    //     </section>
    //   </div>
    // </section>
    <section className="w-11/12 mx-auto max-w-[1280px]">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 text-black">
        {/* section-1 */}
        <motion.section
          className="flex items-center justify-between p-6 bg-[#faedcd] h-[260px]"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">Echoes Of The Past</h1>
            <button className="bg-[#eafffd] hover:bg-[#80ced7] px-3 py-1">
              Shop Now
            </button>
          </div>
          <div className="flex-1">
            <img className="w-[230px]" src={BookOffer1} alt="" />
          </div>
        </motion.section>

        {/* section-2 */}
        <motion.section
          className="flex items-center justify-between p-6 bg-[#98c1d9] h-[260px]"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">Waves of Memory</h1>
            <button className="bg-[#eafffd] hover:bg-[#80ced7] px-3 py-1">
              Shop Now
            </button>
          </div>
          <div className="flex-1">
            <img className="w-[230px]" src={BookOffer2} alt="" />
          </div>
        </motion.section>

        {/* section-3 */}
        <motion.section
          className="flex items-center justify-between p-6 bg-[#fee9e1] h-[260px]"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">Whispers of Tomorrow</h1>
            <button className="bg-[#eafffd] hover:bg-[#80ced7] px-3 py-1">
              Shop Now
            </button>
          </div>
          <div className="flex-1">
            <img className="w-[230px]" src={BookOffer3} alt="" />
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default OfferSection;
