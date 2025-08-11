import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../Components/ProjectCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/projects.json')
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Failed to fetch projects:", error);
                setLoading(false);
            });
    }, []); // useEffect dependency array is empty to run only once

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center text-white">Loading Projects...</div>;
    }

    return (
        <section id="projects" className="py-20 sm:py-28 text-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl sm:text-5xl font-bold text-center mb-16"
                >
                    My Projects
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 w-10/12 mx-auto"
                >
                    {projects.map((project) => (
                        <ProjectCard project={project} key={project.id} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
