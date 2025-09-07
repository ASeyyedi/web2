import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      id="footer"
      className="w-full bg-gray-900 text-white py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        {/* About Section */}
        <motion.div
          className="flex-1 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-3xl font-bold">Web 2 Course</h3>
          <p className="text-gray-400">
            Learn, Develop & Grow Your Web Skills with practical projects and
            expert instructors. Join our community of 500+ students worldwide.
          </p>
          <p className="text-gray-400">Contact us: support@web2course.com</p>
        </motion.div>

        {/* Links Section */}
        <motion.div
          className="flex-1 flex flex-col space-y-2 ml-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-xl font-semibold">Quick Links</h4>
          {["Home", "Students", "Courses", "About", "Contact"].map((link, i) => (
            <motion.a
              key={i}
              href={`#${link.toLowerCase()}`}
              className="hover:text-orange-400 transition-colors w-1/3"
              whileHover={{ scale: 1.1 }}
            >
              {link}
            </motion.a>
          ))}
        </motion.div>

        {/* Social Section */}
        <motion.div
          className="flex-1 flex flex-col space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="text-xl font-semibold">Follow Us</h4>
          <div className="flex space-x-6 text-2xl">
            {[FaFacebook, FaTwitter, FaInstagram].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                className="hover:text-orange-400 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4">
            © 2025 Web 2 Course. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
