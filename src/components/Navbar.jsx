import React, { useEffect, useState } from 'react'
import useDarkMode from '../hook/useDarkMode'
import sun from './../assets/sun.svg'
import logoblack from './../assets/dark.png'
import logowhite from './../assets/light.png'
import moon from './../assets/moon.svg'
import { Sling as Hamburger } from 'hamburger-react'

function Navbar() {
    const [colorTheme, setColorTheme] = useDarkMode()
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <div className='flex bg-b justify-between py-[1.6rem] px-[2.8rem] items-center'>
                {colorTheme === "dark" ? <img src={logowhite} className="h-[2.2rem] w-[8.4rem] " /> : <img src={logoblack} className="h-[2.2rem] w-[8.4rem] " />}
                <ul className='flex  font-[300]  text-black dark:text-white dark:font-[200] text-[1em] gap-[5rem] tm:hidden sm:hidden md:gap-[3rem] lg:gap-4rem '>
                    <a className="tracking-wide hover:after:bg-black dark:hover:after:bg-yellow-300 transition duration-1000">About Me</a>
                    <a className="tracking-wide hover:after:bg-black dark:hover:after:bg-yellow-300 transition duration-1000">Contact</a>
                    <a className="tracking-wider hover:after:bg-black dark:hover:after:bg-yellow-300 transition duration-1000">Experience</a>
                    <a className="tracking-wider hover:after:bg-black dark:hover:after:bg-yellow-300 transition duration-1000">Testimonial</a>
                </ul>
                <div className='flex  '>
                    <div className="hidden tm:h-[40px] tm:flex items-center sm:flex sm:h-[40px] ">
                        <Hamburger rounded size={30} duration={0.8} color={colorTheme === "light" ? "#FFFFFF" : "#000000"} toggled={isOpen} toggle={setOpen} />
                    </div>
                    <img src={colorTheme === "light" ? sun : moon} className="" onClick={() => setColorTheme(colorTheme)} />
                </div>
            </div>
            {isOpen && <div id='abc' className='bg-white text-black h-auto'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nulla.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nulla.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nulla.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nulla.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nulla.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nulla.</p>
            </div>}
        </>
    )
}

export default Navbar