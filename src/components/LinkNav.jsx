import { motion } from 'framer-motion';
import { scale, slide } from '../app/animation/Animation';

const LinkNav = ({data, isActive, setSelectedIndicator, onClick}) => {
  const { title, href, index } = data;

  const handleLinkClick = () => {
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
      <a className='hover:text-gray imgCursor textCursor' href={href}>{title}</a>
    </motion.div>
  )
}

export default LinkNav