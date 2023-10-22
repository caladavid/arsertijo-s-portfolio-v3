"use client"
import Image from "next/image"
import Wrapper from "./Wrapper"
import HeroImg from "../../public/assets/images/Hero/HeroBackground.png"
import ArrowBtn from "../../public/assets/svgs/ArrowBtn"
import MagneticButton from "./MagneticButton"
import TextMask from "./TextMask"

const Hero = () => {
  const h1Phrases = ["Designer", "focused", "on", "Social", "Media"];
  const pPhrases= ["Showcase your creativity through design"];
  
  return (
    <div className="h-screen w-full flex items-end relative text-white bg-gradient-to-t from-black">
        
      <Image 
        src={HeroImg}
        alt="text"
        className="w-full h-full object-cover absolute z-[-1]"
        priority={true}
      />
        <Wrapper>
          <div className="flex pb-10 md:pb-20 md:gap-8">
            <div className="min-[800px]:w-[80%] flex-wrap">
                <div className="min-[800px]:max-w-[18ch] text-3xl min-[800px]:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold md:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight"><TextMask phrases={h1Phrases} elementType="h1"/></div>
                <div className="mt-5"><TextMask phrases={pPhrases} elementType="p"/></div>
            </div>
            <MagneticButton>
              <div className="min-[800px]:w-[20%] hidden md:flex text-center px-8">
                  <a 
                    href="#Recent Projects"
                    className="px-8 py-10 lg:px-10 lg:py-12 xl:px-12 xl:py-14 bg-blueArs my-auto rounded-full test  cursorBtn"
                    aria-label="Button"
                  >
                    <ArrowBtn className="scale-50 lg:scale-[.65] xl:scale-[.80]"/>
                  </a>
              </div>
            </MagneticButton>
          </div>
        </Wrapper>
    </div>
  )
}

export default Hero