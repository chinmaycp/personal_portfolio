import React, { useState } from 'react';
import Head from "next/head";
import { motion } from 'framer-motion';
import { projects } from '../data';
import ProjectCard from '../components/ProjectCard';
import ProjectsNavbar from '../components/ProjectsNavbar';
import { Category } from '../types';
import { variants, item, routeAnimation } from '../animations';

const Projects = () => {
    const [activeProjects, setActiveProjects] = useState(projects);
    const [active, setActive] = useState('all');
    const [showDetails, setShowDetails] = useState<number|null>(null);
    
    const handleFilterCategory = (categories:Category | 'all') => {
        if(categories === 'all') {
            setActiveProjects(projects);
            setActive(categories);
            return;
        }

        const newProjects = projects.filter((project) => project.categories.includes(categories));
        setActiveProjects(newProjects);
        setActive(categories);
    };

    return (
        <motion.div className="px-5 py-2 overflow-scroll" style={{ height: '65vh' }} variants={routeAnimation} initial="hidden" animate="show" exit="exit">
            <Head>
                <title>Chinmay Patel | Projects</title>
            </Head>
            <ProjectsNavbar handleFilterCategory={handleFilterCategory} active={active} />
            <motion.div className="grid grid-cols-12 gap-4 my-3 relative" variants={variants} initial="hidden" animate="show">
                {
                    activeProjects.map((project) => (
                        <motion.div
                            key={project.name}
                            className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200 dark:bg-dark-200 rounded-md"
                            variants={item}
                        >
                            <ProjectCard project={project} showDetails={showDetails} setShowDetails={setShowDetails} />
                        </motion.div>
                    ))
                }
            </motion.div>
        </motion.div>
    )
}

export default Projects;