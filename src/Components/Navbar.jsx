import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/about-me", label: "About Me" },
  { to: "/contact", label: "Contact" },
];

const menuItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar px-4">
      <div className="navbar-start flex items-center">
        {/* Mobile dropdown toggle */}
        <button
          tabIndex={0}
          role="button"
          className="btn btn-ghost lg:hidden"
          onClick={() => setDropdownOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>

        {/* Dropdown menu */}
        <AnimatePresence>
          {dropdownOpen && (
            <motion.ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 font-bold shadow-lg origin-top-left absolute left-0"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
            >
              {navLinks.map(({ to, label }, i) => (
                <motion.li
                  key={to}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuItemVariants}
                >
                  <NavLink
                    to={to}
                    onClick={() => setDropdownOpen(false)}
                    className={({ isActive }) =>
                      isActive ? "text-primary" : undefined
                    }
                  >
                    {label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Logo */}
        <Link to="/" className="ml-4">
          <img
            className="rounded-full w-[80px] h-[80px] cursor-pointer"
            src={logo}
            alt="Logo"
          />
        </Link>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6 font-bold">
          {navLinks.map(({ to, label }, i) => (
            <motion.li
              key={to}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
            >
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? "text-primary" : undefined
                }
              >
                {label}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Resume button */}
      <div className="navbar-end">
        <Link
          to="/resume" // Change to your actual resume route or external link
          className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md cursor-pointer"
        >
          <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
          <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white">Resume</span>
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;