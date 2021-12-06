export const variants = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const item = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    show: {
        opacity: 1,
        y: 0,
    },
};

export const routeAnimation = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: 0.1,
        },
    },
    exit: {
        opacity: 0,
        transition: { 
            delay: 0.1,
            ease: "easeInOut",
        },
    },
};