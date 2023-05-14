import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function Experience() {
    return (
        <div id="experience" className='p-[4rem] mt-10 tm:mt-4 sm:mt-0 py-[3rem] sm:px-[1.25rem] sm:py-[-10px] '>
            <Slide bottom>
                <div >
                    <h1 className='w-[25rem] mb-[4rem] tm:mb-[2rem] tracking-wider font-[600] text-[2rem] lg:text-[2rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1.8rem] sm:mb-4 sm:w-[100%]'>Experience</h1>
                </div>
            </Slide>

            <div className='flex flex-col  mt-5 items-center justify-center  '>
                <div className='flex gap-10 w-[80%] tm:w-[100%] md:w-[100%] sm:w-[100%] '>
                    <Fade bottom>
                        <div className='text-[1.3rem] mb-2 sm:text-[1rem] mt-[.1rem]'>
                            <div className='glitch-wrapper'>
                                <h1 className='glitch' data-glitch="Freelancing" >Freelancing</h1>
                            </div>
                            <h3 className='text-[0.8rem] text-center my-1'>2021-2023</h3>
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
                            <h1 className='text-[1.3rem] mb-2 sm:text-[1rem] font-[600]'>MERN DEVELOPER</h1>
                            <p className='w-[100%] font-[350] text-[1rem] leading-loose sm:text-[.9rem]  tm:text-[1rem]'>I have designed and developed numerous web applications, ranging from small-scale projects to complex systems. I specialize in creating intuitive user interfaces, implementing secure payment gateways, and optimizing applications for optimal performance. I have delivered high-quality projects for my clients, always within agreed-upon timelines. I am committed to providing excellent customer service and bringing my professional experience to help you achieve your project goals.</p>
                        </div>
                    </Fade>
                </div>

            </div>
            <div className='flex flex-col  mt-5 items-center justify-center  '>
                <div className='flex gap-10 ml-4 sm:ml-3 w-[80%] tm:w-[100%] md:w-[100%] sm:w-[100%] '>
                    <Fade bottom>
                        <div className='text-[1.3rem] mb-2 sm:text-[1rem] mt-[.1rem]'>
                            <h1 className=''>CodeMetal</h1>
                            <h3 className='text-[0.8rem] text-center my-1'>2022-2023</h3>
                        </div>
                    </Fade>
                    <Fade bottom >
                        <div className='flex relative  mt-[5px] ml-[2px] flex-col sm:ml-[-28px]  '>
                            <p className="p-[1px] border-dotted border-2 border-black dark:border-white rounded-full bg-transparent ">
                                <div className='m-1 bg-[#D8F40C] p-[7px] rounded-full'></div>
                            </p>
                            <div className='absolute top-[29px] bottom-[-5px] left-[12px] border-dotted border-l-2 border-black sm:top-[27px] dark:border-white '></div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className='flex flex-col sm:ml-[-30px] mt-1'>
                            <h1 className='text-[1.3rem] mb-2 sm:text-[1rem] font-[600]'>FRONTEND DEVELOPER</h1>
                            <p className='w-[100%] font-[350] text-[1rem] leading-loose  sm:text-[.9rem] tm:text-[1rem]'>I worked as a React Frontend Developer, contributing to the development of multiple web applications. I designed and developed user interfaces, integrated APIs, and worked closely with the backend team to ensure seamless data integration and overall application performance. My experience in agile development methodologies allowed me to effectively collaborate with cross-functional teams, ensuring timely project delivery. </p>
                        </div>
                    </Fade>
                </div>

            </div>

        </div >
    )
}

export default Experience