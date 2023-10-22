"use client"
import Link from "next/link";
import Wrapper from "./Wrapper";
import ProjectCard from "./ProjectCard";
import { useRef, useState } from "react";
import ModalProject from "./ModalProject";
import TextMask from "./TextMask";
import { motion, useInView } from "framer-motion";
import { textMask } from "@/app/animation/Animation";

const RecentProjects = () => {
  const ref = useRef(null);
  const [modal, setModal] = useState({active: false, index: 0});
  const isInView = useInView(ref, {once: true, padding: "-10%"});
  
  const projects = [
    {
      name: "Thumbnails",
      href:"thumbnails",
      src: "Thumbnails.jpg"
    },
    {
      name: "Streams Overlays",
      href:"stream_overlays",
      src: "Stream_overlays.jpg"
    },
    {
      name: "Album Covers",
      href:"album_covers",
      src: "Album_covers.jpg"
    },
    {
      name: "Websites",
      href:"websites",
      src: "Websites.jpg"
    },
  ]

  const title = ["Recents", "Projects"];

  return (
    <motion.div 
      id="Recent Projects" 
      className="w-full h-full md:pt-1"
      >
        <Wrapper>
        
            <div className="break-words font-bold text-black text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl py-10 md:py-20 overflow-hidden"> 
              <TextMask phrases={title} elementType="p" customClass="pb-2"/>
            </div>

            <hr className="border-slate-950 "/>
              <div className="overflow-hidden">
                {
                  projects.map( (project, index) =>{
                    return <ProjectCard key={index} index={index} href={project.href} name={project.name} setModal={setModal} />
                  })
                }
              <ModalProject modal={modal} projects={projects}/>
              </div>
            
              <motion.div 
                ref={ref}
                variants={textMask} initial="initial" animate={isInView ? "open" : ""}
                className="w-full pt-10 text-center overflow-hidden"
              >
                <Link 
                  href="/works"
                  className="block py-4 bg-blueArs hover:bg-[#105bc5] text-white"
                >
                  More works
                </Link>
              </motion.div>

        </Wrapper>

    </motion.div>
  )
}

export default RecentProjects