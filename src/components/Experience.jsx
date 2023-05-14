import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function Experience() {
    return (
        <div id="experience" className='p-[4rem] mt-4 tm:mt-4 sm:mt-0 pt-[3rem] sm:pb-[.4rem] tm:pb-[.4rem] pb-[7rem] sm:px-[1.25rem] sm:py-[-10px] '>
            <Slide bottom>
                <div >
                    <h1 className='w-[25rem] mb-[4rem] tm:mb-[2rem] tracking-wider font-[600] text-[2rem] lg:text-[2rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1.8rem] sm:mb-4 sm:w-[100%]'>Experience</h1>
                </div>
            </Slide>

            <div className='flex flex-col sm:mt-10 tm:mt-10 mt-[120px] items-center justify-center  '>
                <div className='flex gap-10 ml-4 sm:ml-3 w-[80%] tm:w-[100%] md:w-[100%] sm:w-[100%] '>
                    <Fade bottom>
                        <div className='text-[1.3rem] mb-2 ml-[-3px] sm:text-[1rem] mt-[.1rem]'>
                            <h1 className='flex-1 min-w-[120px] sm:min-w-[92px]' >Macro Soar</h1>
                            <h3 className='text-[0.8rem] text-center my-1 dark:text-[#ccc]'>2023-Ongoing</h3>
                        </div>
                    </Fade>
                    <Fade bottom >
                        <div className='flex relative  mt-[5px] flex-col sm:ml-[-29px]  '>
                            <p className="p-[1px] border-dotted border-2 border-black dark:border-white rounded-full bg-transparent ">
                                <div className='m-1 bg-[#D8F40C] p-[7px] rounded-full'></div>
                            </p>
                            <div className='absolute top-[29px] bottom-[-26px] left-[12px] sm:top-[26px] border-dotted border-l-2 border-black dark:border-white '></div>

                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className='flex flex-col sm:ml-[-30px] mt-1'>
                            <h1 className='text-[1.3rem] mb-2 sm:text-[1rem] font-[600]'>MERN INTERNSHIP</h1>
                            <p className='w-[100%] font-[300] dark:text-[#ccc] text-custom-18 leading-loose sm:text-[.8rem]  tm:text-[1rem]'>
                                Worked with web applications for various projects using the MERN stack.
                                Improved performance, memory optimization and reliability through error handling and testing.
                                Integrated external APIs and third-party services to enhance the functionality and features of web applications.
                                Utilized Git for version control and collaborated with teammates.
                            </p>
                        </div>
                    </Fade>
                </div>

            </div>
            <div className='flex flex-col  mt-5 items-center justify-center  '>
                <div className='flex gap-10 w-[80%] tm:w-[100%] md:w-[100%] sm:w-[100%] '>
                    <Fade bottom>
                        <div className='text-[1.3rem] mb-2 sm:text-[1rem] mt-[.1rem]'>
                            <h1 className=''>Freelancing</h1>
                            <h3 className='text-[0.8rem] text-center my-1 dark:text-[#ccc]'>2022-2023</h3>
                        </div>
                    </Fade>
                    <Fade bottom >
                        <div className='flex relative mt-[5px] ml-[2px] flex-col sm:ml-[-28px]  '>
                            <p className="p-[1px] border-dotted border-2 border-black dark:border-white rounded-full bg-transparent ">
                                <div className='m-1 bg-[#D8F40C] p-[7px] rounded-full'></div>
                            </p>
                            <div className='absolute top-[29px] bottom-[-5px] left-[12px] border-dotted border-l-2 border-black sm:top-[27px] dark:border-white '></div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className='flex flex-col sm:ml-[-30px] mt-1'>
                            <h1 className='text-[1.3rem] mb-2 sm:text-[1rem] font-[600]'>FULL STACK DEVELOPER</h1>
                            <p className='w-[100%] font-[300] dark:text-[#ccc] text-custom-18 leading-loose  sm:text-[.8rem] tm:text-[1rem]'>
                                Developed full-stack web applications using the MERN stack, ranging from small-scale projects to complex systems.
                                Participated in the entire software development life cycle, including requirement gathering, coding, testing, and deployment.
                                Collaborated with a team of developers to design and implement new features for existing web applications.
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>

        </div >
    )
}

export default Experience