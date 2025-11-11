import React from "react";
import bannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden mb-28">
      {/* Background Image */}
      <div
        className="w-full] bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 "></div>

        {/* Text Section */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-[90vh] px-5">
          <p className="uppercase tracking-wide text-sm mb-2">
            Welcome to Home Unik
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Invest Today in <br /> Your Dream Home
          </h1>
          <p className="max-w-2xl mb-6 text-gray-200 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none px-6">
              View Property
            </button>
            <button className="btn bg-transparent border border-white text-white hover:bg-white hover:text-black px-6">
              Contact Now
            </button>
          </div>
        </div>
      </div>

      {/* Search Box */}
      <div className="absolute left-1/2 lg:bottom-[90px] md:bottom-[90px] transform -translate-x-1/2 bg-white shadow-lg rounded-2xl p-5 w-[90%] md:w-[80%] flex flex-col md:flex-row gap-3 justify-between items-center z-20">
        <input
          type="text"
          placeholder="Enter keywords"
          className="input input-bordered w-full md:w-auto flex-1"
        />
        <select className="select select-bordered w-full md:w-auto">
          <option disabled selected>
            Sell or Rent
          </option>
          <option>Sell</option>
          <option>Rent</option>
        </select>
        <select className="select select-bordered w-full md:w-auto">
          <option disabled selected>
            Property Type
          </option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>Duplex</option>
        </select>
        <select className="select select-bordered w-full md:w-auto">
          <option disabled selected>
            Location
          </option>
          <option>Dhaka</option>
          <option>Chattogram</option>
          <option>Sylhet</option>
        </select>
        <select className="select select-bordered w-full md:w-auto">
          <option disabled selected>
            Amenities
          </option>
          <option>Swimming Pool</option>
          <option>Gym</option>
          <option>Parking</option>
        </select>
        <button className="btn bg-orange-500 text-white border-none hover:bg-orange-600 px-6">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
