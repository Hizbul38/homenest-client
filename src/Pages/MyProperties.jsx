import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyProperties = () => {
  const { user } = useContext(AuthContext);
  const [myProperties, setMyProperties] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (user?.email) {
      fetch(`https://homenest-server-lilac.vercel.app/properties?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyProperties(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [user]);

  // Handle Delete Property

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This property will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://homenest-server-lilac.vercel.app/properties/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setMyProperties(myProperties.filter((item) => item._id !== id));
              Swal.fire("Deleted!", "Your property has been removed.", "success");
            }
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-orange-500 loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-16 px-5 md:px-20">
      <h1 className="text-3xl font-bold text-center mb-6">My Properties</h1>

      {myProperties.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          You have not added any property yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myProperties.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                src={property.image}
                alt={property.propertyName}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-1">{property.propertyName}</h2>
                <p className="text-sm text-gray-500 mb-2">{property.category}</p>
                <p className="text-gray-700 mb-2">{property.location}</p>
                <p className="font-semibold text-orange-600 mb-2">
                  ৳ {property.price.toLocaleString()}
                </p>
                <p className="text-xs text-gray-400 mb-3">
                  Posted on:{" "}
                  {new Date(property.postedDate).toLocaleDateString("en-GB")}
                </p>

                <div className="flex justify-between mt-3">

                  {/* View Details */}
                  <Link
                    to={`/property/${property._id}`}
                    className="btn btn-sm bg-orange-500 text-white hover:bg-orange-600"
                  >
                    View
                  </Link>

                  {/* Update */}

                  <Link
                    to={`/update-property/${property._id}`}
                    className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600"
                  >
                    Update
                  </Link>

                  {/* Delete */}
                  
                  <button
                    onClick={() => handleDelete(property._id)}
                    className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProperties;
