import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7 },
  },
};

const Project = ({ project, index }) => {
  const { title, mainFeatures, shortDescription, links, image } = project;

  const isEven = index % 2 === 0;
  const directionClass = isEven ? "lg:flex-row" : "lg:flex-row-reverse";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 w-10/12 mx-auto"
    >
      <div className={`flex flex-col ${directionClass} gap-12 items-center`}>
        <motion.div variants={imageVariants} className="flex-1 w-full">
          <img
            src={image}
            alt={title}
            className="rounded-lg shadow-2xl w-full object-cover border-4 border-gray-800"
          />
        </motion.div>

        <div className="flex-1 flex flex-col justify-center">
          <motion.h1 variants={itemVariants} className="text-4xl font-bold">
            {title}
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-xl mt-4 mb-2 font-semibold text-gray-300"
          >
            Overview of Project
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mb-6 text-lg text-gray-400"
          >
            {shortDescription}
          </motion.p>

          <div className="space-y-3 mb-8">
            {mainFeatures?.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-3"
              >
                <FaCheckCircle
                  size={20}
                  className="text-green-500 mt-1 flex-shrink-0"
                />
                <p className="text-gray-300">{feature}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="flex items-center gap-4">
            {links?.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="w-full h-full bg-gradient-to-br from-[#1e87f0] via-[#8e44ad] to-[#c0392b] group-hover:from-[#c0392b] group-hover:via-[#8e44ad] group-hover:to-[#1e87f0] absolute"></span>
                <span className="relative px-5 py-2.5 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                  <span className="relative text-white flex items-center gap-2">
                    {link.name.toLowerCase() === "github" ? (
                      <FiGithub />
                    ) : (
                      <FiExternalLink />
                    )}
                    {link.name}
                  </span>
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;