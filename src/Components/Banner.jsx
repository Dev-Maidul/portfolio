import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DotGrid from "./Animation/DotGrid";
import bannerImage1 from "../assets/banner1.jpg";
import bannerImage2 from "../assets/banner2.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const images = [bannerImage1, bannerImage2];

const Banner = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-gray-900 py-16 sm:py-20 lg:py-24 rounded-2xl">
      <DotGrid />
      <div className="container relative z-10 flex flex-col-reverse lg:flex-row justify-between items-center gap-12 mx-auto px-4">
        
        <motion.div
          className="flex flex-col justify-center text-center lg:text-left max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 animate-gradient"
          >
            Hi, This is Md Maidul Islam
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 mb-8 text-xl lg:text-2xl text-gray-300"
          >
            Full Stack Web Developer
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
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
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center w-[280px] h-[380px] sm:w-[350px] sm:h-[450px] lg:w-[400px] lg:h-[500px]"
          animate={{ y: ["0%", "-3%", "0%"] }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 rounded-2xl blur-xl opacity-40"></div>
          
          <div className="relative w-full h-full p-2 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={imageIndex}
                src={images[imageIndex]}
                alt="Md Maidul Islam"
                className="w-full h-full object-cover rounded-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;