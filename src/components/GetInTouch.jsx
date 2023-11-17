"use client"
import Wrapper from "./Wrapper"
import Star from "../../public/assets/svgs/Star"
import TextMask from "./TextMask"

const GetInTouch = () => {
    const pPhrases = ["LET'S", "CREATE", "YOUR", "NEW", "BRAND"];

  return (
    <section  className="h-full relative bg-black text-white ">
        <Wrapper>
            <div id="contact" className='relative w-full py-32 flex flex-col justify-center items-center text-center'>
                <Star className="absolute hidden md:block scale-75 bottom-48 -right-10 lg:right-8 xl:right-14 2xl:right-24 min-[1900px]:right-44 min-[2200px]:right-[25%]"/>
                <Star className="absolute hidden md:block top-16 left-0 lg:left-8 xl:left-16 2xl:left-28 min-[1900px]:left-44 min-[2200px]:left-[25%]"/>
                <div className='break-words font-bold text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-16 max-w-[18ch]'>
                    <TextMask phrases={pPhrases} elementType="h2" c/>
                </div>
                <div className='group overflow-hidden bg-blueArs text-center text-grey bg-orange rounded-md'>
                    <a href='mailto:angeluniempleo@hotmail.com' className='w-60 flex justify-center font-semibold text-xl uppercase py-4 px-8 textCursor'>
                        <span className='group-hover:mr-4 transition-[margin]'>Get Started</span>
                    </a>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default GetInTouch