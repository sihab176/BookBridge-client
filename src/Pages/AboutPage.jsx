import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div>
      <div className="bg-base-100 min-h-screen pt-16">
        {/* Hero Section */}
        <motion.div
          className="text-center py-16 bg-gradient-to-r from-[#c5dedd] to-[#d2a865] text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4">About BookBridge</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Connecting readers with stories, knowledge, and imagination.
          </p>
        </motion.div>

        {/* Who We Are */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold  mb-4">Who We Are</h2>
            <p className="text-gray-400 mb-4">
              BookBridge is a digital library platform where readers can
              explore, filter, and discover books across genres and categories.
              Our mission is to create a bridge between stories and readers
              worldwide, providing easy access to knowledge and entertainment.
            </p>
            <p className="text-gray-400">
              Whether you are a passionate reader or a casual explorer,
              BookBridge ensures that every book you need is just a click away.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="https://i.ibb.co.com/rK020RdD/about.jpg"
              alt="About BookBridge"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-base-100 py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              className="bg-base-100 rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-[#e6bf84]">
                Our Mission
              </h3>
              <p className="text-gray-400">
                To empower readers by making books accessible, affordable, and
                enjoyable. We aim to create a seamless reading experience that
                inspires curiosity and lifelong learning.
              </p>
            </motion.div>

            <motion.div
              className="bg-base-100 rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-[#e6bf84]">
                Our Vision
              </h3>
              <p className="text-gray-400">
                To build the largest global community of readers, bridging
                cultures, languages, and generations through the power of books.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
