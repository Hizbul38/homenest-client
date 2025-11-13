import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b1c48] text-white mt-20 rounded-t-3xl overflow-hidden">
      <div className="pt-20 pb-10 px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 z-10 relative">
        
        {/* Logo & Social */}

        <div>
          <Link to='/' className="text-2xl font-bold text-orange-500 mb-3 flex items-center gap-2">
            🏠 HomeNest
          </Link>
          <p className="text-gray-300 mb-5 leading-relaxed">
            Your trusted platform to find, rent, or sell properties in Bangladesh. 
            HomeNest makes real estate simple, secure, and transparent.
          </p>
          <div className="flex gap-3">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-orange-500 rounded-full hover:bg-orange-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-orange-500 rounded-full hover:bg-orange-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-orange-500 rounded-full hover:bg-orange-600"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-orange-500 rounded-full hover:bg-orange-600"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contact Info */}

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
          <p className="flex items-center gap-3 mb-2 text-gray-300">
            <IoLocationSharp className="text-orange-500 text-xl" />
            House #22, Road #10, Dhanmondi, Dhaka – 1209, Bangladesh
          </p>
          <p className="flex items-center gap-3 mb-2 text-gray-300">
            <FaPhoneAlt className="text-orange-500 text-sm" />
            +880 1700-123456
          </p>
          <p className="flex items-center gap-3 text-gray-300">
            <IoMdMail className="text-orange-500 text-lg" />
            support@homenest.com
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-orange-400">Home</Link>
            </li>
            <li>
              <Link to="/all-properties" className="hover:text-orange-400">All Properties</Link>
            </li>
            <li>
              <Link to="/add-properties" className="hover:text-orange-400">Add Property</Link>
            </li>
            <li>
              <Link to="/my-properties" className="hover:text-orange-400">My Properties</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-400">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter / Appointment */}

        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <p className="text-gray-300 mb-4">
            Subscribe to get the latest property listings, offers, and news straight to your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
            <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Bottom Footer */}
      
      <div className="border-t border-gray-700 py-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 px-6 md:px-12">
        <p>© {new Date().getFullYear()} HomeNest. All rights reserved.</p>
        <div className="flex gap-5 mt-2 md:mt-0">
          <Link to="/privacy-policy" className="hover:text-orange-400">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-orange-400">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
