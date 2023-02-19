import React from 'react'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import dummy from './../assets/dummy.png'
import square from './../assets/square.svg'
import circle from './../assets/circle.svg'
import star from './../assets/star.svg'
import triangle from './../assets/triangle.svg'
import github from './../assets/github.svg'


function Projects() {
    return (
        <div id='projects' className='p-[3rem] py-[3rem] sm:px-[1.25rem] sm:py-[-15px] '>
            <Slide left>
                <div >
                    <h1 className='w-[25rem] tracking-wider font-[600] text-[2rem] lg:text-[2rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1.8rem] sm:mb-4 sm:w-[100%]'>Projects</h1>
                </div>
            </Slide>

            <div className='flex gap-5 mt-8 tm:flex-col-reverse tm:items-center sm:flex-col-reverse'>
                <Fade left>
                    <div className='relative w-[60%] flex justify-between items-center tm:justify-center sm:justify-start tm:w-[100%] sm:w-[100%]'>

                        <div className=' gap-2 flex flex-col '>
                            <h1 className='text-[1.3rem] mb-2 sm:text-[1rem] '>E-Testing Service</h1>
                            <p className='w-[500px]  font-[350] text-[1rem] leading-loose sm:text-[.9rem]  tm:text-[1rem] md:w-[100%] sm:w-[100%] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus expedita consectetur, quibusdam eveniet deleniti voluptates cupiditate laudantium praesentium saepe!</p>
                            <div className='flex gap-5 mt-7'>
                                <button className='bg-yellow-500 dark:bg-[#64644b] z-100 coursor-pointer text-white px-[1.6em] rounded-[4px]  py-[.8em] lg:text-[.8rem] sm:text-[.8rem]'>Demo</button>
                                <button className='px-[1.6em] coursor-pointer  rounded-[4px] flex justify-start items-center gap-1  py-[.8em] border-2 lg:text-[.8rem] sm:text-[.8rem]'><img src={github} className='w-[30px]' />Code</button>
                            </div>
                        </div>
                        <img src={square} className='top-1/2 opacity-20 dark:opacity-40 rotate-12 transform left-[60px] w-[200px]  -translate-y-1/2  absolute  ' />
                    </div>
                </Fade>
                <Fade right>
                    <img src={dummy} className="w-[40%] tm:w-[100%] tm:mb-10 sm:w-[100%]" />
                </Fade>
            </div>

            <div className='flex gap-5 mt-20 tm:flex-col tm:items-center sm:flex-col'>
                <Fade left>
                    <img src={dummy} className="w-[40%] tm:w-[100%] tm:mb-10 sm:w-[100%]" />
                </Fade>
                <Fade right>
                    <div className='relative w-[60%] flex justify-center items-center  sm:w-[100%]'>
                        <div className='  gap-2   flex flex-col '>
                            <h1 className='text-[1.3rem] mb-2 sm:text-[1rem] '>E-Testing Service</h1>
                            <p className='w-[500px]  font-[350] text-[1rem] leading-loose sm:text-[.9rem]  tm:text-[1rem] md:w-[100%] sm:w-[100%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus expedita consectetur, quibusdam eveniet deleniti voluptates cupiditate laudantium praesentium saepe!</p>
                            <div className='flex gap-5 mt-7'>
                                <button className='bg-yellow-500 dark:bg-[#64644b] z-100 coursor-pointer text-white px-[1.6em] rounded-[4px]  py-[.8em lg:text-[.8rem] sm:text-[.8rem]'>Demo</button>
                                <button className='px-[1.6em] coursor-pointer  rounded-[4px] flex justify-start items-center gap-1  py-[.8em] border-2 lg:text-[.8rem] sm:text-[.8rem]'><img src={github} className='w-[30px]' />Code</button>
                            </div>
                        </div>

                        <img src={triangle} className='top-1/2 z-10 opacity-20 dark:opacity-40 -rotate-12 transform left-[20%] w-[200px]  -translate-y-1/2  absolute  ' />
                    </div>
                </Fade>
            </div>

            <div className='flex gap-5 mt-8 tm:flex-col-reverse tm:items-center sm:flex-col-reverse'>
                <Fade left>
                    <div className='relative w-[60%] flex justify-between items-center tm:justify-center sm:justify-start tm:w-[100%] sm:w-[100%]'>

                        <div className=' gap-2 flex flex-col '>
                            <h1 className='text-[1.3rem] mb-2 sm:text-[1rem] '>E-Testing Service</h1>
                            <p className='w-[500px]  font-[350] text-[1rem] leading-loose sm:text-[.9rem]  tm:text-[1rem] md:w-[100%] sm:w-[100%] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus expedita consectetur, quibusdam eveniet deleniti voluptates cupiditate laudantium praesentium saepe!</p>
                            <div className='flex gap-5 mt-7'>
                                <button className='bg-yellow-500 dark:bg-[#64644b] z-100 coursor-pointer text-white px-[1.6em] rounded-[4px]  py-[.8em] lg:text-[.8rem] sm:text-[.8rem]'>Demo</button>
                                <button className='px-[1.6em] coursor-pointer  rounded-[4px] flex justify-start items-center gap-1  py-[.8em] border-2 lg:text-[.8rem] sm:text-[.8rem]'><img src={github} className='w-[30px]' />Code</button>
                            </div>
                        </div>
                        <img src={circle} className='top-1/2 opacity-20 dark:opacity-40 rotate-12 transform left-[60px] w-[180px]  -translate-y-1/2  absolute  ' />
                    </div>
                </Fade>
                <Fade right>
                    <img src={dummy} className="w-[40%] tm:w-[100%] tm:mb-10 sm:w-[100%]" />
                </Fade>
            </div>


            <div className='flex gap-5 mt-20 tm:flex-col tm:items-center sm:flex-col'>
                <Fade left>
                    <img src={dummy} className="w-[40%] tm:w-[100%] tm:mb-10 sm:w-[100%]" />
                </Fade>
                <Fade right>
                    <div className='relative w-[60%] flex justify-center items-center  sm:w-[100%]'>
                        <div className='  gap-2   flex flex-col '>
                            <h1 className='text-[1.3rem] mb-2 sm:text-[1rem] '>E-Testing Service</h1>
                            <p className='w-[500px]  font-[350] text-[1rem] leading-loose sm:text-[.9rem]  tm:text-[1rem] md:w-[100%] sm:w-[100%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus expedita consectetur, quibusdam eveniet deleniti voluptates cupiditate laudantium praesentium saepe!</p>
                            <div className='flex gap-5 mt-7'>
                                <button className='bg-yellow-500 dark:bg-[#64644b] z-100 coursor-pointer text-white px-[1.6em] rounded-[4px]  py-[.8em lg:text-[.8rem] sm:text-[.8rem]'>Demo</button>
                                <button className='px-[1.6em] coursor-pointer  rounded-[4px] flex justify-start items-center gap-1  py-[.8em] border-2 lg:text-[.8rem] sm:text-[.8rem]'><img src={github} className='w-[30px]' />Code</button>
                            </div>
                        </div>

                        <img src={star} className='top-1/2 z-10 opacity-20 dark:opacity-40 -rotate-12 transform left-[20%] w-[220px]  -translate-y-1/2  absolute  ' />
                    </div>
                </Fade>
            </div>

        </div>
    )
}

export default Projects