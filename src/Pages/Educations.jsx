import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserGraduate,
  FaBook,
} from "react-icons/fa";

const courses = [
  "Programming Fundamentals",
  "Data Structures & Algorithms",
  "Object Oriented Programming",
  "Web Development",
  "Database Systems",
  "Software Engineering Principles",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Faster stagger
      delayChildren: 0.2, // Shorter delay
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }, // Faster duration
};

const AnimatedGradientIcon = ({ children }) => (
  <motion.div
    whileHover={{ scale: 1.2, rotate: 5 }}
    className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
  >
    {children}
  </motion.div>
);

const Educations = () => {
  return (
    <section id="education" className="py-20 sm:py-28 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
        >
          My Education
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 top-2 w-1 bg-gray-700 h-full -translate-x-1/2"></div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="relative p-4 sm:p-8 bg-gray-800 rounded-lg border border-gray-700 shadow-lg ml-12"
          >
            <div className="absolute top-8 -left-[3.5rem] w-8 h-8 rounded-full border-4 border-gray-900 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1], boxShadow: ["0 0 0px #8e44ad", "0 0 15px #8e44ad", "0 0 0px #8e44ad"] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaGraduationCap className="text-white" size={16} />
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <span className="text-3xl flex-shrink-0 mt-1">
                <AnimatedGradientIcon>
                  <FaGraduationCap />
                </AnimatedGradientIcon>
              </span>
              <h3 className="text-2xl font-bold text-white">
                Bachelor of Science in Computer Science & Engineering
              </h3>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4 mt-4 ml-1">
              <span className="text-xl">
                <AnimatedGradientIcon>
                  <FaUniversity />
                </AnimatedGradientIcon>
              </span>
              <p className="text-lg text-gray-300">
                China University of Petroleum – Beijing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mt-6 ml-1">
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <span className="text-xl">
                  <AnimatedGradientIcon>
                    <FaMapMarkerAlt />
                  </AnimatedGradientIcon>
                </span>
                <p className="text-gray-400">Beijing, China</p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <span className="text-xl">
                  <AnimatedGradientIcon>
                    <FaCalendarAlt />
                  </AnimatedGradientIcon>
                </span>
                <p className="text-gray-400">2023 – Expected June 2027</p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-4 col-span-1 md:col-span-2">
                <span className="text-xl">
                  <AnimatedGradientIcon>
                    <FaUserGraduate />
                  </AnimatedGradientIcon>
                </span>
                <p className="text-gray-400">
                  Current: 2nd Year (3rd Year starts in September 2025)
                </p>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="text-xl font-semibold mb-4 text-blue-400 flex items-center gap-4">
                <span className="text-xl">
                  <AnimatedGradientIcon>
                    <FaBook />
                  </AnimatedGradientIcon>
                </span>
                Courses Covered So Far
              </h4>
              <div className="flex flex-wrap gap-3">
                {courses.map((course) => (
                  <motion.span
                    key={course}
                    className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.1, backgroundColor: "#1e87f0", color: "#ffffff" }}
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Educations;
