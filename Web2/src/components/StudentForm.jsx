// components/StudentForm.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function StudentForm({ mode }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    about: "",
    avatar: "",
    email: "",
    github: "",
    linkedin: "",
    courses: "",
    gpa: "",
    skills: "",
    hobbies: "",
  });

  // وقتی edit هست و id داریم => اطلاعات دانشجو رو بگیر
  useEffect(() => {
    if (mode === "edit" && id) {
      async function fetchStudent() {
        try {
          const res = await axios.get(`http://localhost:3001/students/${id}`);
          setFormData({
            name: res.data.name || "",
            about: res.data.about || "",
            avatar: res.data.avatar || "",
            email: res.data.email || "",
            github: res.data.github || "",
            linkedin: res.data.linkedin || "",
            courses: (res.data.courses || []).join(", "),
            gpa: res.data.gpa || "",
            skills: (res.data.skills || []).join(", "),
            hobbies: (res.data.hobbies || []).join(", "),
          });
        } catch (err) {
          console.error("Error fetching student:", err);
        }
      }
      fetchStudent();
    }
  }, [mode, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedData = {
        ...formData,
        courses: formData.courses
          ? formData.courses.split(",").map((c) => c.trim())
          : [],
        skills: formData.skills
          ? formData.skills.split(",").map((s) => s.trim())
          : [],
        hobbies: formData.hobbies
          ? formData.hobbies.split(",").map((h) => h.trim())
          : [],
        gpa: parseFloat(formData.gpa) || null,
      };

      if (mode === "edit") {
        await axios.put(`http://localhost:3001/students/${id}`, formattedData);
      } else {
        await axios.post("http://localhost:3001/students", formattedData);
      }

      navigate("/");
    } catch (err) {
      console.error("Error saving student:", err);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-12 bg-white rounded-3xl shadow-2xl space-y-6 mt-12"
    >
      <h2 className="text-4xl font-extrabold text-center text-gray-800">
        {mode === "edit" ? "Edit Student" : "Add New Student"}
      </h2>

      {/* Name */}
      <InputField
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      {/* About */}
      <TextAreaField
        label="About"
        name="about"
        value={formData.about}
        onChange={handleChange}
      />

      {/* Avatar */}
      <InputField
        label="Avatar URL"
        name="avatar"
        value={formData.avatar}
        onChange={handleChange}
      />

      {/* Email */}
      <InputField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      {/* Github */}
      <InputField
        label="Github"
        name="github"
        value={formData.github}
        onChange={handleChange}
      />

      {/* Linkedin */}
      <InputField
        label="LinkedIn"
        name="linkedin"
        value={formData.linkedin}
        onChange={handleChange}
      />

      {/* Courses */}
      <InputField
        label="Courses (comma separated)"
        name="courses"
        value={formData.courses}
        onChange={handleChange}
      />

      {/* GPA */}
      <InputField
        label="GPA"
        name="gpa"
        type="number"
        step="0.1"
        value={formData.gpa}
        onChange={handleChange}
      />

      {/* Skills */}
      <InputField
        label="Skills (comma separated)"
        name="skills"
        value={formData.skills}
        onChange={handleChange}
      />

      {/* Hobbies */}
      <InputField
        label="Hobbies (comma separated)"
        name="hobbies"
        value={formData.hobbies}
        onChange={handleChange}
      />

      {/* Buttons */}
      <div className="flex justify-center space-x-6 mt-6">
        <button
          type="submit"
          className="px-8 py-4 bg-orange-500 text-white rounded-2xl shadow-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
        >
          {mode === "edit" ? "Update Student" : "Add Student"}
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="px-8 py-4 bg-gray-300 text-gray-800 rounded-2xl shadow-lg font-semibold hover:bg-gray-400 transition-colors duration-300"
        >
          Cancel
        </button>
      </div>
    </motion.form>
  );
}

// کامپوننت های کوچیک برای input و textarea
function InputField({ label, name, value, onChange, type = "text", step }) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="font-semibold text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        step={step}
        onChange={onChange}
        className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400"
      />
    </div>
  );
}

function TextAreaField({ label, name, value, onChange }) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="font-semibold text-gray-700">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="p-4 border border-gray-300 rounded-xl resize-none h-24 focus:ring-2 focus:ring-orange-400"
      />
    </div>
  );
}

export default StudentForm;
