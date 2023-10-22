"use client"
import { useParams } from 'next/navigation';
import Image from 'next/image'
import WebRedesignList from "../../../helpers/WebRedesignList";
import Wrapper from '@/components/Wrapper';
import Cursor from '@/components/Cursor';
import PageTransitionLayout from '@/components/PageTransitionLayout';
import ComparisonSlider from '@/components/ComparisonSlider';
import Link from 'next/link';

const Websites = () => {
    const params = useParams();
    const websiteId = params.websiteId;
    const projectsToRender = WebRedesignList.filter((list) => list.name === websiteId);
    const isLectorManga  = projectsToRender.some((list) => list.name === "LectorManga");

  return (
      <div>
        <Wrapper>
            <div className='text-center white-space mt-40 sm:mt-16 pb-16 md:pt-40 md:pb-20'>
              <h1 className=' text-4xl sm:text-5xl md:text-6xl lg:text-title font-bold text-blue flex-wrap '>{websiteId}</h1>
            </div>

            <div className="text-center pb-16 md:pb-20">
                <Link className='bg-blueArs text-white px-8 py-4 rounded-full' href="/works/websites">Websites</Link>
              </div>

            <div className='grid grid-cols-1 w-[90%] mx-auto my-8 mb-20'>
              {isLectorManga && <ComparisonSlider />}
          {
            projectsToRender.map((list, index) => (
              <div key={ index }>
                {
                  <div className='flex relative'>
                    <Image 
                      className='w-full select-none pointer-events-none' 
                      src={list.img} 
                      key={index} 
                      alt={list.desc}
                      onContextMenu={(e) => e.preventDefault()}
                      width={0}
                      height={0}
                      sizes="100%"  
                    />
                  </div>
                  }
              </div>
            ))
          } 
          </div>
        </Wrapper>
        <Cursor />
        <PageTransitionLayout text={websiteId}/>
      </div>
  )
}

export default Websites