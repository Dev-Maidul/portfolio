import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFoundPage = () => {
  const text = "Error: Page not found. The route you requested does not exist.";
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.2 },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white font-mono p-4">
      <motion.div
        className="text-center p-8 border-2 border-gray-700 rounded-lg bg-gray-800/50 shadow-2xl max-w-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-7xl sm:text-9xl font-extrabold text-red-500 mb-4 relative"
          animate={{
            textShadow: ["0 0 5px #ff0000, 0 0 10px #ff0000", "0 0 2px #ff0000, 0 0 5px #ff0000"],
            x: [0, -2, 2, -2, 2, 0],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          404
        </motion.h1>
        
        <motion.p
          className="text-lg sm:text-xl text-green-400 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, i) => (
            <span key={i} className="inline-block mr-2">
              {word.split("").map((char, j) => (
                <motion.span key={j} variants={charVariants} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <Link
            to="/"
            className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md cursor-pointer"
          >
            <span className="w-full h-full bg-gradient-to-br from-[#1e87f0] via-[#8e44ad] to-[#c0392b] group-hover:from-[#c0392b] group-hover:via-[#8e44ad] group-hover:to-[#1e87f0] absolute"></span>
            <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <span className="relative text-white flex items-center gap-2">
                <FaHome />
                Back to Home
              </span>
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;