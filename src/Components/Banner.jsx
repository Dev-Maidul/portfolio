import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DotGrid from "./Animation/DotGrid";
import bannerImage1 from "../assets/banner1.jpg";
import bannerImage2 from "../assets/banner2.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const images = [bannerImage1, bannerImage2];

const Banner = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-gray-900 py-16 sm:py-0 lg:py-24 md:mt-12 my-12">
      <DotGrid />
      <div className="container relative z-10 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-4 sm:px-6 lg:px-8">
        
        {/* Left Side: Content (Text and Buttons) */}
        <motion.div
          className="flex flex-col justify-center text-center lg:text-left w-full lg:w-1/2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 animate-gradient whitespace-nowrap"
          >
            Hi, This is <br /> Md Maidul Islam
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 mb-8 text-xl lg:text-2xl text-gray-300 min-h-[32px]"
          >
            <Typewriter
              words={['Full Stack Web Developer and Problem Solver']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            {/* GitHub Button */}
            <motion.a
              href="https://github.com/Dev-Maidul"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="w-full h-full bg-gradient-to-br from-[#1e87f0] via-[#8e44ad] to-[#c0392b] group-hover:from-[#c0392b] group-hover:via-[#8e44ad] group-hover:to-[#1e87f0] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white flex items-center gap-2">
                  <FaGithub size={20} />
                  GitHub
                </span>
              </span>
            </motion.a>

            {/* LinkedIn Button */}
            <motion.a
              href="https://www.linkedin.com/in/md-maidul-islam-3744b21ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="w-full h-full bg-gradient-to-br from-[#1e87f0] via-[#8e44ad] to-[#c0392b] group-hover:from-[#c0392b] group-hover:via-[#8e44ad] group-hover:to-[#1e87f0] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white flex items-center gap-2">
                  <FaLinkedin size={20} />
                  LinkedIn
                </span>
              </span>
            </motion.a>

            {/* Codeforces Button */}
            <motion.a
              href="https://codeforces.com/profile/Maidul"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="w-full h-full bg-gradient-to-br from-[#4A90E2] via-[#D0021B] to-[#F5A623] group-hover:from-[#F5A623] group-hover:via-[#D0021B] group-hover:to-[#4A90E2] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white flex items-center gap-2">
                  <SiCodeforces size={20} />
                  Codeforces
                </span>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side: Full Image Content */}
        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center"
          animate={{ y: ["0%", "-3%", "0%"] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[500px] p-2 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={imageIndex}
                src={images[imageIndex]}
                alt="Md Maidul Islam"
                className="w-full h-full object-cover rounded-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;