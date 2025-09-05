import React from "react";
import { Link } from "react-router-dom";

function StudentCard({ student, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4 transition-transform transform hover:scale-105">
      <img
        src={student.avatar || "https://via.placeholder.com/150"}
        alt={student.name}
        className="w-32 h-32 rounded-full object-cover border-4 border-orange-100 shadow-md"
      />
      <h2 className="mt-4 text-xl font-semibold text-gray-800">
        {student.name}
      </h2>
      <p className="mt-2 text-gray-600 text-center">{student.about}</p>
      <div className="mt-4 flex space-x-3">
        <Link
          to={`/student/${student.id}`}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition-colors duration-300 font-semibold"
        >
          View
        </Link>
        <Link
          to={`/edit/${student.id}`}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-colors duration-300 font-semibold"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(student.id)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors duration-300 font-semibold"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
