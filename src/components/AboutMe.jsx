import React from 'react';
import Typed from 'react-typed';
import Tilt from '../utils/Tilt';
import hamza from './../assets/div.png';
import github from './../assets/github.svg';
import linkedin from './../assets/linkedin.svg';

function AboutMe() {
    const options = {
        speed: 1000,
        max: 30,
        reverse: 'true'
    };

    return (
        <div className='flex sm:min-h-0 min-h-[calc(100vh-6.4rem)] items-center   pl-[4rem] lg:mt-0 lg:pt-0 pr-[1rem] py-[0rem] md:mt-0 md:pt-0 tm:flex-col sm:flex-col  sm:px-[1.5rem] sm:mt-0'>
            <div className='flex  mt-[-30px] md:mt-0 sm:mt-0 xsm:mt-0 flex-col pt-0 justify-center w-[70%] min-h-[58vh] tm:min-h-min tm:w-full  sm:min-h-min sm:w-full  sm:pt-0 tm:pt-0'>
                <h1 className='font-[400] text-[2.5rem] md:text-[1.7rem] tm:text-[2rem] sm:text-[1.6rem]' >Hello,</h1>
                {/* <h1 className='font-[800] text-[3rem] text-yellow-400 mt-[-10px] lg:text-[2.4rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1.8rem]'>I'm Hamza Mushtaq</h1> */}
                <blockquote class="font-[800] text-[3.5rem] text-yellow-400 mt-[-10px] lg:text-[2.4rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1.8rem]">
                    I'm
                    <span class="before:block mx-4 mb-6 mt-4 before:absolute before:-inset-2 before:-skew-y-[5deg] before:bg-yellow-400 relative inline-block">
                        <span class="relative text-[#fffffff0] dark:text-[#20262E]">Hamza</span>
                    </span>
                    Mushtaq
                </blockquote>
                <div>
                    <Typed
                        className='font-[500] dark:font-[400] text-black dark:text-[#fff75c] text-[1.3rem] mb-2 sm:text-[1rem]'
                        strings={["FRONTEND DEVELOPER", "BACKEND DEVELOPER"]}
                        typeSpeed={80}
                        backSpeed={40}
                        loop
                    />
                </div>
                <br />
                <p className='leading-loose font-[400] mt-[-.8rem] text-[1rem] w-[90%] lg:w-[70%] md:w-[95%] tm:w-full sm:w-full sm:text-[.9rem] sm:mt-4'>I'm a MERN developer experienced in frontend and backend technologies. My tech stack includes MERN, Next.js, TypeScript, Nest.js, AWS, and DevOps. I build efficient web applications from designing interfaces to implementing server-side logic. Let's work together to bring your ideas to life!</p>
            </div>

            <div className='flex py-[10px] items-start pr-10 mt-[-30px] tm:pr-0 sm:pr-0 sm:justify-between sm:flex-col'>
                <Tilt className="box" options={options} >
                    <div className='h-full mr-5 justify-end flex items-center sm:mr-0 sm:justify-center'>
                        <img src={hamza} alt='hamza' className="h-[80%] min-h-[250px] min-w-[250px] rounded-lg tm:mt-[40px]  tm:h-[360px] sm:h-[300px] sm:mt-[70px]" />
                    </div>
                </Tilt>

                <div className='flex items-center gap-4 flex-col mt-[0] justify-center pt-[35%] sm:flex-row sm:pt-5'>
                    <a rel="noreferrer" href="https://www.linkedin.com/in/hamza-mushtaq-8bb8ab246" target="_blank" ><img src={linkedin} alt='likedin' className="cursor-pointer h-[35px]" /></a>
                    <a rel="noreferrer" href="https://github.com/hamzamushtaq840" target="_blank"><img src={github} alt='linkedin' className="cursor-pointer h-[31px]" /></a>
                </div>
            </div>

        </div >
    )
}

export default AboutMe