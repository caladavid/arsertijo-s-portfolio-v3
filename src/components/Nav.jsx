import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";
import LinkNav from "./LinkNav";
import { motion } from "framer-motion";
import { menuSlide } from "../app/animation/Animation";
import Curve from "./Curve";

const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Work",
        href: "/works",
    },
    {
        title: "About me",
        href: "/#about",
    },
    {
        title: "Contact",
        href: "/#contact",
    },
];

const Nav = ({ close }) => {
    const pathName = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathName);
    const isWorkRoute = pathName.startsWith("/works");
    
    const handleScroll = () => {
        if (window.scrollY > window.innerHeight) {
            // Si el scroll es mayor que la altura de la ventana, cierra el menú
            close();
        }
    };

    // Agregar un listener de scroll cuando el componente se monta
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // Remover el listener cuando el componente se desmonta
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.div
            className="h-screen w-screen sm:w-4/5 md:w-3/5 lg:w-2/5 2xl:w-1/4 fixed right-0 top-0 px-8 pt-14 bg-blueArs text-white"
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            <div>
                <div onMouseLeave={() => { setSelectedIndicator(pathName) }}
                    className="flex flex-col gap-8 mt-20 ml-10 text-3xl"
                >
                    {
                        navItems.map((data, index) => {
                            return <LinkNav
                                key={index}
                                data={{ ...data, index }}
                                isActive={selectedIndicator == data.href || (isWorkRoute && data.href === "/works")}
                                setSelectedIndicator={setSelectedIndicator}
                                onClick={close}
                                variants={menuSlide}
                                exit="exit"
                            >
                            </LinkNav>
                        })
                    }
                </div>
            </div>
            <Curve />
        </motion.div>
    )
}

export default Nav