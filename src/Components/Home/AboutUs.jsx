import React from "react";
import aboutMain from "../../assets/aboutMain.jpg";
import aboutSmall from "../../assets/aboutSmall.jpg";
import { FaShieldAlt, FaHome, FaSmile, FaMountain } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="py-10 px-5 md:px-12 bg-blue-100 my-10 rounded-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Images Section */}
        <div className="relative">
          <img
            src={aboutMain}
            alt="About main"
            className="rounded-3xl w-[700px] h-[400px] object-cover"
          />

          {/* Decorative dots (optional) */}
          <div className="absolute top-[-20px] left-[-20px] hidden md:block">
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-orange-200 rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Overlay smaller image with play button */}
          <div className="absolute bottom-[-40px] left-10 bg-white p-2 rounded-2xl shadow-lg">
            <div className="relative">
              <img
                src={aboutSmall}
                alt="About video"
                className="rounded-2xl w-[220px] h-[150px] object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="text-start md:pl-5 mt-10 md:mt-0">
          <p className="uppercase text-sm text-orange-500 font-medium mb-2 tracking-wide">
            About Homenest
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-5 leading-snug">
            The Leading Real Estate <br /> About Marketplace.
          </h2>
          <p className="text-gray-500 mb-6 max-w-lg">HomeNest is a trusted real estate platform designed to make buying, selling, and renting properties in Bangladesh simple, secure, and transparent. Our mission is to connect property owners, buyers, and tenants in one easy-to-use digital space — saving time, effort, and unnecessary hassle.
            <br />
            <br />

We provide a wide range of verified listings, from luxury apartments in Dhaka to affordable homes in small towns, ensuring every user finds their ideal property. HomeNest values trust, transparency, and convenience — that’s why we verify every property and make sure all information is accurate and up to date.
</p>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 gap-5 mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-3 rounded-xl">
                <FaHome className="text-orange-500 text-xl" />
              </div>
              <p className="text-gray-700 font-medium text-sm">
                Smart Home Design
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-3 rounded-xl">
                <FaSmile className="text-orange-500 text-xl" />
              </div>
              <p className="text-gray-700 font-medium text-sm">
                Exceptional Lifestyle
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-3 rounded-xl">
                <FaShieldAlt className="text-orange-500 text-xl" />
              </div>
              <p className="text-gray-700 font-medium text-sm">
                Complete 24/7 Security
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-3 rounded-xl">
                <FaMountain className="text-orange-500 text-xl" />
              </div>
              <p className="text-gray-700 font-medium text-sm">
                Beautiful Scene Around
              </p>
            </div>
          </div>

          <button className="btn bg-orange-500 text-white hover:bg-orange-600 border-none px-8">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
