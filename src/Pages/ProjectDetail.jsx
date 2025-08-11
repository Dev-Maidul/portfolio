import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLightbulb, FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/projects.json')
            .then((res) => res.json())
            .then((data) => {
                const foundProject = data.find((p) => p.id === parseInt(id));
                setProject(foundProject);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
    }

    if (!project) {
        return <div className="min-h-screen flex items-center justify-center text-white">Project not found.</div>;
    }

    const { name, image, description, techStack, links, challenges, futurePlans } = project;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-20 sm:py-28 text-white"
        >
            <div className="container mx-auto px-4">
                <Link to="/projects" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8">
                    <FaArrowLeft />
                    Back to Projects
                </Link>

                <div className="flex flex-col lg:flex-row gap-12">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="lg:w-2/5">
                        <img src={image} alt={name} className="rounded-lg shadow-lg w-full mb-6" />
                        <div className="flex gap-4">
                            <a href={links.live} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2">
                                <FaExternalLinkAlt /> Live Site
                            </a>
                            <a href={links.client} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2">
                                <FaGithub /> GitHub
                            </a>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:w-3/5">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{name}</h1>
                        <p className="text-lg text-gray-300 mb-6">{description}</p>

                        <h3 className="text-2xl font-semibold mb-3 text-cyan-400">Technology Stack</h3>
                        <div className="flex flex-wrap gap-3 mb-6">
                            {techStack.map(tech => (
                                <span key={tech} className="bg-gray-800 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-700">{tech}</span>
                            ))}
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <h4 className="text-xl font-semibold mb-2 text-yellow-400 flex items-center gap-2"><FaExclamationTriangle /> Challenges Faced</h4>
                                <p className="text-gray-400">{challenges}</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <h4 className="text-xl font-semibold mb-2 text-green-400 flex items-center gap-2"><FaLightbulb /> Future Plans</h4>
                                <p className="text-gray-400">{futurePlans}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;
