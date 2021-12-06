import React, { FunctionComponent, useState } from 'react';
import Image from 'next/image';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { Project } from '../types';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
import { variants, item } from '../animations';

const ProjectCard:FunctionComponent<{
    project:Project;
    showDetails: number|null,
    setShowDetails: (id: number | null) => void;
}> = ({ project: { id, name, image_path, categories, deployed_url, description, github_url, key_technologies }, showDetails, setShowDetails }) => {
    return (
        <div>
            <Image src={image_path} alt={name} width="393" height="220" layout="responsive" className="cursor-pointer rounded-md" onClick={() => setShowDetails(id)} />
            <h1 className="my-2 text-center">{name}</h1>
            {
                showDetails === id && (
                    <motion.div className="grid md:grid-cols-2 md:flex md:flex-col lg:flex-none xl:flex-none absolute top-0 left-0 z-10 h-auto w-full gap-x-12 p-4 text-black dark:text-white bg-gray-100 dark:bg-dark-100 rounded-md" variants={item} initial="hidden" animate="show" >
                        <motion.div id="left" variants={variants} initial="hidden" animate="show">
                            <motion.div variants={item}>
                                <Image src={image_path} alt={name} width="300" height="150" layout="responsive" className="rounded-md" />
                            </motion.div>
                            <motion.div className="flex justify-center my-4 space-x-3" variants={item}>
                                <motion.a href={github_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 rounded-md" whileHover={{ scale: 1.02, transition: { duration: 0.3 }, }}>
                                    <AiFillGithub /> <span>Github</span>
                                </motion.a>
                                <motion.a href={deployed_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 rounded-md" whileHover={{ scale: 1.02, transition: { duration: 0.3 }, }}>
                                    <AiFillProject /> <span>Project</span>
                                </motion.a>
                            </motion.div>
                        </motion.div>
                        <motion.div id="right" variants={variants} initial="hidden" animate="show">
                            <motion.h2 className="mb-3 text-xl font-medium md:text-2xl" variants={item}>{name}</motion.h2>
                            <motion.h3 className="mb-3 font-medium" variants={item}>{description}</motion.h3>
                            <motion.div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider" variants={item}>
                                {key_technologies.map((technology) => (
                                    <span key={technology} className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-md">{technology}</span>
                                ))}
                            </motion.div>
                        </motion.div>
                        <motion.button onClick={() => setShowDetails(null)} className="absolute bottom-3 right-3 rounded-full focus:outline-none bg-gray-200 dark:bg-dark-200" variants={item}>
                            <MdClose size={30} />
                        </motion.button>
                    </motion.div>
                )
            }
        </div>
    )
}

export default ProjectCard;