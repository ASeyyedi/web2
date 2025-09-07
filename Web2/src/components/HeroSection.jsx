import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function HeroSection({ course }) {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg shadow-lg p-12 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12 transition-all duration-500 mt-20"
    >
      {/* Text Content */}
      <motion.div
        className="flex-1 space-y-6"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold">
          {course?.title || "Web 2 Course"}
        </h1>
        <p className="text-xl md:text-2xl">
          {course?.summary ||
            "Learn advanced web development concepts including SPA, state management, and security."}
        </p>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="#"
            className="inline-block mt-6 px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg shadow hover:bg-gray-100 transition-colors duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 1 }}
      >
        <img
          src={
            course?.cover ||
            "https://via.placeholder.com/400x240?text=Course+Image"
          }
          alt="Course"
          className="w-80 h-60 md:w-96 md:h-64 rounded-xl shadow-xl object-cover border-4 border-white"
        />
      </motion.div>
    </motion.section>
  );
}

export default HeroSection;
