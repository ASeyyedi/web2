import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-orange-500 text-white py-3 shadow-lg fixed w-full top-0 z-50 h-[80px]"
    >
      <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-4 h-full ">
        {/* Logo / Title */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="/"
            className="text-3xl font-extrabold tracking-tight font-sans"
          >
            Web 2 Course
          </Link>
        </motion.div>

        {/* Menu Links */}
        <div className="flex flex-col md:flex-row md:items-center mt-2 md:mt-0 space-y-2 md:space-y-0 md:space-x-6 text-lg font-sans">
          {["Home", "Students"].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="relative font-semibold text-center md:text-left hover:text-green-500 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item}
              {/* Animated underline */}
              <motion.span
                layoutId="underline"
                className="absolute left-0 bottom-0 h-[2px] bg-green-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/add"
              className="px-4 py-2 bg-white text-orange-500 rounded-lg shadow hover:bg-gray-100 transition-colors duration-300 font-semibold text-center md:text-left"
            >
              Add Student
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
