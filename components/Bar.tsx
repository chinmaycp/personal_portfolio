import React, { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

const Bar:FunctionComponent<{
    data:Skill
}> = ({ data: { Icon, level, name } }) => {
    const bar_width = `${level}%`;

    const variants = {
        initial: {
            width: 0,
        },
        animate: {
            width: bar_width,
            transition: {
                duration: 0.3,
                type: "spring",
                damping: 12,
                stiffness: 75,
            },
        },
    };

    return (
        <div className="text-white my-2 bg-gray-300 dark:bg-dark-300 rounded-full">
            <motion.div
                className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-customGreen to-blue-600"
                style={{ width: bar_width }}
                variants={variants}
                initial="initial"
                animate="animate"
            >
                <Icon className="w-4 h-4 mr-2" />
                {name}
            </motion.div>
        </div>
    )
}

export default Bar;