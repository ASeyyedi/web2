import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaLinkedin, FaGlobe } from 'react-icons/fa';
import axios from 'axios';

function TeacherCard() {
  const [instructor, setInstructor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInstructor() {
      try {
        const res = await axios.get('http://localhost:3001/instructor');
        setInstructor(res.data);
      } catch (err) {
        console.error('Error fetching instructor:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchInstructor();
  }, []);

  if (loading) return <p className="text-center p-6">Loading instructor...</p>;
  if (!instructor) return <p className="text-center p-6">Instructor data not found.</p>;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-3xl shadow-3xl p-12 flex flex-col md:flex-row items-center justify-start gap-12  max-w-7xl mx-auto hover:scale-105 transform transition-transform duration-500 h-[500px] w-[720px]"
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        <img
          src={instructor.avatar}
          alt={instructor.name}
          className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-orange-300 shadow-lg"
        />
      </div>

      {/* Info */}
      <div className="flex-1 space-y-4 text-center md:text-left">
        <h2 className="text-5xl font-extrabold text-gray-800 truncate">{instructor.name}</h2>
        <p className="text-lg md:text-xl text-gray-700">{instructor.bio}</p>
        <p className="text-gray-700"><span className="font-semibold">Email:</span> {instructor.email}</p>
        <p className="text-gray-700"><span className="font-semibold">Office:</span> {instructor.office}</p>
        <p className="text-gray-700"><span className="font-semibold">Office Hours:</span> {instructor.officeHours}</p>
        <p className="text-gray-700"><span className="font-semibold">Courses:</span> {instructor.courses.join(', ')}</p>

        <div className="flex justify-center md:justify-start space-x-6 mt-6">
          <a
            href={instructor.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 font-semibold space-x-2"
          >
            <FaLinkedin size={22} /> <span>LinkedIn</span>
          </a>
          <a
            href={instructor.website}
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-xl shadow-lg hover:bg-gray-900 transition-all duration-300 font-semibold space-x-2"
          >
            <FaGlobe size={22} /> <span>Website</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default TeacherCard;
