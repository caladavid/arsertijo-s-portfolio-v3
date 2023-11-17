"use client"
import React, { useEffect, useRef, useState } from 'react';
import { textMask } from '@/app/animation/Animation';
import { motion, useInView } from 'framer-motion';
import { usePathname } from 'next/navigation';

const TextMask = ({ phrases, elementType, customClass }) => {
  const pathName = usePathname();
  const refTextMask = useRef(null);
  const [showTextMask, setShowTextMask] = useState(false);
  const isInView = useInView(refTextMask, { once: true, padding: "-10%" });
  const ElementT = elementType;

  useEffect(() => {
    if (pathName === '/') {
      const timer = setTimeout(() => {
        setShowTextMask(true);
      }, 1550);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setShowTextMask(true);
    }
  }, []);


  return (
    <ElementT ref={refTextMask}>
      {showTextMask &&
        phrases.map((phrase, index) => {
          return <span key={index} className={` overflow-hidden inline-block mr-2 md:mr-4 ${customClass}`}>
            <motion.span
              custom={index}
              variants={textMask}
              initial="initial"
              animate={isInView ? "open" : ""}
              key={index}
              className="inline-block"
            >
              {phrase}</motion.span>
          </span>
        })
      }
    </ElementT>
  )
}

export default TextMask