import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";

const slides = [
  {
    image: banner1,
    title: "Find Your Perfect Home",
    desc: "Discover premium apartments and luxury villas that redefine modern living.",
  },
  {
    image: banner2,
    title: "Invest in Lifestyle & Comfort",
    desc: "Explore exclusive properties that combine beauty, technology, and peace of mind.",
  },
  {
    image: banner3,
    title: "Where Dreams Meet Reality",
    desc: "Affordable yet elegant homes designed to suit every lifestyle and budget.",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full overflow-hidden mb-10 rounded-b-2xl">
      <div className="relative w-full h-[65vh] md:h-[75vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].image}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[current].image})`,
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {/* Animated Gradient Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            ></motion.div>

            {/* Parallax Text Layer */}
            <motion.div
              className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 70 }}
              >
                {slides[current].title}
              </motion.h1>

              <motion.p
                className="max-w-2xl mb-6 text-gray-200 text-sm md:text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {slides[current].desc}
              </motion.p>

              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  className="btn bg-orange-500 hover:bg-orange-600 text-white border-none px-6 shadow-md"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 10px rgba(255,140,0,0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Now
                </motion.button>
                <motion.button
                  className="btn bg-transparent border border-white text-white hover:bg-white hover:text-black px-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-6 z-20">
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

        {/* Floating Glow Element (Decoration) */}
        <motion.div
          className="absolute w-40 h-40 bg-orange-500/30 rounded-full blur-3xl -bottom-10 -left-10 z-0"
          animate={{ y: [0, 20, 0], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-48 h-48 bg-orange-400/20 rounded-full blur-3xl -top-10 -right-10 z-0"
          animate={{ y: [0, -20, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      {/* ✅ Search Box */}
      <div className="absolute left-1/2 lg:bottom-[90px] md:bottom-[90px] transform -translate-x-1/2 bg-white shadow-xl rounded-2xl p-5 w-[90%] md:w-[80%] flex flex-col md:flex-row gap-3 justify-between items-center z-30 backdrop-blur-sm">
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
        <button className="btn bg-orange-500 text-white border-none hover:bg-orange-600 px-6">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
