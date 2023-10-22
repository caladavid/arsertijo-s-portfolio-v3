import { motion } from 'framer-motion';
/* import Link from 'next/link' */
import React, { useState } from 'react'
import { scale, slide } from '../app/animation/Animation';
/* import { usePathname } from 'next/navigation'; */

const LinkNav = ({data, isActive, setSelectedIndicator, onClick}) => {
/*   const pathName = usePathname(); */
  const { title, href, index } = data;
/*   const [redirect, setRedirect] = useState(false); */

  const handleLinkClick = () => {
/*     if (pathName !== "/" && (href === "/#contact" || href === "/#about")) {
      e.preventDefault(); 

      // Redirige primero a la página de inicio ("/") después de un retraso
      setRedirect(true);
      setTimeout(() => {
        window.location.href = href;
      }, 1620); 
    } */

    setSelectedIndicator(href);
    onClick(); // Cerrar el menú desplegable Nav
  };


  return (
    <motion.div 
      onClick ={handleLinkClick}
      custom={index}
      className='relative flex items-center'
      variants={slide}
      initial="initial" 
      animate="enter" 
      exit="exit"
    >
      <motion.div 
        className='w-2 h-2 bg-white rounded-[50%] absolute -left-5'
        variants={scale}
        animate={isActive ? "open" : "closed"}
        >
      </motion.div>
      <a className='hover:text-gray imgCursor textCursor ' href={href}>{title}</a>
{/*       <a className='hover:text-gray imgCursor textCursor ' href={redirect ? '/' : href}>{title}</a> */}
    </motion.div>
  )
}

export default LinkNav