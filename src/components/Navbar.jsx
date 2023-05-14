import { AnimatePresence, motion } from "framer-motion"
import { Spin as Hamburger } from 'hamburger-react'
import React, { useState } from 'react'
import useDarkMode from '../hook/useDarkMode'
import logoblack from './../assets/dark.png'
import logowhite from './../assets/light.png'
import moon from './../assets/moon.svg'
import sun from './../assets/sun.svg'

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
            transition: { delay: 0, duration: 0.2, when: "beforeChildren", staggerChildren: 0.2, },

        },
        hidden: {
            height: 0,
            opacity: 0,
            transition: { delay: 0 },
        },
        exit: {
            height: 0,
            opacity: 0,
            transition: { duration: 0.1, delay: 0, when: "afterChildren", staggerChildren: 0.2, },
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
            transition: { duration: 0.1 }
        }
    }

    return (
        <>
            <div className='flex mt-[-2px] justify-between py-[2rem] pl-[4rem] pr-[3.5rem] sm:px-[1.5rem] items-center'>
                {colorTheme === "dark" ? <img src={logowhite} alt="logo" className="h-[2.0833333333333335vw] min-h-[35px] w-[7.8125vw] min-w-[134px] sm:h-[1.8rem] sm:w-[7rem]" /> : <img src={logoblack} className="h-[2.0833333333333335vw] min-h-[35px] w-[7.8125vw] min-w-[134px] sm:h-[1.8rem] sm:w-[7rem]" />}
                <ul className='flex font-[400]  text-black dark:text-white dark:font-[300] text-custom-20 gap-[5rem] tm:hidden sm:hidden md:gap-[3rem] lg:gap-4rem '>
                    <a className="tracking-wide hover:after:bg-black dark:hover:after:bg-yellow-300 font-[400]" onClick={() => scrollToComponent('about')}>About Me</a>
                    <a className="tracking-wider hover:after:bg-black dark:hover:after:bg-yellow-300 font-[400]" onClick={() => scrollToComponent('experience')}>Experience</a>
                    <a className="tracking-wide hover:after:bg-black dark:hover:after:bg-yellow-300 font-[400]" onClick={() => scrollToComponent('projects')}>Projects    </a>
                    <a className="tracking-wider hover:after:bg-black dark:hover:after:bg-yellow-300 font-[400]" onClick={() => scrollToComponent('testimonial')}>Testimonials</a>
                </ul>
                <div className='flex  '>
                    <div className="hidden tm:h-[40px] tm:flex items-center sm:flex sm:h-[40px] ">
                        <Hamburger rounded size={30} duration={0.8} color={colorTheme === "light" ? "#FFFFFF" : "#000000"} toggled={isOpen} toggle={setOpen} />
                    </div>
                    <img src={colorTheme === "light" ? sun : moon} alt="mode" className="cursor-pointer h-[2.6041666666666665vw] min-h-[40px] min-w-[40px] w-[2.6041666666666665vw]" onClick={() => setColorTheme(colorTheme)} />
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
                        className=' flex flex-col items-center  bg-[#e4e1e17a] dark:bg-[#343541]'>
                        <motion.p variants={listStyle} onClick={() => { scrollToComponent('about'); setOpen(false) }} className='w-full text-center p-[10px] hover:bg-[#a4a6bd13] dark:hover:bg-gray-700 cursor-pointer'>About Me</motion.p>
                        <motion.p variants={listStyle} onClick={() => { scrollToComponent('experience'); setOpen(false) }} className='w-full text-center p-[10px] hover:bg-[#a4a6bd13] dark:hover:bg-gray-700 cursor-pointer'>Experience</motion.p>
                        <motion.p variants={listStyle} onClick={() => { scrollToComponent('projects'); setOpen(false) }} className='w-full text-center p-[10px] hover:bg-[#a4a6bd13] dark:hover:bg-gray-700 cursor-pointer'>Projects</motion.p>
                        <motion.p variants={listStyle} onClick={() => { scrollToComponent('testimonial'); setOpen(false) }} className='w-full text-center p-[10px] hover:bg-[#a4a6bd13] dark:hover:bg-gray-700 cursor-pointer'>Testimonials</motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar