import React from 'react';
import Fade from 'react-reveal/Fade';
import { toast } from 'react-toastify';
import etest from './../assets/etest.png';
import natick from './../assets/natick.png';
import gaming from './../assets/gaming.png';
import github from './../assets/github.svg';
import fleadisc from './../assets/fleadisc.png';

function Projects() {
    return (
        <div id='projects' className='p-[4rem] py-[3rem] mt-4 sm:mt-0 sm:px-[1.25rem] sm:py-[-15px] '>
            <Fade bottom>
                <div >
                    <h1 className='w-[25rem] mb-4 tracking-wider font-[600] text-[2rem] lg:text-[2rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1.8rem] sm:mb-4 sm:w-[100%]'>Latest Projects</h1>
                </div>
            </Fade>

            <div className='flex gap-5 mt-[150px] sm:mt-12 tm:mt-12 tm:flex-col-reverse tm:items-center sm:flex-col-reverse'>
                <Fade bottom>
                    <div className='relative w-[60%]  flex justify-between items-center  sm:justify-start tm:w-[100%] sm:w-[100%]'>
                        <div className=' gap-2 flex flex-col  w-full sm:mt-[10px] tm:mt-[10px]'>
                            <h1 className='text-[1.5rem] mb-2 sm:text-[1rem] font-[800] '>Natick Travel</h1>
                            <p className='w-full dark:text-[#ccc] pr-[16%] sm:pr-0 tm:pr-0  tm:w-full font-[350] text-custom-18 leading-loose sm:text-[.9rem] text-justify tm:text-[1rem] md:w-[100%] sm:w-[100%] '>Created a modern and responsive website that enables users to easily rent a car online. The website features an intuitive and user-friendly interface that guides users through the car rental process, from selecting the car to checking out.</p>
                            <div className='flex gap-5 mt-7'>
                                <a rel="noreferrer" href='https://zesty-semolina-e390cb.netlify.app' target="_blank" className='flex items-center bg-yellow-500 dark:bg-[#64644b] z-100 coursor-pointer text-white px-[1.6em] rounded-[4px]  py-[.8em] lg:text-[.8rem] sm:text-[.8rem]'>Demo</a>
                                <a rel="noreferrer" href='https://github.com/hamzamushtaq840/natick-travel' target="_blank" className='px-[1.6em] coursor-pointer  rounded-[4px] flex justify-start items-center gap-1  py-[.8em] border-[1px] border-black dark:border-white lg:text-[.8rem] sm:text-[.8rem] bg-white dark:bg-[#20262E]'><img alt='github' src={github} className='w-[30px] bg-white dark:bg-[#20262E]' />Code</a>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <img alt='project' src={natick} className="rounded-[10px] w-[45%] tm:w-[100%] tm:mb-10 sm:w-[100%]" />
                </Fade>
            </div>

            <div className='flex gap-5 mt-[200px] sm:mt-[80px] tm:mt-[80px] sm:mb-[80px] tm:mb-[80px] mb-[200px] sm:my-16  tm:flex-col tm:items-center sm:flex-col'>
                <Fade bottom>
                    <img alt='project' src={fleadisc} className="rounded-[10px] w-[45%] tm:w-[100%] tm:mb-10 sm:w-[100%]" />
                </Fade>
                <Fade bottom>
                    <div className='relative pl-[9%] sm:pl-0 tm:pl-0 w-[60%] flex justify-end items-center  tm:w-[100%] tm:justify-start sm:w-[100%]'>
                        <div className='gap-2  flex flex-col sm:mt-[10px] tm:mt-[10px]'>
                            <h1 className='text-[1.3rem] mb-2 sm:text-[1rem] font-[800]'>Fleadisc</h1>
                            <p className='w-full dark:text-[#ccc] tm:w-full text-justify font-[350] text-custom-18 leading-loose sm:text-[.9rem]  tm:text-[1rem]  md:w-[100%] sm:w-[100%]'>Website that enables users to auction used or new golf discs. The website features an intuitive and user-friendly interface that guides users through the buying process, from bidding the disc to payment.</p>
                            <div className='flex gap-5 mt-7'>
                                <a rel="noreferrer" href='https://charming-cascaron-388053.netlify.app/' target="_blank" className='flex items-center bg-yellow-500 dark:bg-[#64644b] z-100 coursor-pointer text-white px-[1.6em] rounded-[4px]  py-[.8em] lg:text-[.8rem] sm:text-[.8rem]'>Demo</a>
                                <a rel="noreferrer" href='https://github.com/hamzamushtaq840/Fleadisc' target="_blank" className='px-[1.6em] coursor-pointer  rounded-[4px] flex justify-start items-center gap-1  py-[.8em] border-[1px] border-black dark:border-white lg:text-[.8rem] sm:text-[.8rem] bg-white dark:bg-[#20262E]'><img alt='github' src={github} className='w-[30px] bg-white dark:bg-[#20262E]' />Code</a>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>

            <div className='flex gap-5 mt-[200px] sm:mt-0 tm:mt-0 tm:flex-col-reverse tm:items-center sm:flex-col-reverse'>
                <Fade bottom>
                    <div className='relative w-[60%]  flex justify-between items-center  sm:justify-start tm:w-[100%] sm:w-[100%]'>
                        <div className=' gap-2 flex flex-col  w-full sm:mt-[10px] tm:mt-[10px] '>
                            <h1 className='text-[1.5rem] mb-2 sm:text-[1rem]  font-[800]'>Gaming Community</h1>
                            <p className='w-full dark:text-[#ccc] pr-[16%] sm:pr-0 tm:pr-0 tm:w-full font-[350] text-custom-18 leading-loose sm:text-[.9rem] text-justify tm:text-[1rem] md:w-[100%] sm:w-[100%]'>Website that allows communities to make groups. Each own can have their own sub-domain. Featuring chat, payment, getting sub-domain, posting jobs, posting events, buy and sell, mentors and investors profiles, individual communities views and many other features</p>
                            <div className='flex gap-5 mt-7'>
                                <a rel="noreferrer" href='https://luminous-malasada-0c651c.netlify.app' target="_blank" className='flex items-center bg-yellow-500 dark:bg-[#64644b] z-100 coursor-pointer text-white px-[1.6em] rounded-[4px]  py-[.8em] lg:text-[.8rem] sm:text-[.8rem]'>Demo</a>
                                <a rel="noreferrer" href='https://github.com/hamzamushtaq840/gaming-community-website' target="_blank" className='px-[1.6em] coursor-pointer  rounded-[4px] flex justify-start items-center gap-1  py-[.8em] border-[1px] border-black dark:border-white lg:text-[.8rem] sm:text-[.8rem] bg-white dark:bg-[#20262E]'><img alt='github' src={github} className='w-[30px] bg-white dark:bg-[#20262E]' />Code</a>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <img alt='project' src={gaming} className="rounded-[10px] w-[45%] tm:w-[100%] tm:mb-10 sm:w-[100%]" />
                </Fade>
            </div>


            <div className='flex gap-5 mt-[200px] sm:mt-[80px] tm:mt-[80px] tm:flex-col tm:items-center sm:flex-col'>
                <Fade bottom>
                    <img alt='project' src={etest} className="rounded-[10px] w-[45%] tm:w-[100%] tm:mb-10 sm:w-[100%]" />
                </Fade>
                <Fade bottom>
                    <div className='relative w-[60%] pl-[9%] sm:pl-0 tm:pl-0 flex justify-end items-center  tm:w-[100%] tm:justify-start sm:w-[100%]'>
                        <div className='gap-2 flex flex-col sm:mt-[10px] tm:mt-[10px]'>
                            <h1 className='text-[1.3rem] mb-2 sm:text-[1rem] font-[800]'>E-Testing Service </h1>
                            <p className='tm:w-full w-full dark:text-[#ccc] font-[350] text-custom-18 leading-loose sm:text-[.9rem]  tm:text-[1rem] md:w-[100%] sm:w-[100%] text-justify'>A Learning Management System (LMS) that features real-time notification, natural language processing (NLP) question generation and checking, and voice-to-text answering. The website is designed to facilitate online testing and evaluation for students and educators.</p>
                            <div className='flex gap-5 mt-7'>
                                <button onClick={() => toast.error("To be Deployed", { position: toast.POSITION.TOP_RIGHT })} className='flex items-center bg-yellow-500 dark:bg-[#64644b] z-100 coursor-pointer text-white px-[1.6em] rounded-[4px]  py-[.8em lg:text-[.8rem] sm:text-[.8rem]'>Demo</button>
                                <a rel="noreferrer" href='https://github.com/hamzamushtaq840/e-testing-service-client' target="_blank" className='px-[1.6em] coursor-pointer  rounded-[4px] flex justify-start items-center gap-1  py-[.8em] border-[1px] border-black dark:border-white lg:text-[.8rem] sm:text-[.8rem] bg-white dark:bg-[#20262E]'><img alt='github' src={github} className='w-[30px] bg-white dark:bg-[#20262E]' />Code</a>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>

        </div>
    )
}

export default Projects