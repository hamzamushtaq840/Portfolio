import React, { useEffect, useRef } from 'react'
import hamza from './../assets/div.png'
import fb from './../assets/fb.svg'
import linkedin from './../assets/linkedin.svg'
import inst from './../assets/inst.svg'
import github from './../assets/github.svg'
import Typed from 'react-typed';
import Tilt from '../utils/Tilt'
import { motion } from "framer-motion"
import { Fade, Slide, Bounce } from 'react-reveal'

function AboutMe() {
    const options = {
        speed: 1000,
        max: 30,
        reverse: 'true'
    };

    const boxStyle = {
        visible: {
            x: 0,
            opacity: 1,
            transition: { delay: 0.2, duration: 1 },

        },
        hidden: {
            x: 500,
            opacity: 0,
        },
    };
    const boxStyle2 = {
        visible: {
            x: 0,
            opacity: 1,
            transition: { delay: 0.2, duration: 1 },

        },
        hidden: {
            x: -200,
            opacity: 0,
        },
    };
    const boxStyle3 = {
        visible: {
            x: 0,
            opacity: 1,
            transition: { delay: 0.6, duration: 1 },

        },
        hidden: {
            x: -500,
            opacity: 0,
        },
    };
    const boxStyle4 = {
        visible: {
            x: 0,
            opacity: 1,
            transition: { delay: 0.8, duration: 1 },

        },
        hidden: {
            x: -300,
            opacity: 0,
        },
    };
    const boxStyle5 = {
        visible: {
            x: 0,
            opacity: 1,
            transition: { delay: 0.8, duration: 1.1 },

        },
        hidden: {
            x: -1000,
            opacity: 0,
        },
    };

    return (
        <div className='flex mt-10 pl-[4rem] pr-[2rem] py-[2rem] justify-between tm:flex-col sm:flex-col  sm:px-[1.5rem] sm:mt-0'>
            <Fade left>
                <div className='flex flex-col mt-[5rem] pt-10 item-center w-[70%] min-h-[58vh] tm:min-h-min tm:w-full tm:mt-[.5rem] sm:min-h-min sm:w-full sm:mt-[.5rem] sm:pt-0 tm:pt-0'>
                    <h1 variants={boxStyle2}
                        animate='visible'
                        initial='hidden' className='font-[200] text-[2rem] md:text-[1.7rem] tm:text-[2rem] sm:text-[1.6rem]' >Hello,</h1>
                    <h1 variants={boxStyle3}
                        animate='visible'
                        initial='hidden' className='font-[800] text-[3rem] text-yellow-400 mt-[-10px] lg:text-[2.4rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1.8rem]'>I'm Hamza Mushtaq</h1>
                    <div variants={boxStyle4}
                        animate='visible'
                        initial='hidden' >
                        <Typed
                            className='font-[400] text-[1.3rem] mb-2 sm:text-[1rem]'
                            strings={["MERN DEVELOPER", "PHOTOGRAPHER"]}
                            typeSpeed={80}
                            backSpeed={40}
                            loop
                        />
                    </div>
                    <br />
                    <p variants={boxStyle5}
                        animate='visible'
                        initial='hidden' className='leading-loose font-[300] mt-[-10px] text-[1rem] w-[90%] lg:w-[70%] md:w-[65%] tm:w-full sm:w-full sm:text-[.9rem] sm:mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error non neque, in quis a, aperiam amet inventore deserunt ullam consequuntur culpa molestias corrupti nobis esse quidem optio est quae. Nobis.</p>
                </div>
            </Fade>

            <div className='flex justify-end pr-10 sm:justify-between sm:pr-0 sm:flex-col'>
                <Bounce bottom>
                    <Tilt className="box" options={options} >
                        <div variants={boxStyle}
                            animate='visible'
                            initial='hidden' className='h-full mr-5 pt-6 justify-end  flex items-center sm:mr-0 sm:justify-center'>
                            <img src={hamza} className="h-[80%] min-h-[250px] min-w-[250px] rounded-lg lg:h-[70%] md:h-[70%] tm:h-[360px] tm:mt-10 sm:h-[300px] sm:mt-5" />
                        </div>
                    </Tilt>
                </Bounce>

                <div className='flex items-center gap-4 flex-col mt-[0] justify-center pt-[25%] sm:flex-row sm:pt-5'>
                    <a href=""><img src={fb} className="cursor-pointer h-[30px] min-h-[30px] min-w-[30px]" /></a>
                    <a href=""><img src={inst} className="cursor-pointer h-[36px]" /></a>
                    <a href=""><img src={linkedin} className="cursor-pointer h-[35px]" /></a>
                    <a href=""><img src={github} className="cursor-pointer h-[31px]" /></a>
                </div>
            </div>

        </div >
    )
}

export default AboutMe