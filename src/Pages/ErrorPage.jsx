import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0b1c48] to-[#091736] text-white px-6 text-center">
      
      {/* Animated 404 */}

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-8xl md:text-9xl font-extrabold text-orange-500 drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* Subtitle */}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-2xl md:text-3xl font-semibold mt-4"
      >
        Oops! Page Not Found
      </motion.h2>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-gray-300 mt-3 max-w-lg"
      >
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.  
        Don’t worry — you can always head back to the home page.
      </motion.p>

      {/* Back Button */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          to="/"
          className="btn mt-6 bg-orange-500 hover:bg-orange-600 border-none text-white text-lg px-8"
        >
          Go Back Home
        </Link>
      </motion.div>

      {/* Floating Shapes for Motion Effect */}
      
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 text-gray-500 text-sm"
      >
        <p>© {new Date().getFullYear()} HomeNest | All Rights Reserved</p>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
