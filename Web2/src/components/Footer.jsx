// components/Footer.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        {/* About Section */}
        <div className="flex-1 space-y-4">
          <h3 className="text-3xl font-bold">Web 2 Course</h3>
          <p className="text-gray-400">
            Learn, Develop & Grow Your Web Skills with practical projects and
            expert instructors. Join our community of 500+ students worldwide.
          </p>
          <p className="text-gray-400">Contact us: support@web2course.com</p>
        </div>

        {/* Links Section */}
        <div className="flex-1 flex flex-col space-y-2 ml-4">
          <h4 className="text-xl font-semibold">Quick Links</h4>
          <a href="#" className="hover:text-orange-400 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-orange-400 transition-colors">
            Students
          </a>
          <a href="#" className="hover:text-orange-400 transition-colors">
            Courses
          </a>
          <a href="#" className="hover:text-orange-400 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-orange-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Social Section */}
        <div className="flex-1 flex flex-col space-y-4">
          <h4 className="text-xl font-semibold">Follow Us</h4>
          <div className="flex space-x-6 text-2xl">
            <a href="#" className="hover:text-orange-400 transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              <FaInstagram />
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            © 2025 Web 2 Course. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
