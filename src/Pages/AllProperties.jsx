import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const AllProperties = () => {
  const properties = useLoaderData();
  console.log(properties);

  return (
    <div className="w-11/12 mx-auto py-12">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          All Properties
        </h1>
        <p className="text-lg text-gray-500 mt-2">
          Explore the best properties available for you
        </p>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {properties.map((property) => (
          <div
            key={property._id}
            className="card bg-base-100 shadow-md hover:shadow-2xl transition duration-300 rounded-xl overflow-hidden"
          >
            <figure>
              <img
                src={property.image}
                alt={property.propertyName}
                className="w-full h-56 object-cover hover:scale-105 transition duration-500"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-lg font-semibold text-gray-800">
                {property.propertyName}
              </h2>
              <p className="text-sm text-gray-600 mb-3">
                {property.description.slice(0, 70)}...
              </p>

              <div className="text-sm space-y-1 mb-3">
                <p>
                  <span className="font-semibold text-orange-500">Price:</span>{" "}
                  ৳{property.price.toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold text-orange-500">Location:</span>{" "}
                  {property.location}
                </p>
                <p>
                  <span className="font-semibold text-orange-500">Category:</span>{" "}
                  {property.category}
                </p>
                <p className="text-gray-500 text-xs">
                  Posted by: <span className="text-gray-700">{property.postedBy}</span> <br />
                  {new Date(property.postedDate).toLocaleDateString()}
                </p>
              </div>

              <div className="card-actions justify-end">
                <Link
                  to={`/property/${property._id}`}
                  className="btn btn-outline btn-sm border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
