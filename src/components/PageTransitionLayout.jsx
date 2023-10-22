import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { TransAnimation, textContainer } from "../app/animation/Animation";

const PageTransitionLayout = ({ text }) => {
  const router = useRouter();

  return (
    <AnimatePresence mode={'wait'}>
      <motion.div key={router.route}
        className='bottom-0 w-screen h-screen inset-0 fixed bg-black overflow-hidden z-[2]'
        variants={TransAnimation}
        initial="initial"
        animate="animate"
      >
        <motion.span
          className='absolute z-50 flex top-1/2 left-1/2 text-white font-bold text-2xl translate-y-[-50%] translate-x-[-50%] capitalize'
          variants={textContainer}
        >
          {text}
        </motion.span>
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransitionLayout