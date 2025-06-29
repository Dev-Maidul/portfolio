import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJsonwebtokens,
} from "react-icons/si";

const skills = [
  { icon: <FaReact size="100%" />, name: "React", color: "#61DAFB" },
  { icon: <SiJavascript size="100%" />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <FaNodeJs size="100%" />, name: "Node.js", color: "#339933" },
  { icon: <SiExpress size="100%" />, name: "Express.js", color: "#000000" },
  { icon: <SiMongodb size="100%" />, name: "MongoDB", color: "#47A248" },
  { icon: <SiFirebase size="100%" />, name: "Firebase", color: "#FFCA28" },
  {
    icon: <SiTailwindcss size="100%" />,
    name: "Tailwind CSS",
    color: "#06B6D4",
  },
  { icon: <FaGitAlt size="100%" />, name: "Git", color: "#F05032" },
  { icon: <FaHtml5 size="100%" />, name: "HTML5", color: "#E34F26" },
  { icon: <FaCss3Alt size="100%" />, name: "CSS3", color: "#1572B6" },
  {
    icon: <SiJsonwebtokens size="100%" />,
    name: "JWT",
    color: "#d63aff",
  },
];

const Skills = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const radius = isMobile ? 110 : 250;
  const iconSize = isMobile ? 45 : 80;

  return (
    <section id="skills" className="py-20 sm:py-28 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 sm:mb-24"
        >
          My Tech Arsenal
        </motion.h2>

        <div className="relative flex items-center justify-center h-[350px] sm:h-[600px]">
          <motion.div
            className="absolute w-full h-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {skills.map((skill, index) => {
              const angle = (index / skills.length) * 2 * Math.PI;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={skill.name}
                  className="absolute flex items-center justify-center bg-gray-800 rounded-full p-2 sm:p-4 border-2 border-gray-700 shadow-lg"
                  style={{
                    width: iconSize,
                    height: iconSize,
                    left: `calc(50% - ${iconSize / 2}px)`,
                    top: `calc(50% - ${iconSize / 2}px)`,
                    x: x,
                    y: y,
                  }}
                  whileHover={{
                    scale: 1.2,
                    boxShadow: `0px 0px 20px ${skill.color}`,
                    borderColor: skill.color,
                    zIndex: 10,
                  }}
                >
                  <div
                    className="w-full h-full text-white transition-colors duration-300"
                    style={{ "--hover-color": skill.color }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = e.currentTarget.style.getPropertyValue("--hover-color"))
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                  >
                    {skill.icon}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="absolute flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl sm:text-3xl font-bold">Skills</h3>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">Technologies I work with</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;