"use client"
import { motion, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [emailEmoji, setEmailEmoji] = useState(false);
  const [cursorSize, setCursorSize] = useState(15);
  const [cursorColor, setCursorColor] = useState(false);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };
  
  const manageMouseMove = e => {
    const { clientX, clientY } = e;
      mouse.x.set(clientX - cursorSize / 2)
      mouse.y.set(clientY - cursorSize / 2)
  };

  const smoothOptions = {damping: 20, stiffness: 300, mass: 0.5}
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  // Función para gestionar el evento de pasar el mouse por encima de elementos.
  const manageMouseOver = (e) => {
      setIsHovered(true);

      // Comprueba las clases o etiquetas de los elementos y ajusta el cursor en consecuencia.
      if (e.target.classList.contains("imgCursor")) {
        setCursorText("View");
        setEmailEmoji(false);
        setCursorSize(60);
        setCursorColor(false);

      } else if (e.target.classList.contains("textCursor")) {
        setCursorText("📩")
        setEmailEmoji(true);
        setCursorSize(100);
        setCursorColor(false);
        
      } else if (e.target.classList.contains("cursorBtn")) {
        setCursorSize(0);
        
      } else if (e.target.tagName.toLowerCase() === "a") {
        setCursorText("");
        setEmailEmoji(false);
        setCursorSize(60);
        setCursorColor(true);
      }
  };
  
  // Función para gestionar el evento de salir del mouse de elementos.
  const manageMouseLeave = (e) => {
    setIsHovered(false);
    setCursorText("");
    setCursorSize(15);
    setCursorColor(false); 
  };

  useEffect( () => {
    window.addEventListener('mousemove', manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isHovered]);

  // Seleccionar todos los elementos <a>
  useEffect(() => {
    const links = document.querySelectorAll('a, .imgCursor, .textCursor');

    // Agregar eventos de mouse a cada elemento <a>
    links.forEach((link) => {
      link.addEventListener('mouseenter', manageMouseOver);
      link.addEventListener('mouseleave', manageMouseLeave);
    });

    // Eliminar eventos de mouse al desmontar el componente
    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', manageMouseOver);
        link.removeEventListener('mouseleave', manageMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div 
        className={`${cursorColor ? "border-blueArs border-2 bg-transparent" : ""}bg-blueArs fixed lg:flex w-4 h-4 rounded-full  pointer-events-none z-[1] hidden`}
        style={{ left: smoothMouse.x, top: smoothMouse.y}} 
        animate={{ width: cursorSize, height: cursorSize, }}
    >
      <span className={` ${emailEmoji ? "text-4xl m-auto" : "text-sm m-auto" } pointer-events-none text-white`}>{cursorText}</span>
    </motion.div>
  )
}

export default Cursor