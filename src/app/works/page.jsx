"use client"
import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import Wrapper from '@/components/Wrapper';
import Star from "../../../public/assets/svgs/Star";
import ModalProject from '@/components/ModalProject';
import Cursor from '@/components/Cursor';
import PageTransitionLayout from '@/components/PageTransitionLayout';

const Works = () => {
  const [modal, setModal] = useState({active: false, index: 0});
  const projects = [
    {
      name: "Thumbnails",
      href:"thumbnails",
      src: "Thumbnails.jpg",
    },
    {
      name: "Streams Overlays",
      href:"stream_overlays",
      src: "StreamOverlays.jpg",
    },
    {
      name: "Album Covers",
      href:"album_covers",
      src: "AlbumCovers.jpg",
    },
    {
      name: "Websites",
      href:"websites",
      src: "Websites.jpg",
    },
    {
      name: "Headers",
      href:"headers",
      src: "Headers.jpg",
    },
    {
      name: "Advertisements",
      href:"advertisements",
      src: "Advertisements.jpg",
    },
  ]
  return (
      <div className='w-full h-full'>
        <Wrapper>
          <div className='relative w-full pt-36 lg:pt-52'>
            <Star className="absolute hidden lg:block bottom-4 lg:left-[1%] xl:left-[-2%] 2xl:left-[5%] min-[1900px]:left-[8%] min-[2400px]:left-[20%]"/>
            <Star className="absolute hidden lg:block scale-75 bottom-36 lg:right-[0.5%] 2xl:right-[5%] min-[1900px]:right-[8%] min-[2400px]:right-[20%]"/>
            <h2 className='relative break-words font-bold text-blueArs text-center text-4xl sm:text-6xl md:text-7xl xl:text-8xl my-10 md:mt-20'>Explore my Works</h2>
            <p className='mb-10 md:mb-20 text-center'>Explore my earlier work, get inspired by our clients and find out how we can help</p>
          </div>
          
          <div className='pb-20'>
          <hr className="border-slate-950 "/>
          {
                  projects.map( (project, index) =>{
                    return <ProjectCard key={index} index={index} href={project.href} name={project.name} setModal={setModal}/>
                  })
                }
                <ModalProject modal={modal} projects={projects}/>

          </div>
        </Wrapper>
        <Cursor />
        <PageTransitionLayout text="Works"/>
      </div>
  )
}

export default Works