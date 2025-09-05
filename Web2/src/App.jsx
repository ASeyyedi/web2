import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import StudentDetail from "./pages/StudentDetail";
import StudentForm from "./components/StudentForm";
import Footer from "./components/Footer";
import AddStudentForm from "./components/AddStudentForm";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 text-gray-800">
        <Navbar />
        <main className="max-w-6xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student/:id" element={<StudentDetail />} />
            <Route path="/add" element={<AddStudentForm mode="add" />} />
            <Route path="/edit/:id" element={<StudentForm mode="edit" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
