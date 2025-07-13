import React from "react";
import { motion } from "framer-motion";
import { FaLaptop, FaTabletAlt, FaMobile } from "react-icons/fa";

const ResponsiveScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <FaLaptop className="text-6xl text-[#f2f2f2] mb-4" />
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-2 -right-2 w-4 h-4 bg-[#455CE9] rounded-full"
            />
          </div>
        </motion.div>

        {/* Main Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#f2f2f2] mb-6 Montserrat"
        >
          Desktop Experience Required
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg md:text-xl text-[#808181] mb-8 leading-relaxed"
        >
          This portfolio is designed for the best experience on larger screens. 
          Please open it on your laptop, desktop, or tablet for the full interactive experience.
        </motion.p>

        {/* Device Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex justify-center items-center gap-8 mb-8"
        >
          <div className="text-center">
            <FaLaptop className="text-3xl text-[#455CE9] mb-2" />
            <p className="text-sm text-[#808181]">Laptop</p>
          </div>
          <div className="text-center">
            <FaTabletAlt className="text-3xl text-[#455CE9] mb-2" />
            <p className="text-sm text-[#808181]">Tablet</p>
          </div>
          <div className="text-center opacity-50">
            <FaMobile className="text-3xl text-[#808181] mb-2" />
            <p className="text-sm text-[#808181]">Mobile</p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#455CE9] hover:bg-[#3a4fd8] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          onClick={() => window.open(window.location.href, '_blank')}
        >
          Open in New Tab
        </motion.button>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="text-sm text-[#666] mt-8"
        >
          Responsive design coming soon! 🚀
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ResponsiveScreen; 