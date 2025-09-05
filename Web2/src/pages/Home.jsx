// pages/Home.jsx
import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import CourseIntro from "../components/CourseIntro";
import TeacherCard from "../components/TeacherCard";
import StudentCard from "../components/StudentCard";
import Footer from "../components/Footer";

import { getCourse, getStudents, deleteStudent } from "../services/api";

function Home() {
  const [course, setCourse] = useState(null);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const courseData = await getCourse();
        const studentsData = await getStudents();
        setCourse(courseData);
        setStudents(studentsData);
      } catch (err) {
        console.error("Error:", err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this student?"))
      return;

    try {
      await deleteStudent(id);
      setStudents((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      console.error("Delete error:", err.message);
    }
  }

  if (loading) return <p className="p-6 text-center">Loading...</p>;

  return (
    <main className="max-w-6xl mx-auto p-4 space-y-12">
      {/* Hero Section */}
      <HeroSection course={course} />

      {/* Course and Instructor */}
      <div className="grid md:grid-cols-3 gap-6">
        <CourseIntro course={course} />
        <TeacherCard />
      </div>

      {/* Student List */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Student List</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onDelete={() => handleDelete(student.id)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
