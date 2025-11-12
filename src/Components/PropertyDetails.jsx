import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  FaStar,
  FaMapMarkerAlt,
  FaTag,
  FaMoneyBillWave,
} from "react-icons/fa";
import { toast } from "react-hot-toast";

const PropertyDetails = () => {
  const property = useLoaderData();
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");

  if (!property) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-orange-500 loading-lg"></span>
      </div>
    );
  }

  // ✅ Destructure (update field names)
  const {
    propertyName,
    description,
    category,
    price,
    location,
    image,
    userEmail,
    postedBy,
    postedDate,
  } = property;

  // ✅ Fix: use postedDate instead of createdAt
  const formattedDate = postedDate
    ? new Date(postedDate).toLocaleDateString("en-GB")
    : "N/A";

  // ✅ Handle review submit
  const handleReview = (e) => {
    e.preventDefault();
    if (!rating) return toast.error("Please select a rating!");
    if (!reviewText.trim()) return toast.error("Write a short review!");

    const newReview = {
      id: Date.now(),
      rating,
      reviewText,
    };

    setReviews([...reviews, newReview]);
    setRating(0);
    setReviewText("");
    toast.success("Review added successfully!");
  };

  return (
    <div className="min-h-screen bg-base-200 py-16 px-5 md:px-20 font-poppins">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Property Image */}
        <div className="relative">
          <img
            src={image}
            alt={propertyName}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <h1 className="absolute bottom-6 left-6 text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            {propertyName}
          </h1>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Property Info */}
          <div className="flex flex-wrap gap-3 mb-5 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FaTag className="text-orange-500" /> <span>{category}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-orange-500" />{" "}
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMoneyBillWave className="text-orange-500" />{" "}
              <span>{price?.toLocaleString()} BDT</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">{description}</p>

          {/* ✅ Fixed Posted By Section */}
          <div className="bg-base-100 rounded-xl p-5 shadow-inner mb-10">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Posted By
            </h3>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.ibb.co/3y6n0qj/default-user.jpg"
                  alt="user"
                  className="w-10 h-10 rounded-full border"
                />
                <div>
                  <p className="font-semibold text-gray-700">
                    {postedBy || "Unknown User"}
                  </p>
                  {userEmail && (
                    <p className="text-sm text-gray-500">{userEmail}</p>
                  )}
                </div>
              </div>
              <p className="text-gray-500 text-sm">
                Posted on:{" "}
                <span className="font-medium">{formattedDate}</span>
              </p>
            </div>
          </div>

          {/* ⭐ Ratings & Reviews Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Ratings & Reviews
            </h2>

            {/* Rating input */}
            <form
              onSubmit={handleReview}
              className="bg-base-100 p-5 rounded-xl shadow-sm mb-6"
            >
              <div className="flex items-center mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`cursor-pointer text-2xl ${
                      rating >= star ? "text-yellow-400" : "text-gray-300"
                    }`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write a short review..."
                className="textarea textarea-bordered w-full mb-3"
              />
              <button
                type="submit"
                className="btn bg-orange-500 hover:bg-orange-600 text-white px-6"
              >
                Submit Review
              </button>
            </form>

            {/* Show reviews */}
            <div className="space-y-4">
              {reviews.length === 0 ? (
                <p className="text-gray-500 italic">No reviews yet.</p>
              ) : (
                reviews.map((r) => (
                  <div
                    key={r.id}
                    className="p-4 border border-gray-200 rounded-xl bg-base-100"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(r.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700">{r.reviewText}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
