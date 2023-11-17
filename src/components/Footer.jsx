"use client"
import Wrapper from './Wrapper'
import ArrowUp from "../../public/assets/svgs/ArrowUp"
import { usePathname} from 'next/navigation'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const pathName = usePathname()
  const isHomePage = pathName === "/";

  return (
    <div  className={`${isHomePage ? ` bg-black text-white` : " bg-{#f2f2f2}"} pt-4 md:pt-10 lg:pt-20`}>
      <Wrapper>
        <div id='contact' className='w-full min-[750px]:grid grid-cols-2 min-[1120px]:grid-cols-3 text-base py-14 border-t-[1px] border-gray items-center'>
            <div className='flex justify-center min-[750px]:justify-start break-words'>
              <p>&copy; {currentYear} Arsertijo. All Rights Reserved.</p> 
            </div>
            <div className='flex min-[371px]:justify-center flex-wrap min-[750px]:justify-end min-[1120px]:justify-center gap-x-4 break-words'>
              <a href="https://www.behance.net/arsertijo" target="_blank" rel="noopener noreferrer" aria-label='Behance Link' className='hover:text-blueArs transition-all'>Behance</a>
              <a href="https://www.instagram.com/arsertijo_artz/" target="_blank" rel="noopener noreferrer" aria-label='Instagram Link' className='hover:text-blueArs transition-all'>Instagram</a>
            </div>

            <div className='flex min-[1120px]:justify-end min-[750px]:justify-start min-[371px]:justify-center'>
              <a 
                href="#" 
                aria-label='Back to top'
                className='flex items-center gap-4 break-words group'
              >
                  <span className="group-hover:text-blueArs transition-all">Back to top</span>
                  <ArrowUp fill={`${isHomePage ? `#FFFF` : ``}`} className="group-hover:fill-[#1366DE] transition-all h-8 lg:h-10 xl:h-12">Back to top</ArrowUp>
              </a>
            </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Footer