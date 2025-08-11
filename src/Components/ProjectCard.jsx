import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const ProjectCard = ({ project }) => {
  const { id, name, image,thumbnail, description } = project;

  return (
    <motion.div
      variants={cardVariants}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group flex flex-col"
    >
      <img src={thumbnail} alt="" />
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{description.substring(0, 100)}...</p>
        <Link
          to={`/project/${id}`}
          className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group/button rounded-md cursor-pointer mt-auto self-start"
        >
          <span className="w-full h-full bg-gradient-to-br from-[#1e87f0] via-[#8e44ad] to-[#c0392b] group-hover/button:from-[#c0392b] group-hover/button:via-[#8e44ad] group-hover/button:to-[#1e87f0] absolute"></span>
          <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover/button:bg-opacity-0 duration-400">
            <span className="relative text-white flex items-center gap-2">
              View Details <FaArrowRight />
            </span>
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
