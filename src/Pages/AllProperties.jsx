import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("asc");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search.trim());
    }, 1000);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    const url = new URL("https://homenest-server-lilac.vercel.app/properties");
    if (sortBy) url.searchParams.append("sortBy", sortBy);
    if (order) url.searchParams.append("order", order);
    if (debouncedSearch) url.searchParams.append("search", debouncedSearch);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setProperties(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

    return () => (ignore = true);
  }, [sortBy, order, debouncedSearch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-orange-500 loading-lg"></span>
      </div>
    );
  }

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

      {/* Search + Sort Controls */}

      <div className="flex flex-wrap justify-center gap-4 mb-10">

        {/* Search Box */}

        <div className="relative">
          <input
            ref={searchRef}
            type="text"
            placeholder="Search by property name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-72 border-orange-400 focus:outline-none pr-10"
          />
          <span className="absolute right-3 top-3 text-orange-500">
            <i className="fa fa-search"></i>
          </span>
        </div>

        {/* Sort by field */}
        
        <select
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
          className="select select-bordered border-orange-400 focus:outline-none"
        >
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="category">Category</option>
          <option value="location">Location</option>
        </select>

        {/* Sort order */}

        <select
          onChange={(e) => setOrder(e.target.value)}
          value={order}
          className="select select-bordered border-orange-400 focus:outline-none"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {/* Property Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {properties.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No properties found matching your search.
          </p>
        ) : (
          properties.map((property) => (
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
                  {property.description?.slice(0, 70)}...
                </p>

                <div className="text-sm space-y-1 mb-3">
                  <p>
                    <span className="font-semibold text-orange-500">Price:</span>{" "}
                    ৳{property.price?.toLocaleString()}
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
                    Posted by:{" "}
                    <span className="text-gray-700">{property.postedBy}</span> <br />
                    {new Date(
                      property.postedDate || property.createdAt
                    ).toLocaleDateString()}
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
          ))
        )}
      </div>
    </div>
  );
};

export default AllProperties;
