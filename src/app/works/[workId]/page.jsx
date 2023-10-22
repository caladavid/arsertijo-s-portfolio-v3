"use client"
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Wrapper from '@/components/Wrapper';
import LightBox from '@/components/LightBox';
import worksList from "../../helpers/WorksList";
import Image from 'next/image';
import Link from 'next/link';
import Cursor from '@/components/Cursor';
import PageTransitionLayout from '@/components/PageTransitionLayout';

const Page = () => {
  const params = useParams();
  const workId = params.workId;
  const workName = workId
  const [clickedImg, setClickedImg] = useState(null); 
  const [currentIndexImage, setCurrentIndexImage] = useState(null);
  const projectsToRender = worksList.filter((list) => list.name === workName);

  const handleClick = (list, index) => {
    setCurrentIndexImage(index);
    setClickedImg(list.image);
  };

  // next btn
  const handleNextImage = () => {
    const filteredList = worksList.filter((list) => list.name === workName);
    const totalLength = filteredList.length;
    const newIndex = (currentIndexImage + 1) % totalLength;
    const newItem = filteredList[newIndex].image;
    setClickedImg(newItem);
    setCurrentIndexImage(newIndex);
  };

  // Prev btn
  const handlePrevImage = () => {
    const filteredList = worksList.filter((list) => list.name === workName);
    const totalLength = filteredList.length;
    const newIndex = (currentIndexImage - 1 + totalLength) % totalLength;
    const newItem = filteredList[newIndex].image;
    setClickedImg(newItem);
    setCurrentIndexImage(newIndex);
  };

  // Prevent people from downloading the images
  useEffect(() => {
    const images = document.querySelectorAll('img');
    images.forEach((image) => {
      image.addEventListener('contextmenu', (event) => {
        event.preventDefault();
      });
    });
  }, []);

  return (
      <div className='h-full overflow-hidden'>
          <Wrapper>
              <div className='flex justify-center md:justify-start pt-36 pb-16 md:pt-40 md:pb-20'>
                  <h1 className='break-words uppercase text-center font-bold text-4xl md:text-4xl lg:text-6xl 2xl:text-7xl my-10 md:my-0 md:mt-20'>{workName}</h1>
              </div>
              <div className="text-center md:text-end pb-16 md:pb-20">
                <Link className='bg-blueArs text-white px-8 py-4 rounded-full' href="/works">All works</Link>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 mx-auto my-8 mb-20 gap-4'>
                {
                  projectsToRender.map((list, index) => (
                    <div key={index}>
                      {list.name === "websites" ? (
                        <Link href={`/works/websites/${list.desc}`}>
                          <Image
                            className="w-full hover:scale-95 hover:opacity-80 hover:shadow-[rgba(0,0,0,0.35)_0px_5px_15px] transition-all imgCursor "
                            src={list.image}
                            alt={list.desc}
                            width={0}
                            height={0}
                            sizes="100%"
                            onContextMenu={(e) => e.preventDefault()}
                          />
                        </Link>
                      ) : (
                        <Image
                          className="w-full hover:scale-95 hover:opacity-80 hover:shadow-[rgba(0,0,0,0.35)_0px_5px_15px] transition-all imgCursor "
                          src={list.image}
                          alt={list.desc}
                          width={0}
                          height={0}
                          sizes="100%"
                          onContextMenu={(e) => e.preventDefault()}
                          onClick={() => handleClick(list, index)}
                        />
                      )}
                    </div>
                  ))
                }

                {clickedImg && (
                  <LightBox 
                    clickedImg={clickedImg}
                    setClickedImg={setClickedImg}
                    handleNext={handleNextImage}
                    handlePrev={handlePrevImage}
                  />
                )}
              </div>
          </Wrapper>
          <Cursor />
          <PageTransitionLayout text={workName}/>
      </div>
  );
}

export default Page;
