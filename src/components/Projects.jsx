import React from 'react'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import natick from './../assets/natick.png'
import royal from './../assets/royal.png'
import etest from './../assets/etest.png'
import rent from './../assets/rent.png'
import square from './../assets/square.svg'
import circle from './../assets/circle.svg'
import star from './../assets/star.svg'
import triangle from './../assets/triangle.svg'
import github from './../assets/github.svg'
import { toast } from 'react-toastify';

function Projects() {
    return (
        <div id='projects' className=' p-[4rem] py-[3rem] mt-10 sm:mt-0 sm:px-[1.25rem] sm:py-[-15px] '>
            <Slide left>
                <div >
                    <h1 className='w-[25rem] mb-4 tracking-wider font-[600] text-[2rem] lg:text-[2rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1.8rem] sm:mb-4 sm:w-[100%]'>Latest Projects</h1>
                </div>
            </Slide>

            <div className='flex gap-5 mt-14 tm:flex-col-reverse tm:items-center sm:flex-col-reverse'>
                <Fade left>
                    <div className='relative w-[60%] flex justify-between items-center  sm:justify-start tm:w-[100%] sm:w-[100%]'>

                        <div className=' gap-2 flex flex-col '>
                            <h1 className='text-[1.3rem] mb-2 sm:text-[1rem] '>Wheels2Go</h1>
                            <p className='w-[500px]  tm:w-full font-[350] text-[1rem] leading-loose sm:text-[.9rem]  text-justify tm:text-[1rem] md:w-[100%] sm:w-[100%] '>Created a modern and responsive website that enables users to easily rent a car online. The website features an intuitive and user-friendly interface that guides users through the car rental process, from selecting the car to checking out.</p>
                            <div className='flex gap-5 mt-7'>
                                <a href='https://clinquant-stroopwafel-91b8f0.netlify.app' target="_blank" className='flex items-center bg-yellow-500 dark:bg-[#64644b] z-100 coursor-pointer text-white px-[1.6em] rounded-[4px]  py-[.8em] lg:text-[.8rem] sm:text-[.8rem]'>Demo</a>
                                <a href='https://github.com/hamzamushtaq840/Wheels2Go' target="_blank" className='px-[1.6em] coursor-pointer  rounded-[4px] flex justify-start items-center gap-1  py-[.8em] border-2 lg:text-[.8rem] sm:text-[.8rem]'><img src={github} className='w-[30px]' />Code</a>
                            </div>
                        </div>
                        <img src={square} className='top-1/2 opacity-10 dark:opacity-40 rotate-12 transform left-[60px] w-[200px]  -translate-y-1/2  absolute  ' />
                    </div>
                </Fade>
                <Fade right>
                    <img src={rent} className="rounded-[10px] w-[45%] tm:w-[100%] tm:mb-10 sm:w-[100%]" />
                </Fade>
            </div>

            <div className='flex gap-5 mt-28 mb-28 sm:my-16  tm:flex-col tm:items-center sm:flex-col'>
                <Fade left>
                    <img src={royal} className="rounded-[10px] w-[45%] tm:w-[100%] tm:mb-10 sm:w-[100%]" />
                </Fade>
                <Fade right>
                    <div className='relative w-[60%]  flex justify-end items-center  tm:w-[100%] tm:justify-start sm:w-[100%]'>
                        <div className='gap-2  flex flex-col '>
                            <h1 className='text-[1.3rem] mb-2 sm:text-[1rem]'>Royal Book</h1>
                            <p className='w-[500px] tm:w-full text-justify font-[350] text-[1rem] leading-loose sm:text-[.9rem]  tm:text-[1rem]  md:w-[100%] sm:w-[100%]'>Created a user-friendly platform that enables users to book barbers online. The website features a modern and responsive design, with a simple and intuitive user interface that makes booking tailors easy.</p>
                            <div className='flex gap-5 mt-7'>
                                <button onClick={() => toast.error("Private due to client policy", { position: toast.POSITION.TOP_RIGHT })} className='bg-yellow-500 flex items-center dark:bg-[#64644b] z-100 coursor-pointer text-white px-[1.6em] rounded-[4px]  py-[.8em lg:text-[.8rem] sm:text-[.8rem]'>Demo</button>
                                <a href='https://zippy-beijinho-98c718.netlify.app' target="_blank" className='px-[1.6em] coursor-pointer  rounded-[4px] flex justify-start items-center gap-1  py-[.8em] border-2 lg:text-[.8rem] sm:text-[.8rem]'><img src={github} className='w-[30px]' />Code</a>
                            </div>
                        </div>

                        <img src={triangle} className='top-1/2 z-10 opacity-10 dark:opacity-40 -rotate-12 transform left-[40%] w-[200px] tm:left-[10%] sm:left-[10%]   -translate-y-1/2  absolute  ' />
                    </div>
                </Fade>
            </div>

            <div className='flex gap-5 tm:flex-col-reverse tm:items-center sm:flex-col-reverse'>
                <Fade left>
                    <div className='relative w-[60%] flex justify-between items-center  sm:justify-start tm:w-[100%] sm:w-[100%]'>

                        <div className=' gap-2 flex flex-col '>
                            <h1 className='text-[1.3rem] mb-2 sm:text-[1rem] '>Natick Travel</h1>
                            <p className='w-[500px]  tm:w-full font-[350] text-[1rem] leading-loose sm:text-[.9rem]  tm:text-[1rem] md:w-[100%]  text-justify sm:w-[100%] '>I created a user-friendly platform that enables users to easily book a travel car with a guide. The website features a modern and responsive design, with a simple and intuitive user interface that makes booking travel agent easy.</p>
                            <div className='flex gap-5 mt-7'>
                                <a href='https://zesty-semolina-e390cb.netlify.app' target="_blank" className='flex items-center bg-yellow-500 dark:bg-[#64644b] z-100 coursor-pointer text-white px-[1.6em] rounded-[4px]  py-[.8em] lg:text-[.8rem] sm:text-[.8rem]'>Demo</a>
                                <a href='https://github.com/hamzamushtaq840/natick-travel' target="_blank" className='px-[1.6em] coursor-pointer  rounded-[4px] flex justify-start items-center gap-1  py-[.8em] border-2 lg:text-[.8rem] sm:text-[.8rem]'><img src={github} className='w-[30px]' />Code</a>
                            </div>
                        </div>
                        <img src={circle} className='top-1/2 opacity-10 dark:opacity-40 rotate-12 transform left-[60px] w-[180px]  -translate-y-1/2  absolute  ' />
                    </div>
                </Fade>
                <Fade right>
                    <img src={natick} className="rounded-[10px] w-[45%] tm:w-[100%] tm:mb-10 sm:w-[100%]" />
                </Fade>
            </div>


            <div className='flex gap-5 mt-28 sm:mt-16 tm:flex-col tm:items-center sm:flex-col'>
                <Fade left>
                    <img src={etest} className="rounded-[10px] w-[45%] tm:w-[100%] tm:mb-10 sm:w-[100%]" />
                </Fade>
                <Fade right>
                    <div className='relative w-[60%] flex justify-end items-center  tm:w-[100%] tm:justify-start sm:w-[100%]'>
                        <div className='  gap-2   flex flex-col '>
                            <h1 className='text-[1.3rem] mb-2 sm:text-[1rem] '>E-Testing Service </h1>
                            <p className='w-[500px] tm:w-full  font-[350] text-[1rem] leading-loose sm:text-[.9rem]  tm:text-[1rem] md:w-[100%] sm:w-[100%] text-justify'>I created a Learning Management System (LMS) that features real-time notification, natural language processing (NLP) question generation and checking, and voice-to-text answering. The website is designed to facilitate online testing and evaluation for students and educators.</p>
                            <div className='flex gap-5 mt-7'>
                                <button onClick={() => toast.error("To be Deployed", { position: toast.POSITION.TOP_RIGHT })} className='flex items-center bg-yellow-500 dark:bg-[#64644b] z-100 coursor-pointer text-white px-[1.6em] rounded-[4px]  py-[.8em lg:text-[.8rem] sm:text-[.8rem]'>Demo</button>
                                <a href='https://github.com/hamzamushtaq840/e-testing-service-client' target="_blank" className='px-[1.6em] coursor-pointer  rounded-[4px] flex justify-start items-center gap-1  py-[.8em] border-2 lg:text-[.8rem] sm:text-[.8rem]'><img src={github} className='w-[30px]' />Code</a>
                            </div>
                        </div>

                        <img src={star} className='top-1/2 z-10 opacity-10 dark:opacity-40 rotate-12 transform left-[40%] tm:left-[10%] sm:left-[10%] w-[220px]  -translate-y-1/2  absolute  ' />
                    </div>
                </Fade>
            </div>

        </div>
    )
}

export default Projects