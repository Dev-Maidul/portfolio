import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/banner2.jpg"; // আপনার ছবিটি assets ফোল্ডারে রেখে পাথটি ঠিক করে নিন

const skills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "React",
  "React Router",
  "Firebase",
  "MongoDB",
  "Express.js",
  "Node.js",
  "JWT",
  "TypeScript",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const AboutMe = () => {
  return (
    <section id="about" className="py-20 sm:py-28 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-2/5"
          >
            <div className="relative p-2 border-2 border-cyan-400 rounded-lg shadow-lg shadow-cyan-400/20">
              <img
                src={aboutImage}
                alt="Md Maidul Islam"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-3/5"
          >
            <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm Md Maidul Islam, a passionate and empathetic MERN Stack
              Developer currently based in Beijing, China. I'm a second-year
              Computer Science and Engineering (CSE) student at China University
              of Petroleum – Beijing, and I'm deeply focused on building
              meaningful and user-centered web applications.
            </motion.p>

            <motion.div variants={itemVariants} className="my-6">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                My Skillset
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="bg-gray-800 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-700"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#22d3ee",
                      color: "#0d1117",
                      borderColor: "#22d3ee",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed mb-6">
              As a naturally introspective and idealistic person (INFP-T), I love
              turning creative ideas into real-world products that solve
              everyday problems with simplicity and elegance. I'm also a
              practicing Muslim, and I strongly believe in working ethically,
              staying honest, and making a positive impact.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg text-cyan-200 bg-gray-800 p-4 rounded-lg border-l-4 border-cyan-400">
              My current goal is to secure a remote, night-shift developer
              position by December 2025. I'm always open to new learning
              opportunities and collaborations that align with my principles and
              purpose.
            </motion.p>

            <motion.p variants={itemVariants} className="text-xl font-semibold mt-8">
              Let’s build something impactful, together.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;