import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";

const slides = [
  {
    image: banner1,
    title: "Invest in Your Dream Home",
    desc: "Find luxurious apartments and modern villas built for your comfort and lifestyle.",
  },
  {
    image: banner2,
    title: "Live in Style & Comfort",
    desc: "Experience premium living with smart features and stunning architecture.",
  },
  {
    image: banner3,
    title: "Affordable Living, High Quality",
    desc: "Get your perfect home at an affordable price — no compromise on quality.",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // ✅ Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // ✅ Manual Navigation
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full  overflow-hidden mb-10 rounded-b-2xl">
      <div className="relative w-full h-[70vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].image}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/30"></div>

            {/* Text Section */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-5">
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {slides[current].title}
              </motion.h1>

              <motion.p
                className="max-w-2xl mb-6 text-gray-200 text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {slides[current].desc}
              </motion.p>

              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  className="btn bg-orange-500 hover:bg-orange-600 text-white border-none px-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Property
                </motion.button>
                <motion.button
                  className="btn bg-transparent border border-white text-white hover:bg-white hover:text-black px-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ✅ Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-5 z-20">
          <button
            onClick={prevSlide}
            className="btn btn-circle bg-black/40 border-none text-white hover:bg-orange-500"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="btn btn-circle bg-black/40 border-none text-white hover:bg-orange-500"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* ✅ Search Box */}
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
