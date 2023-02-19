import React, { useState } from 'react'
import useDarkMode from '../hook/useDarkMode'
import sun from './../assets/sun.svg'
import logoblack from './../assets/dark.png'
import logowhite from './../assets/light.png'
import moon from './../assets/moon.svg'
import { Spin as Hamburger } from 'hamburger-react'
import { AnimatePresence, motion } from "framer-motion"


function Navbar() {
    const [colorTheme, setColorTheme] = useDarkMode()
    const [isOpen, setOpen] = useState(false)

    const scrollToComponent = (componentId) => {
        const component = document.getElementById(componentId);
        if (component) {
            component.scrollIntoView({
                behavior: 'smooth',
                duration: 2000,
                block: 'start',
                inline: 'nearest'
            });
        }
    }

    const boxStyle = {
        visible: {
            height: 'auto',
            opacity: 1,
            transition: { delay: 0.3, when: "beforeChildren", staggerChildren: 0.2, },

        },
        hidden: {
            height: 0,
            opacity: 0,
            transition: { delay: 0 },
        },
        exit: {
            height: 0,
            opacity: 0,
            transition: { duration: 0.3, delay: 0.2, when: "afterChildren", staggerChildren: 0.2, },
        },
    };

    const listStyle = {
        visible: {
            y: 0,
            opacity: 1,
        },
        hidden:
        {
            y: 0,
            opacity: 0,
        },
        exit:
        {
            x: 0,
            opacity: 0,
            transition: { duration: 0.3 }
        }
    }

    return (
        <>
            <div className='flex  mt-[-2px] justify-between py-[1.6rem] px-[2.8rem] sm:px-[1.5rem] items-center'>
                {colorTheme === "dark" ? <img src={logowhite} className="h-[2.2rem] w-[8.4rem] sm:h-[1.8rem] sm:w-[7rem]" /> : <img src={logoblack} className="h-[2.2rem] w-[8.4rem] sm:h-[1.8rem] sm:w-[7rem]" />}
                <ul className='flex font-[400]  text-black dark:text-white dark:font-[200] text-[1em] gap-[5rem] tm:hidden sm:hidden md:gap-[3rem] lg:gap-4rem '>
                    <a className="tracking-wide hover:after:bg-black dark:hover:after:bg-yellow-300 " onClick={() => scrollToComponent('about')}>About Me</a>
                    <a className="tracking-wider hover:after:bg-black dark:hover:after:bg-yellow-300 " onClick={() => scrollToComponent('experience')}>Experience</a>
                    <a className="tracking-wide hover:after:bg-black dark:hover:after:bg-yellow-300 " onClick={() => scrollToComponent('projects')}>Projects</a>
                    {/* <a className="tracking-wider hover:after:bg-black dark:hover:after:bg-yellow-300 ">Testimonial</a> */}
                    <a className="tracking-wide hover:after:bg-black dark:hover:after:bg-yellow-300 ">Contact</a>
                </ul>
                <div className='flex  '>
                    <div className="hidden tm:h-[40px] tm:flex items-center sm:flex sm:h-[40px] ">
                        <Hamburger rounded size={30} duration={0.8} color={colorTheme === "light" ? "#FFFFFF" : "#000000"} toggled={isOpen} toggle={setOpen} />
                    </div>
                    <img src={colorTheme === "light" ? sun : moon} className="cursor-pointer" onClick={() => setColorTheme(colorTheme)} />
                </div>
            </div>
            <AnimatePresence className="">
                {isOpen && (
                    <motion.div
                        id='subNavbar'
                        variants={boxStyle}
                        animate='visible'
                        initial='hidden'
                        exit='exit'
                        className='text-black mx-[0.1rem] bg-white dark:text-white'
                    >
                        <motion.p variants={listStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nulla.</motion.p>
                        <motion.p variants={listStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nulla.</motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar