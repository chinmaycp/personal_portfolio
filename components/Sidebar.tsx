import React from 'react';
import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { useTheme } from 'next-themes';

const Sidebar = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div>
             {/* Avatar & Intro */}
            <Image src="/images/memoji3.jpeg" alt="personal memoji" width="200" height="200" layout="intrinsic" quality="100" className="mx-auto rounded-full" />
            <h1 className="mt-1 mb-2 text-3xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl  font-medium tracking-wider font-extrabold">Chinmay Patel</h1>

            {/* Contact Info */}
            <div className="my-4 py-3 bg-gray-200 dark:bg-dark-200 rounded-sm" style={{ marginLeft:'-1rem', marginRight:'-1rem' }}>
                <h2 className="mb-2">Full Stack Developer</h2>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Toronto, Canada</span>
                </div>
                <div className="mt-2">
                    <a href="mailto:chinmaypatel.cp@gmail.com" target="_blank" rel="noreferrer">chinmaypatel.cp@gmail.com</a>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-evenly mx-auto my-5 w-9/12 md:w-full">
                <a href="https://github.com/chinmaycp" target="_blank" rel="noreferrer">
                    <AiFillGithub className="w-8 h-8 text-github dark:text-white" />
                </a>
                <a href="https://linkedin.com/in/chinmaycp" target="_blank" rel="noreferrer">
                    <AiFillLinkedin className="w-8 h-8 text-linkedin" />
                </a>
            </div>

            {/* Resume & Theme Toggle Button */}
            <a href="/resume/Resume - Chinmay Patel.pdf" target="_blank" rel="noreferrer" className="inline-block w-8/12 rounded-full py-2 px-5 text-white dark:text-dark-200 my-2 bg-gradient-to-r from-customGreen to-blue-400">Resume</a>
            <button
                className="w-8/12 rounded-full py-2 px-5 text-white dark:text-dark-200 my-2 bg-gradient-to-r from-customGreen to-blue-400"
                onClick={toggleTheme}
            >
                Toggle Theme
            </button>
        </div>
    );
}

export default Sidebar;