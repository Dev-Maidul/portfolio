import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // Faster duration
      ease: "easeOut",
      staggerChildren: 0.15, // Faster stagger
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/Dev-Maidul",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/md-maidul-islam-3744b21ba/",
  },
];

const navLinks = [
  { title: "Home", link: "home" },
  { title: "About", link: "about" },
  { title: "Skills", link: "skills" },
  { title: "Projects", link: "projects" },
  { title: "Contact", link: "contact" },
];

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-gray-900 text-gray-400 pt-12 pb-8 px-4 z-40"
    >
      <div className="container mx-auto flex flex-col items-center text-center">
        <motion.h3 variants={itemVariants} className="text-3xl font-bold text-white mb-4">
          Maidul Islam
        </motion.h3>

        <motion.ul variants={itemVariants} className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-3">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <Link
                to={navLink.link}
                smooth={true}
                duration={500}
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {navLink.title}
              </Link>
            </li>
          ))}
        </motion.ul>

        <motion.div variants={itemVariants} className="flex justify-center gap-8 mb-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-white hover:scale-125 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full max-w-lg my-3"
        >
          <motion.svg width="100%" height="3" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <defs>
              <linearGradient id="gradient-border" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e87f0" />
                <stop offset="50%" stopColor="#8e44ad" />
                <stop offset="100%" stopColor="#c0392b" />
              </linearGradient>
            </defs>
            <motion.line
              x1="0"
              y1="1.5"
              x2="100%"
              y2="1.5"
              stroke="url(#gradient-border)"
              strokeWidth="3"
              strokeDasharray="10 10"
              variants={{
                hidden: { pathLength: 0 },
                visible: { pathLength: 1, transition: { duration: 1.2, ease: "easeInOut" } } // Faster duration
              }}
            />
          </motion.svg>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-sm w-full"
        >
          <p>&copy; {new Date().getFullYear()} Maidul Islam. All rights reserved.</p>
        </motion.div>
      </div>

      <Link
        to="home"
        smooth={true}
        duration={500}
        className="fixed bottom-6 right-6 p-1 rounded-full shadow-lg cursor-pointer transition-all duration-300 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500"
        title="Back to Top"
      >
        <div className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full">
            <FaArrowUp className="text-white" size={20} />
        </div>
      </Link>
    </motion.footer>
  );
};

export default Footer;
