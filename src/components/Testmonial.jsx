import React from 'react';
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import quote from './../assets/quoteLeft.svg';

function Testmonial() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: 0,
        slidesToShow: 1,
        speed: 1000,
        slidesToScroll: 1,
        // autoplay: true,
        // fade: true,
        autoplaySpeed: 3000,
        lazyLoad: true,
    };

    return (
        <div id='testimonial'>
            <Fade bottom>
                <h1 className='p-[4rem] sm:p-[1.25rem] w-[25rem] tracking-wider font-[600] text-[2rem] lg:text-[2rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1.8rem] sm:mb-4 sm:w-[100%]'>Testimonials</h1>
            </Fade>
            <div className=' w-[65%] lg:w-[85%] md:w-[90%] tm:w-[88%] sm:w-[84%] mt-4 relative left-1/2 -translate-x-1/2 '>
                <Fade bottom>
                    <Slider {...settings}>
                        <div>
                            <div className='min-h-[400px] bg-yellow-500 mr-[10px]  rounded-[15px] flex flex-col items-center p-3 h-full '>
                                <img alt='quote' src={quote} className='w-[80px]' />
                                <p className=' text-white w-[80%] flex-1 flex justify-center items-center font-[400]  text-[1rem] leading-loose sm:text-[.9rem] tm:w-[90%] tm:text-[1rem] text-center'>I've played around a bit. Great job!. I'm really impressed how well you have understood everything. Solid delivery. Very well done</p>
                                <div className='flex text-black w-[80%] items-center  flex-col pb-10 sm:pb-2'>
                                    <h1 className='text-[1.3rem] font-[600]  sm:text-[1rem]'>Fred Isaksson</h1>
                                    <p className='text-[.8rem] font-[500]'>Client</p>
                                    <p className='text-[.6rem] text-[#616060] font-[500]'>Sweden</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='min-h-[400px] bg-yellow-500 mr-[10px]  rounded-[15px] flex flex-col items-center p-3 h-full '>
                                <img alt='quote' src={quote} className='w-[80px]' />
                                <p className=' text-white w-[80%] flex-1 text-center flex justify-center items-center font-[400]  text-[1rem] leading-loose sm:text-[.9rem] tm:w-[90%] tm:text-[1rem]'>His designing is very great. I would highly recommend him to anyone in need of a talented web developer.</p>
                                <div className='flex text-black w-[80%] items-center  flex-col pb-10 sm:pb-2'>
                                    <h1 className='text-[1.3rem] font-[600]  sm:text-[1rem]'>Huzaifa Abid</h1>
                                    <p className='text-[.8rem] font-[500]'>Friend</p>
                                </div>
                            </div>
                        </div>

                    </Slider>
                </Fade>
            </div >
        </div >
    )
}

export default Testmonial