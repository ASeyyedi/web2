import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function CourseIntro({ course }) {
  const defaultCourse = {
    title: "Web 2 — Design and Development",
    description:
      "This course covers advanced web development topics, SPA principles, state management, and security best practices.",
    units: 3,
    term: "Bahman 1403",
  };

  const currentCourse = course || defaultCourse;

  return (
    <motion.div id="course"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col space-y-6 max-w-full hover:scale-105 transform transition-transform duration-500 h-[500px]"
    >
      <h2 className="text-4xl font-extrabold text-gray-800">Course Intro</h2>
      <p className="text-gray-700 text-lg md:text-xl">{currentCourse.description}</p>
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
        <p className="text-gray-700">
          <span className="font-semibold">Units:</span> {currentCourse.units}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Term:</span> {currentCourse.term}
        </p>
      </div>
    </motion.div>
  );
}

export default CourseIntro;
