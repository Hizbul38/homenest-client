import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const {
    _id,
    propertyName,
    description,
    price,
    location,
    category,
    image,
    postedDate,
    postedBy,
  } = property;

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition duration-300 rounded-xl overflow-hidden">
      
      {/* Image Section */}

      <figure>
        <img
          src={image}
          alt={propertyName}
          className="w-full h-60 object-cover hover:scale-105 transition duration-500"
        />
      </figure>

      
      {/* Text Section */}

      <div className="card-body">
        <h3 className="card-title text-lg font-semibold text-gray-800">
          {propertyName}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          {description.length > 90
            ? `${description.slice(0, 90)}...`
            : description}
        </p>

        <div className="text-sm space-y-1">
          <p>
            <span className="font-semibold text-orange-500">Price:</span> ৳
            {price.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold text-orange-500">Location:</span>{" "}
            {location}
          </p>
          <p>
            <span className="font-semibold text-orange-500">Category:</span>{" "}
            {category}
          </p>
          <p className="text-gray-500 text-xs">
            Posted by: <span className="text-gray-700">{postedBy}</span> <br />
            {new Date(postedDate).toLocaleDateString()}
          </p>
        </div>

        {/* Button */}
        
        <div className="card-actions justify-end mt-4">
          <Link
            to={`/property/${_id}`}
            className="btn btn-outline btn-sm border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
