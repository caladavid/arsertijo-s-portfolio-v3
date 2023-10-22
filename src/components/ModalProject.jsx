import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

const ScaleAnimation = {
    initial: {scale: 0, x: "-50%", y: "-50%"},
    open: {scale: 1, x: "-50%", y: "-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x: "-50%", y: "-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}},
}

const ModalProject = ({ modal, projects }) => {
    const {active, index} = modal;
    const container = useRef(null);

    useEffect(() => {
      const moveContainerX = gsap.quickTo(container.current, "left", {duration: 0.8, ease: "power3"})
      const moveContainerY = gsap.quickTo(container.current, "top", {duration: 0.8, ease: "power3"})

      window.addEventListener("mousemove", (e) => {
        const { pageX, pageY } = e;
        moveContainerX(pageX);
        moveContainerY(pageY);
      })
    }, [])

  return (
    <div>
      <motion.div ref={container} variants={ScaleAnimation} initial={"initial"} animate={active ? "open" : "closed"}
                  className='absolute md:h-[200px] xl:h-[250px] md:w-[350px] xl:w-[480px] flex items-center justify-center overflow-hidden pointer-events-none '>
          <div className='absolute h-full w-full transitionModal' style={{ top: index * -100 + "%"}}>
              {
                  projects.map((project, index) => {
                      const { src, name } = project;
                      return <div key={`modal_${index}`} className='relative h-full flex items-center justify-center'>
                          <Image 
                              src={`/assets/works/General/${src}`}
                              width={500}
                              height={0}
                              className='h-full object-cover '
                              alt={name}
                          />
                      </div>
                  })
              }
          </div>
      </motion.div>
    </div>
  )
}

export default ModalProject