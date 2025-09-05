import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-orange-500 text-white py-3 shadow-lg">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-4">
        {/* Logo / Title */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-tight font-sans"
        >
          Web 2 Course
        </Link>

        {/* Menu Links */}
        <div className="flex flex-col md:flex-row md:items-center mt-2 md:mt-0 space-y-2 md:space-y-0 md:space-x-6 text-lg font-sans">
          <Link
            to="/"
            className="hover:text-green-500 transition-colors duration-300 font-semibold text-center md:text-left"
          >
            Home
          </Link>
          <Link
            to="/students"
            className="hover:text-green-500 transition-colors duration-300 font-semibold text-center md:text-left"
          >
            Students
          </Link>
          <Link
            to="/add"
            className="px-4 py-2 bg-white text-orange-500 rounded-lg shadow hover:bg-gray-100 transition-colors duration-300 font-semibold text-center md:text-left"
          >
            Add Student
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
