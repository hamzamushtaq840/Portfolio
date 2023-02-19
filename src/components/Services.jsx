import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Services() {
    const [startCountUp, setStartCountUp] = useState(false);
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            setStartCountUp(true);
        }
    }, [inView]);

    return (
        <div id="about" className="sm:flex sm:flex-col-reverse  ">
            <div ref={ref} >
                <Fade bottom>
                    <div className='mb-20 px-[3em] mt-[5em] flex justify-between mx-[3.5em] flex-wrap  text-white rounded-xl bg-yellow-500 min-h-[10rem] lg:px-[2em]  md:gap-y-1 tm:px-[1em] sm:mt-[1em] sm:px-[0.5em]  sm:mx-[1.4em] sm:mb-2'>
                        <div className='flex flex-col gap-1 justify-center items-center text-[1.4rem] lg:text-[1.1rem] md:min-w-[50%] tm:text-[1rem] tm:min-w-[50%] sm:min-w-[50%] sm:text-[0.8rem]'>
                            <span className='font-[800] text-[2rem] lg:text-[1.8rem] tm:text-[1.6rem] sm:text-[1.4rem]'>  {startCountUp && <CountUp duration={1.5} end={36} />}+</span>
                            <h1 className='font-[600]'>Projects Completed</h1>
                        </div>
                        <div className='flex flex-col gap-1 justify-center items-center text-[1.4rem] min-h-[7rem] lg:text-[1.1rem] md:min-w-[50%] tm:text-[1rem] tm:min-w-[50%] sm:min-w-[50%] sm:text-[0.8rem]'>
                            <span className='font-[800] text-[2rem]  lg:text-[1.8rem] tm:text-[1.6rem] sm:text-[1.4rem]'>{startCountUp && <CountUp duration={2} end={500} />}+</span>
                            <h1 className='font-[600]'>Community Network</h1>
                        </div>
                        <div className='flex flex-col gap-1 justify-center items-center text-[1.4rem] min-h-[7rem] lg:text-[1.1rem] md:min-w-[50%] tm:text-[1rem] tm:min-w-[50%] sm:min-w-[50%] sm:text-[0.8rem]'>
                            <span className='font-[800] text-[2rem]  lg:text-[1.8rem] tm:text-[1.6rem] sm:text-[1.4rem]'>{startCountUp && <CountUp duration={1.5} end={16} />}+</span>
                            <h1 className='font-[600]'>Contract Remote</h1>
                        </div>
                        <div className='flex flex-col gap-1 justify-center items-center text-[1.4rem] min-h-[7rem] lg:text-[1.1rem] md:min-w-[50%] tm:text-[1rem] tm:min-w-[50%] sm:min-w-[50%] sm:text-[0.8rem]'>
                            <span className='font-[800] text-[2rem]  lg:text-[1.8rem] tm:text-[1.6rem] sm:text-[1.4rem]'>2+</span>
                            <h1 className='font-[600]'>Years Experience</h1>
                        </div>

                    </div>
                </Fade>
            </div>
            <div className='flex justify-between p-[4rem] py-[4rem] tm:flex-col sm:flex-col sm:px-[1.5rem] tm:py-[0rem] sm:py-5'>
                <Fade left>
                    <h1 className='w-[25rem] tracking-wider font-[600] text-[2rem] lg:text-[2rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1.8rem] sm:mb-4 sm:w-[100%]'>What Can I Do For Your Needs ?</h1>
                </Fade>
                <Fade right>
                    <p className=' pr-[0rem] font-[350] w-[32rem] dark:text-white-200 text-[1rem] leading-loose sm:text-[.9rem] sm:w-[100%] tm:text-[1rem] tm:w-[100%] tm:mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae harum at, accusantium debitis pariatur quibusdam vero eveniet nulla ipsam repellat provident corrupti assumenda ducimus excepturi soluta maiores deleniti sapiente quidem doloremque eius dignissimos iure? Vero corrupti dolores eum dolore! Facere reprehenderit odio consequatur aut! Libero mollitia ad id hic placeat.</p>
                </Fade>
            </div>

        </div>
    )
}

export default Services