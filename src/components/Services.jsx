import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Fade from 'react-reveal/Fade';

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
                    <div className='mb-20 px-[2em] py-[35px] mt-[3.3em] flex justify-between mx-[3.5em] flex-wrap  text-white rounded-xl bg-yellow-500 min-h-[10rem] lg:px-[2em] md:mt:[5rem] md:gap-y-1 tm:px-[1em] sm:mt-[1em] sm:px-[0.5em]  sm:mx-[1.4em] sm:mb-2'>
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
            <div className='flex flex-col justify-between p-[4rem] py-[1rem] tm:flex-col sm:flex-col sm:px-[1.5rem] tm:py-[0rem] sm:py-5'>
                <Fade bottom>
                    <h1 className=' mb-10 tracking-wider font-[600] text-[2rem] lg:text-[2rem] md:text-[2rem] tm:text-[2.5rem] tm:mb-2  tm:w-[30rem] sm:text-[1.8rem] sm:mb-4 sm:w-[100%]'>What Can I Do For Your Needs ?</h1>
                </Fade>
                <Fade bottom>
                    <p className=' pr-[0rem] font-[350] w-[100%] dark:text-white-200 text-[1rem] leading-loose sm:text-[.9rem] sm:w-[100%] tm:text-[1rem] tm:w-[100%] tm:mt-5'>As a MERN developer, I can provide a range of services to fulfill your web application needs. I can design and develop user-friendly interfaces, implement complex server-side logic, and optimize your application for optimal performance. I can ensure that your web application is built with the latest and most efficient technologies. Additionally, I can optimize your application's performance by minimizing load times, reducing latency, and improving overall user experience. Let me help you create a robust and optimized web application that meets your specific needs!</p>
                </Fade>
            </div>

        </div>
    )
}

export default Services