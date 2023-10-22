import { textMask } from "@/app/animation/Animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProcessCard = ({ number, title, desc }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, padding: "-10%"});
  
  return (
    <motion.div 
      className="sm:grid sm:grid-cols-[45%_minmax(0,_1fr)] justify-between group hover:text-blueArs transitionModalText border-slate-950 border-b-[1px] py-10 "
      ref={ref}
      variants={textMask} initial="initial" animate={isInView ? "open" : ""}
      >
        <div className="w-full  lg:min-h-[10ch] flex gap-3 sm:gap-4 lg:gap-8 mr-5 mb-5 sm:mr-10 sm:mb-0 break-words ">
            <span className="md:text-3xl xl:text-4xl flex lg:mt-5">{number}</span>
            <p className="text-2xl lg:text-4xl font-bold block break-words lg:mt-5">{title}</p>
        </div>
        <p className="pl-5 text-2xl xl:text-3xl text-gray group-hover:text-blueArs transitionModalText md:leading-snug xl:leading-snug my-auto">{desc}</p>
    </motion.div>
  )
}

export default ProcessCard