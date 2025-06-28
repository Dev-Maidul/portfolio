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
  "Web Development",
  "Database Systems",
  "Software Engineering Principles",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Educations = () => {
  return (
    <section id="education" className="py-20 sm:py-28 text-white mt-15">
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
          <div className="absolute left-4 sm:left-1/2 w-1 bg-gray-700 h-full -translate-x-1/2"></div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="relative p-6 sm:p-8 bg-gray-800 rounded-lg border-2 border-gray-700 shadow-lg ml-10 sm:ml-0"
          >
            <div className="absolute top-8 -left-[3.2rem] sm:left-1/2 w-8 h-8 bg-cyan-400 rounded-full border-4 border-gray-900 -translate-x-1/2 flex items-center justify-center">
              <FaGraduationCap className="text-gray-900" />
            </div>

            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <FaGraduationCap className="text-cyan-400 text-2xl" />
              <h3 className="text-2xl font-bold text-white">
                Bachelor of Science in Computer Science & Engineering
              </h3>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-3 mt-2">
              <FaUniversity className="text-gray-400" />
              <p className="text-lg text-gray-300">
                China University of Petroleum – Beijing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-gray-400" />
                <p className="text-gray-400">Beijing, China</p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <FaCalendarAlt className="text-gray-400" />
                <p className="text-gray-400">2023 – Expected June 2027</p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-3 col-span-1 sm:col-span-2">
                <FaUserGraduate className="text-gray-400" />
                <p className="text-gray-400">
                  Current: 2nd Year (3rd Year starts in September 2025)
                </p>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="text-xl font-semibold mb-4 text-cyan-400 flex items-center gap-3">
                <FaBook />
                Courses Covered So Far
              </h4>
              <div className="flex flex-wrap gap-3">
                {courses.map((course) => (
                  <motion.span
                    key={course}
                    className="bg-gray-700 text-cyan-200 px-4 py-2 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.1 }}
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