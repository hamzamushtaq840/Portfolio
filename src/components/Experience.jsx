import React from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';

function Experience() {
    return (
        <div id="experience" className='p-[4rem] py-[3rem] sm:px-[1.25rem] sm:py-[-10px] '>
            <Slide left>
                <div >
                    <h1 className='w-[25rem] mb-[4rem] tracking-wider font-[600] text-[2rem] lg:text-[2rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1.8rem] sm:mb-4 sm:w-[100%]'>Experience</h1>
                </div>
            </Slide>


            <div className='flex flex-col  mt-5 items-center justify-center  '>
                <div className='flex gap-10 w-[80%] tm:w-[100%] md:w-[100%] sm:w-[100%] '>
                    <Fade left>
                        <div className='text-[1.3rem] mb-2 sm:text-[1rem] mt-[.1rem]'>
                            <div className='glitch-wrapper'>
                                <h1 className='glitch' data-glitch="Freelancing" >Freelancing</h1>
                            </div>
                            <h3 className='text-[0.8rem] text-center my-1'>2021-2023</h3>
                        </div>
                    </Fade>
                    <Roll bottom >
                        <div className='flex relative  mt-[5px] flex-col sm:ml-[-25px]  '>
                            <p className="p-[1px] border-dotted border-2 border-black dark:border-white rounded-full bg-transparent ">
                                <div className='m-1 bg-[#D8F40C] p-[7px] rounded-full'></div>
                            </p>
                            <div className='absolute top-[29px] bottom-[-26px] left-[12px] sm:top-[26px] border-dotted border-l-2 border-black dark:border-white '></div>

                        </div>
                    </Roll>
                    <Bounce right>
                        <div className='flex flex-col sm:ml-[-20px] mt-1'>
                            <h1 className='text-[1.3rem] mb-2 sm:text-[1rem]'>MERN DEVELOPER</h1>
                            <p className='w-[100%] font-[350] text-[1rem] leading-loose sm:text-[.9rem]  tm:text-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt, rerum quasi omnis neque dolores repudiandae nobis tenetur. Dolorem, at.Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium et odio soluta commodi, autem ullam magnam voluptates quaerat sequi!</p>
                        </div>
                    </Bounce>
                </div>

            </div>
            <div className='flex flex-col  mt-5 items-center justify-center  '>
                <div className='flex gap-10 w-[80%] tm:w-[100%] md:w-[100%] sm:w-[100%] '>
                    <Fade left>
                        <div className='text-[1.3rem] mb-2 sm:text-[1rem] mt-[.1rem]'>
                            <h1 >StellerStack</h1>
                            <h3 className='text-[0.8rem] text-center my-1'>2022</h3>
                        </div>
                    </Fade>
                    <Roll bottom >
                        <div className='flex relative  mt-[5px] flex-col sm:ml-[-25px]  '>
                            <p className="p-[1px] border-dotted border-2 border-black dark:border-white rounded-full bg-transparent ">
                                <div className='m-1 bg-[#D8F40C] p-[7px] rounded-full'></div>
                            </p>
                            <div className='absolute top-[29px] bottom-[-5px] left-[12px] border-dotted border-l-2 border-black sm:top-[27px] dark:border-white '></div>
                        </div>
                    </Roll>
                    <Bounce right>
                        <div className='flex flex-col sm:ml-[-20px] mt-1'>
                            <h1 className='text-[1.3rem] mb-2 sm:text-[1rem]'>INTERNSHIP</h1>
                            <p className='w-[100%] font-[350] text-[1rem] leading-loose sm:text-[.9rem]  tm:text-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt, rerum quasi omnis neque dolores repudiandae nobis tenetur. Dolorem, at.Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium et odio soluta commodi, autem ullam magnam voluptates quaerat sequi!</p>
                        </div>
                    </Bounce>
                </div>

            </div>

        </div >
    )
}

export default Experience