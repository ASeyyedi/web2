import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function StudentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStudent() {
      try {
        const res = await axios.get(`http://localhost:3001/students/${id}`);
        setStudent(res.data);
      } catch (err) {
        console.error('Error fetching student:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchStudent();
  }, [id]);

  if (loading) return <p className="text-center mt-12">Loading student data...</p>;
  if (!student) return <p className="text-center mt-12">Student not found.</p>;

  // فرض کردن داده‌های اضافه اگر وجود نداشت
  // const courses = student.courses || ['Web 2 — Design', 'React Basics'];
  // const email = student.email || 'student@example.com';
  // const github = student.github || 'https://github.com/example';
  // const linkedin = student.linkedin || 'https://linkedin.com';
  // const gpa = student.gpa || 3.7;
  // const skills = student.skills || ['React', 'Node.js', 'CSS', 'HTML'];
  // const hobbies = student.hobbies || ['Reading', 'Gaming', 'Traveling'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl shadow-2xl mt-12 space-y-8"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <img
          src={student.avatar || 'https://via.placeholder.com/150'}
          alt={student.name}
          className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-orange-300 shadow-lg"
        />
        <div className="flex-1 text-center md:text-left space-y-2">
          <h2 className="text-4xl font-extrabold text-gray-800">{student.name}</h2>
          <p className="text-gray-700 text-lg md:text-xl">{student.about}</p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href={student.email && `mailto:${student.email}`} className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-xl shadow hover:bg-gray-900 transition">
              <FaEnvelope /> <span>Email</span>
            </a>
            <a href={student.github} target="_blank" rel="noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-xl shadow hover:bg-gray-800 transition">
              <FaGithub /> <span>GitHub</span>
            </a>
            <a href={student.linkedin} target="_blank" rel="noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
              <FaLinkedin /> <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Academic Info */}
      <div className="bg-white p-6 rounded-3xl shadow-md space-y-4">
        <h3 className="text-2xl font-bold text-gray-800">Academic Info</h3>
        <p><span className="font-semibold">GPA:</span> {student.gpa}</p>
        <p><span className="font-semibold">Courses:</span> {student.courses.join(', ')}</p>
        <p><span className="font-semibold">Skills:</span> {student.skills.join(', ')}</p>
      </div>

      {/* Hobbies / Interests */}
      <div className="bg-white p-6 rounded-3xl shadow-md space-y-4">
        <h3 className="text-2xl font-bold text-gray-800">Hobbies & Interests</h3>
        <ul className="list-disc list-inside text-gray-700">
          {student.hobbies.map((hobby, idx) => (
            <li key={idx}>{hobby}</li>
          ))}
        </ul>
      </div>

      {/* Back / Edit Buttons */}
      <div className="flex justify-center gap-6">
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-orange-500 text-white rounded-xl shadow-lg font-semibold hover:bg-orange-600 transition-colors"
        >
          Back to Students
        </button>
        <Link
          to={`/edit/${student.id}`}
          className="px-6 py-3 bg-green-500 text-white rounded-xl shadow-lg font-semibold hover:bg-green-600 transition-colors"
        >
          Edit Student
        </Link>
      </div>
    </motion.div>
  );
}

export default StudentDetail;
