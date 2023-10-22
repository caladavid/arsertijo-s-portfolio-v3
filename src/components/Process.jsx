import ProcessCard from "./ProcessCard";
import TextMask from "./TextMask";
import Wrapper from "./Wrapper";

const Process = () => {
    const title = ["Process"];
    
  return (
    <div className='w-full'>
         <Wrapper>
            <div className="break-words font-bold text-black  text-4xl sm:text-6xl md:text-7xl lg:text-8xl my-10 md:my-20">
              <TextMask phrases={title} elementType="h2"/> 
            </div>

            <div>
                
                <ProcessCard 
                    number="01."
                    title="Brief"
                    desc="Clients briefs us of what they want and need. Project timelines are being as well."
                />
                
                <ProcessCard 
                    number="02."
                    title="Research"
                    desc="Research and project investigation, business goals, areas of opp opportunities and improvements, mood boards, visual references."
                />
                
                <ProcessCard 
                    number="03."
                    title="Client Review"
                    desc="I present sketches to client. The Client may wish to change elements."
                />
                
                <ProcessCard 
                    number="04."
                    title="Visual Style"
                    desc="A few concepts of general style, after visual style is confirmed I apply it to the rest of the project."
                />
                
                <ProcessCard 
                    number="05."
                    title="Production"
                    desc="A few concepts of general style, after visual style is confirmed I apply it to the rest of the project."
                />
                
                <ProcessCard 
                    number="06."
                    title="Delivery"
                    desc="That's it! now it's time party and celebrate."
                />

            </div>

        </Wrapper>
  </div>
  )
}

export default Process