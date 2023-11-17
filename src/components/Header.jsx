"use client"
import Link from "next/link"
import Logo from "../../public/assets/svgs/Logo"
import Nav from "./Nav";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const isHomePage = pathName === "/";
  const [isActive, setIsActive] = useState(false);
  const [sticky, setSticky] = useState(false);

  const close = () => setIsActive(false);

  useEffect(() => {
    const handleScroll = () => {
        setSticky(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className="overflow-hidden">
      <nav className="w-11/12 xl:w-4/5 mx-auto px-5 py-5 md:px-10 absolute left-5 sm:left-10 right-10 top-10 flex justify-between items-center z-[1] ">
        <Link  
          href="/"
          className="flex justify-start"
          aria-label="Logo"
          >
          <Logo width={50} fill={isHomePage ? `#FFFF` : `#1366DE`}/>
        </Link>
        
          <motion.button
              onClick={() => setIsActive(!isActive)} aria-label="Menu"
              className={` ${sticky ? "hidden" : "flex"} md:hidden  justify-center items-center  right-0 w-8 h-8 rounded-[50%] bg-blueArs p-8  z-[3]`}
            >
              <span className={`${isActive ? 'burgerActive' : ''} burger `} ></span>
          </motion.button>

        <AnimatePresence mode="wait">
          {
            sticky && <motion.button
            onClick={() => setIsActive(!isActive)} aria-label="Menu"
            className={`${sticky ? "fixed mr-8 xl:mr-[11%] " : "hidden"} flex justify-center items-center right-0 w-8 h-8 rounded-[50%] bg-blueArs p-8 z-[3]`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className={`${isActive ? 'burgerActive' : ''} burger `} ></span>
        </motion.button>
          }
          
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isActive && <Nav close={close}/>}
        </AnimatePresence>

        <ul className={`${isHomePage ? `bg-white ` : `bg-black text-white` } hidden md:flex px-4 py-5 gap-4 rounded-full`}>
          <li className="my-auto"><Link className="hover:bg-blueArs hover:text-white py-3 px-4 hover:rounded-full transitionModalText" href="/works">Works</Link></li>
          <li className="my-auto">
            <a 
              href="/#about"
              className="hover:bg-blueArs hover:text-white py-3 px-4 hover:rounded-full transitionModalText" 
            >
              About me
            </a>
          </li>
          <li className="my-auto">
            <a 
              href='mailto:angeluniempleo@hotmail.com'
              className="hover:bg-blueArs hover:text-white py-3 px-4 hover:rounded-full transitionModalText" 
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header