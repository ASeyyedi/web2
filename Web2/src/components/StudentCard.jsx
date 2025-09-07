import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function StudentCard({ student, onDelete }) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, rotate: 1 }}
    >
      {/* Avatar */}
      <motion.img
        src={student.avatar || "https://via.placeholder.com/150"}
        alt={student.name}
        className="w-32 h-32 rounded-full object-cover border-4 border-orange-100 shadow-md"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200 }}
      />

      {/* Name & About */}
      <h2 className="mt-4 text-xl font-semibold text-gray-800">{student.name}</h2>
      <p className="mt-2 text-gray-600 text-center h-[50px]">{student.about}</p>

      {/* Buttons */}
      <div className="mt-4 flex items-center space-x-3">
        {[
          {
            to: `/student/${student.id}`,
            text: "View",
            color: "bg-orange-500 hover:bg-orange-600",
          },
          {
            to: `/edit/${student.id}`,
            text: "Edit",
            color: "bg-green-500 hover:bg-green-600",
          },
        ].map((btn, i) => (
          <motion.div key={i} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              to={btn.to}
              className={`px-4 py-2 ${btn.color} text-white rounded-lg shadow transition-colors duration-300 font-semibold`}
            >
              {btn.text}
            </Link>
          </motion.div>
        ))}

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <button
            onClick={() => onDelete(student.id)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors duration-300 font-semibold"
          >
            Delete
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default StudentCard;
