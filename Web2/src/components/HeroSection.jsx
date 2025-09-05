import React from "react";
import { Link } from "react-router-dom";

function HeroSection({ course }) {
  return (
    <section className="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg shadow-lg p-12 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12 transition-all duration-500">
      {/* Text Content */}
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          {course?.title || "Web 2 Course"}
        </h1>
        <p className="text-xl md:text-2xl">
          {course?.summary ||
            "Learn advanced web development concepts including SPA, state management, and security."}
        </p>
        <Link
          to="#"
          className="inline-block mt-6 px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg shadow hover:bg-gray-100 transition-colors duration-300"
        >
          Learn More
        </Link>
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src={
            course?.cover ||
            "https://via.placeholder.com/400x240?text=Course+Image"
          }
          alt="Course"
          className="w-80 h-60 md:w-96 md:h-64 rounded-xl shadow-xl object-cover border-4 border-white"
        />
      </div>
    </section>
  );
}

export default HeroSection;
