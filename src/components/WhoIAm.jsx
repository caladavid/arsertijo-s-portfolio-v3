import Wrapper from "./Wrapper";
import TextMask from "./TextMask"

const WhoIAm = () => {
    const title = ["Who Am I?"];
    const pPhrases = ["I'm Ángel aka Arsertijo a Graphic designer for social media with a passion for language learning. Experienced in creating visually compelling content for social media, platforms, including Facebook, Instagram, and Twitter. Skilled in Adobe Creative Suite and independent user in English. Passionate about using design to communicate, ideas and connect with diverse audiences."];

  return (
    <div id="about" className="w-full min-h-max py-10 md:pb-20 relative">
        <Wrapper>
            <div>
                <div className="break-words font-bold text-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl my-10 md:my-20">
                    <TextMask phrases={title} elementType="h2" customClass="pb-4"/> 
                </div>
                <div className="lg:text-3xl mt-8 lg:leading-loose text-xl w-full">
                    <TextMask phrases={pPhrases} elementType="p"/>
                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default WhoIAm