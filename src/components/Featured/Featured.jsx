import { motion } from "framer-motion";
import {
  GiFigurehead,
  GiFamilyHouse,
  GiLoveMystery,
  GiSecretBook,
  GiMagicBroom,
} from "react-icons/gi";
import { PiPlanetDuotone } from "react-icons/pi";

const categories = [
  { icon: <GiFigurehead size={72} />, title: "Horror" },
  { icon: <PiPlanetDuotone size={72} />, title: "Fiction" },
  { icon: <GiFamilyHouse size={72} />, title: "Family" },
  { icon: <GiLoveMystery size={72} />, title: "Romance" },
  { icon: <GiSecretBook size={72} />, title: "Mystery" },
  { icon: <GiMagicBroom size={72} />, title: "Fantasy" },
];

const Featured = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: { scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" },
  };

  const iconVariants = {
    hover: { rotate: [0, -10, 10, -10, 0], transition: { duration: 0.6 } },
  };

  return (
    <section className="w-11/12 mx-auto max-w-[1280px] pt-20 pb-28 px-6 bg-[#f2e9e4] lora-font">
      <motion.h1
        className="text-3xl font-bold pb-8 text-black"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Top categories
      </motion.h1>

      <motion.div
        className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {categories.map((cat, idx) => (
          <motion.section
            key={idx}
            className="border border-gray-400 text-center py-9 rounded bg-white cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.h1
              className="flex text-[#d4a373] justify-center"
              variants={iconVariants}
              whileHover="hover"
            >
              {cat.icon}
            </motion.h1>
            <h3 className="text-3xl mt-3 text-[#582f0e]">{cat.title}</h3>
          </motion.section>
        ))}
      </motion.div>
    </section>
  );
};

export default Featured;
