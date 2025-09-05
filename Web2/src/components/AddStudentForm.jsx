// AddStudentForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddStudentForm() {
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
    hobbies: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // تبدیل فیلدهایی که لیست هستند به آرایه
    const newStudent = {
      ...formData,
      courses: formData.courses.split(",").map((c) => c.trim()),
      skills: formData.skills.split(",").map((s) => s.trim()),
      hobbies: formData.hobbies.split(",").map((h) => h.trim()),
      gpa: parseFloat(formData.gpa) || null,
    };

    try {
      await axios.post("http://localhost:3001/students", newStudent);
      navigate("/"); // بعد از افزودن به صفحه اصلی برگرده
    } catch (err) {
      console.error("Error adding student:", err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-gray-100 p-10 rounded-3xl shadow-xl">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
        Add New Student
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-lg ring focus:ring-orange-400 "
          required
        />
        <textarea
          name="about"
          placeholder="About Student"
          value={formData.about}
          onChange={handleChange}
          className="w-full p-3 rounded-lg ring focus:ring-orange-400 outline-none"
        />
        <input
          type="url"
          name="avatar"
          placeholder="Avatar URL"
          value={formData.avatar}
          onChange={handleChange}
          className="w-full p-3 rounded-lg ring focus:ring-orange-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg ring focus:ring-orange-400"
        />
        <input
          type="text"
          name="github"
          placeholder="GitHub Profile"
          value={formData.github}
          onChange={handleChange}
          className="w-full p-3 rounded-lg ring focus:ring-orange-400"
        />
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn Profile"
          value={formData.linkedin}
          onChange={handleChange}
          className="w-full p-3 rounded-lg ring focus:ring-orange-400"
        />
        <input
          type="text"
          name="courses"
          placeholder="Courses (comma separated)"
          value={formData.courses}
          onChange={handleChange}
          className="w-full p-3 rounded-lg ring focus:ring-orange-400"
        />
        <input
          type="number"
          step="0.01"
          name="gpa"
          placeholder="GPA"
          value={formData.gpa}
          onChange={handleChange}
          className="w-full p-3 rounded-lg ring focus:ring-orange-400"
        />
        <input
          type="text"
          name="skills"
          placeholder="Skills (comma separated)"
          value={formData.skills}
          onChange={handleChange}
          className="w-full p-3 rounded-lg ring focus:ring-orange-400"
        />
        <input
          type="text"
          name="hobbies"
          placeholder="Hobbies (comma separated)"
          value={formData.hobbies}
          onChange={handleChange}
          className="w-full p-3 rounded-lg ring focus:ring-orange-400"
        />

        <div className="flex justify-between mt-6">
          <button
            type="submit"
            className="px-6 py-3 bg-orange-500 text-white rounded-xl shadow hover:bg-orange-600"
          >
            Add Student
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-gray-400 text-white rounded-xl shadow hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStudentForm;
