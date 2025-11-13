import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { IoPricetag } from "react-icons/io5";

const FeaturedRecentProperties = () => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://homenest-server-lilac.vercel.app/properties/recent") // তোমার API অনুযায়ী পরিবর্তন করো
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-16 bg-base-200 dark:bg-gray-900 transition-all duration-300">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
          Featured Real Estates
        </h2>
        <p className="text-gray-500 dark:text-gray-300 max-w-lg mx-auto">
          Discover the latest premium real estate listings curated for you — modern, luxurious, and ready to move in.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
        {properties.map((property) => (
          <div
            key={property._id}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={property.image}
              alt={property.propertyName}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {property.propertyName}
              </h3>
              <div className="flex items-center text-sm text-gray-500 gap-2">
                <MdCategory className="text-orange-500" />
                <span>{property.category}</span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {property.description.length > 100
                  ? property.description.slice(0, 100) + "..."
                  : property.description}
              </p>

              <div className="flex justify-between items-center text-gray-700 dark:text-gray-200 mt-2">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-orange-500" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-orange-600 dark:text-orange-400">
                  <IoPricetag />
                  ৳ {property.price.toLocaleString()}
                </div>
              </div>

              <button
                onClick={() => navigate(`/property/${property._id}`)}
                className="btn btn-sm bg-orange-500 text-white hover:bg-orange-600 border-none w-full mt-4"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedRecentProperties;
