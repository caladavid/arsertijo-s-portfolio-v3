'use client';
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const MagneticButton = ({ children }) => {

    const ref = useRef(null);
    const [position, setPosition] = useState({x:0,y:0});

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const targetX = clientX - centerX;
        const targetY = clientY - centerY;
        setPosition({x: targetX, y: targetY})
    }

    const reset = () => {
        setPosition({x:0, y:0})
    }

    const { x, y } = position;

  return (
    <motion.div
        className="my-auto"
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{x, y}}
        transition={{type: "spring", stiffness: 150, damping: 15, mass: 0.1}}
    >
        {children}
    </motion.div>
  )
}

export default MagneticButton