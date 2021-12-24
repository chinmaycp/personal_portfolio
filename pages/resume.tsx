import React from 'react';
import Head from "next/head";
import { motion } from 'framer-motion';
import { languages, tools } from '../data';
import Bar from '../components/Bar';
import { item, routeAnimation } from '../animations';

const resume = () => {
    const variants = {
        intial: {
            opacity: 0,
            y: 60,
        },
        animate: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <motion.div className="px-6 py-2" variants={routeAnimation} initial="hidden" animate="show" exit="exit">
            <Head>
                <title>Chinmay Patel | Resume</title>
            </Head>
            {/* Education & Experience */}
            <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={item} initial="hidden" animate="show">
                    <h4 className="my-3 text-2xl font-bold">Education</h4>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Computer Science, BSc.</h5>
                        <h6 className="font-semibold">York University (2015-2021)</h6>
                        <p className="my-3">Relevant courses are this, this, and this, oh and maybe this.</p>
                    </div>
                </motion.div>
                <motion.div variants={item} initial="hidden" animate="show">
                    <h4 className="my-3 text-2xl font-bold">Work Experience</h4>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Software Developer</h5>
                        <h6 className="font-semibold">Facebook (May-Aug 2015)</h6>
                        <p className="my-3">Relevant experiences are this, this, and this, oh and maybe this.</p>
                    </div>
                </motion.div>
            </div>

            {/* Languages & Tools */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
                    <div className="my-2">
                        {
                            languages.map((language) => (
                                <Bar data={language} key={language.name} />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
                    <div className="my-2">
                        {
                            tools.map((tool) => (
                                <Bar data={tool} key={tool.name} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default resume;