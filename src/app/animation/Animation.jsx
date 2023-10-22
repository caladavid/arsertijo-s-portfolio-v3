export const textMask = {
    initial: { y: "100%" },
    open: (i) => ({ y: "0%", transition: { duration: 0.4, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] } })
};

export const menuSlide = {
    initial: { x: "calc(100% + 100px)" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
}

export const slide = {
    initial: { x: 80 },
    enter: i => ({ x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }),
    exit: i => ({ x: 80, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } })
}

export const scale = {
    open: { scale: 1, transition: { duration: 0.3 } },
    closed: { scale: 0, transition: { duration: 0.4 } }
}

export const menuBurger = {
    initial: { scale: 0, },
    animate: { scale: 1, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
    exit: { scale: 0, transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
}

export const TransAnimation = {
    initial: {
        height: "100vh",
        bottom: 0,
    },
    animate: {
        height: "0vh",
        transition: {
            when: "afterChildren",
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],

        },
    },
}
export const textContainer = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0,
        transition: {
            duration: 1,
            when: "afterChildren",
        },
    },
};

