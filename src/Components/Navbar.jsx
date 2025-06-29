import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo.png";
import { FaFileDownload, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/education", label: "Education" },
  { to: "/experience", label: "Experience" },
  { to: "/about-me", label: "About Me" },
  { to: "/contact", label: "Contact" },
];

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="relative bg-gray-900 z-50 rounded-2xl mb-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex-shrink-0">
          <NavLink to="/">
            <img
              className="rounded-full w-16 h-16 cursor-pointer"
              src={logo}
              alt="Logo"
            />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8 font-semibold text-gray-300">
          {navLinks.map(({ to, label }) => (
            <li key={to} className="relative">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `hover:text-white transition-colors duration-300 ${
                    isActive ? "text-white" : ""
                  }`
                }
              >
                {label}
                {location.pathname === to && (
                  <motion.div
                    className="absolute bottom-[-5px] left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    layoutId="underline"
                  />
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Resume Button */}
        <div className="hidden lg:flex">
          <a
            href="/Maidul_Islam_Resume.pdf"
            download
            className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md cursor-pointer"
          >
            <span className="w-full h-full bg-gradient-to-br from-[#1e87f0] via-[#8e44ad] to-[#c0392b] group-hover:from-[#c0392b] group-hover:via-[#8e44ad] group-hover:to-[#1e87f0] absolute"></span>
            <span className="relative px-5 py-2.5 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <span className="relative text-white flex items-center gap-2">
                <FaFileDownload />
                Resume
              </span>
            </span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen((prev) => !prev)} aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <FaTimes className="w-6 h-6 text-white" />
            ) : (
              <FaBars className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 w-full bg-gray-800 shadow-xl"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <ul className="flex flex-col p-4">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `block text-center py-3 rounded-md transition-colors ${
                        isActive
                          ? "text-white bg-blue-600"
                          : "text-gray-300 hover:bg-gray-700"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-4 pt-4 border-t border-gray-700">
                <a
                  href="/Maidul_Islam_Resume.pdf"
                  download
                  className="block text-center py-3 text-white bg-blue-600 rounded-lg"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;