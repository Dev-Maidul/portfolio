import React from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaCode,
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

const experiences = [
  {
    role: "Teaching Assistant – C Programming",
    company: "China University of Petroleum, Beijing",
    duration: "Sept 2023 – Present",
    location: "Beijing, China",
    description:
      "Serving as a Teaching Assistant for the C Programming course since my second semester. I assist students with core programming concepts, help debug their code, and explain key fundamentals during lab sessions and office hours. This experience has enhanced my problem-solving skills, communication ability, and confidence in teaching programming logic.",
    points: [
      "Support students in understanding data types, loops, arrays, pointers, and functions.",
      "Evaluate coding assignments and assist during lab classes.",
      "Guide peers in learning basic algorithmic thinking through C language.",
    ],
    icon: <FaChalkboardTeacher />,
  },
  {
    role: "Freelance WordPress Developer",
    company: "Fiverr",
    duration: "Jan 2021 – Dec 2023",
    location: "Remote (Bangladesh)",
    description:
      "Worked as a freelance WordPress developer, helping clients build professional, responsive websites tailored to their brand. Completed over 25+ client projects including portfolio websites, business landing pages, and eCommerce solutions. Built custom themes, optimized SEO, integrated payment gateways, and provided after-sale support.",
    points: [
      "Maintained 5-star rating and 95% client satisfaction rate on Fiverr.",
      "Developed and deployed full websites using Elementor, WPBakery, and custom CSS.",
      "Communicated with international clients, managed deadlines, and delivered bug-free work.",
    ],
    icon: <FaCode />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 text-white rounded-xl mt-30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-20"
        >
          My Experience
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 w-1 bg-gray-700 h-full -translate-x-1/2"></div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="space-y-16"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative p-6 sm:p-8 bg-gray-800 rounded-lg border-2 border-gray-700 shadow-lg ml-10 sm:ml-0"
              >
                <div className="absolute top-8 -left-[3.2rem] sm:left-1/2 w-8 h-8 bg-cyan-400 rounded-full border-4 border-gray-900 -translate-x-1/2 flex items-center justify-center text-gray-900">
                  {exp.icon}
                </div>

                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <span className="text-cyan-400 font-semibold mt-1 sm:mt-0">
                    {exp.duration}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row text-gray-400 text-sm gap-x-6 gap-y-1 mb-4">
                  <div className="flex items-center gap-2">
                    <FaBuilding />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-cyan-300">
                    {exp.role.includes("Teaching")
                      ? "Key Responsibilities"
                      : "Key Achievements"}
                  </h4>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;