import React from "react";
import { FaHome, FaBuilding, FaBriefcase, FaCity, FaWarehouse } from "react-icons/fa";

const properties = [
  {
    icon: <FaHome className="text-4xl text-white" />,
    title: "Houses",
    count: "22 Properties",
  },
  {
    icon: <FaBuilding className="text-4xl text-white" />,
    title: "Apartments",
    count: "32 Properties",
  },
  {
    icon: <FaBriefcase className="text-4xl text-white" />,
    title: "Office",
    count: "42 Properties",
  },
  {
    icon: <FaCity className="text-4xl text-white" />,
    title: "Townhome",
    count: "18 Properties",
  },
  {
    icon: <FaWarehouse className="text-4xl text-white" />,
    title: "Bungalow",
    count: "40 Properties",
  },
];

const PropertyTypes = () => {
  return (
    <section className="px-4 md:px-12 bg-white text-center">
      {/* Small Subtitle */}
      <p className="uppercase tracking-widest text-sm text-[#f97316] mb-2 font-medium">
        Property Types
      </p>

      {/* Main Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-12">
        Explore Apartment Types
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
        {properties.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-2xl shadow-sm hover:shadow-lg border-2 border-orange-400 transition-all duration-300 p-6 flex flex-col items-center justify-center"
          >
            <div className="bg-[#1e3a8a] p-5 rounded-full mb-4 flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm">{item.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyTypes;
