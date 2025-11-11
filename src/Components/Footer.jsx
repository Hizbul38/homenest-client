import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b1c48] text-white mt-15 rounded-t-3xl overflow-hidden">

      {/* ✅ Main Footer Content */}
      <div className="pt-40 pb-10 px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 z-10 relative">
        {/* Logo & Social */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-3 flex items-center gap-2">
            🏠 Home Unik
          </h2>
          <p className="text-gray-300 mb-5 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          <div className="flex gap-3">
            <a href="#" className="p-2 bg-orange-500 rounded-full hover:bg-orange-600">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-orange-500 rounded-full hover:bg-orange-600">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-orange-500 rounded-full hover:bg-orange-600">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-orange-500 rounded-full hover:bg-orange-600">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
          <p className="flex items-center gap-3 mb-2 text-gray-300">
            <IoLocationSharp className="text-orange-500 text-xl" />
            3064,65 Silver Business Point, Uttran
          </p>
          <p className="flex items-center gap-3 mb-2 text-gray-300">
            <FaPhoneAlt className="text-orange-500 text-sm" />
            +91 78785 35701
          </p>
          <p className="flex items-center gap-3 text-gray-300">
            <IoMdMail className="text-orange-500 text-lg" />
            info@lathiyasolutions.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-orange-400">Home</a></li>
            <li><a href="#" className="hover:text-orange-400">Listing</a></li>
            <li><a href="#" className="hover:text-orange-400">Property</a></li>
            <li><a href="#" className="hover:text-orange-400">Blog</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Appointment */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Appointment</h3>
          <p className="text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none">
            Book Appointment
          </button>
        </div>
      </div>

      {/* ✅ Bottom Footer */}
      <div className="border-t border-gray-700 py-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 px-6 md:px-12">
        <p>Copyright © 2024 Home Unik. All rights reserved.</p>
        <div className="flex gap-5 mt-2 md:mt-0">
          <a href="#" className="hover:text-orange-400">Privacy & Policy</a>
          <a href="#" className="hover:text-orange-400">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
