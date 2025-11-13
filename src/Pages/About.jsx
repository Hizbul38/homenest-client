import React from "react";
import aboutImg from "../assets/Aboutus.jpg";
import { FaCheckCircle } from "react-icons/fa";
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Image */}
        
        <div className="relative">
          <img
            src={aboutImg}
            alt="About Home Unik"
            className="rounded-3xl shadow-lg w-full h-[500px] object-cover"
          />
          <div className="absolute top-5 left-5 bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md">
            10+ Years Experience
          </div>
          <div className="absolute bottom-5 right-5 bg-white px-6 py-4 rounded-2xl shadow-md">
            <p className="text-orange-500 font-bold text-xl">1200+</p>
            <p className="text-gray-600 text-sm">Properties Sold</p>
          </div>
        </div>

        {/* Right Side Content */}

        <div>
          <p className="uppercase text-sm font-medium text-orange-500 mb-2 tracking-wide">
            About Home Unik
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1f2937] mb-5 leading-tight">
            The Leading Real Estate Marketplace You Can Trust
          </h2>
          <p className="text-gray-600 mb-6">
            Home Unik is dedicated to helping you find your dream property with
            ease. We connect buyers, sellers, and investors through our trusted
            marketplace platform. With a decade of expertise, we ensure
            reliability, transparency, and customer satisfaction in every deal.
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-orange-500 text-lg" />
              <span className="text-gray-800 font-medium">
                24/7 Customer Support
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-orange-500 text-lg" />
              <span className="text-gray-800 font-medium">
                Verified & Trusted Listings
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-orange-500 text-lg" />
              <span className="text-gray-800 font-medium">
                Expert Real Estate Advisors
              </span>
            </li>
          </ul>

          <button className="btn bg-orange-500 hover:bg-orange-600 border-none text-white px-8">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
