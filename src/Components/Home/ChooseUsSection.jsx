import React from "react";
import img1 from "../../assets/sell1.jpg";
import img2 from "../../assets/sell2.jpg";
import { FaCheckCircle } from "react-icons/fa";

const ChooseUsSection = () => {
  return (
    <section className="lg:px-20 md:px-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-6 gap-10">
        
        {/* Left Side Content */}
        <div className="md:pr-10">
          <p className="uppercase text-sm text-orange-500 font-medium mb-2 tracking-wide">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4 leading-snug">
            Let’s Find the Right <br /> Selling Option for You
          </h2>
          <p className="text-gray-500 mb-6 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-orange-500 text-lg" />
              <span className="text-gray-700 font-medium">
                Find Excellent Deals
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-orange-500 text-lg" />
              <span className="text-gray-700 font-medium">
                Friendly Host & Fast Support
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-orange-500 text-lg" />
              <span className="text-gray-700 font-medium">
                List Your Own Property
              </span>
            </li>
          </ul>

          <button className="btn bg-orange-500 hover:bg-orange-600 border-none text-white px-8">
            Read More
          </button>
        </div>

        {/* Right Side Images */}
        <div className="relative flex justify-center md:justify-end">
          <div className="flex items-end gap-4">
            <img
              src={img1}
              alt="Agent"
              className="rounded-2xl w-[200px] md:w-[240px] h-[400px] object-cover shadow-lg"
            />
            <div className="relative">
              <img
                src={img2}
                alt="Building"
                className="rounded-2xl w-[500px] md:w-[260px] h-[600px] object-cover shadow-lg"
              />

              {/* Agent Badge */}
              <div className="absolute bottom-[-25px] left-1/2 -translate-x-1/2 bg-white shadow-md rounded-2xl px-5 py-3 flex flex-col items-center">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  10k+ Exclusive Agents
                </p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="agent"
                    className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/40.jpg"
                    alt="agent"
                    className="w-8 h-8 rounded-full border-2 border-white -ml-2"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/55.jpg"
                    alt="agent"
                    className="w-8 h-8 rounded-full border-2 border-white -ml-2"
                  />
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-semibold border-2 border-white -ml-2">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ChooseUsSection;
