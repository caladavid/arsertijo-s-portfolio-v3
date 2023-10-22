import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { textMask } from "@/app/animation/Animation";
import { useRef } from 'react';
import { usePathname } from 'next/navigation';

const ProjectCard = ({name, href, index, setModal}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, padding: "-10%"});
  const pathName = usePathname() 
  const isHomePage = pathName === "/";

  return (
    <motion.div 
      ref={ref}
      className='hover:opacity-[0.4] group transitionHero'
      variants={textMask}
      initial={isHomePage ? 'initial' : 'visible'}
      animate={isInView && isHomePage ? 'open' : 'visible'}
    >
      <Link href={`/works/${href}`}
            className='block py-5 md:py-10 border-slate-950 border-b-[1px] imgCursor'
            onMouseEnter={() => {setModal({active: true, index: index})}}
            onMouseLeave={() => {setModal({active: false, index: index})}}
      >

        <span className='break-words text-3xl md:text-4xl lg:text-6xl group-hover:pl-3 transitionModalText'>
          {name}
        </span>

      </Link>
    </motion.div>
  )
}

export default ProjectCard