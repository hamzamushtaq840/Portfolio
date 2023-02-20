import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import send from './../assets/send.png'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

function Contact() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string()
                .required('Valid email required'),
            message: Yup.string()
                .required('Please write your message'),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            toast.success("Your Message Sent!", {
                position: toast.POSITION.TOP_RIGHT
            });
            MailService(values);
            resetForm()
        },
    });

    const MailService = async (data2) => {
        let data = {}
        data.from_name = ": " + data2.name
        data.from_email = ": " + data2.email
        data.message = data2.message
        emailjs
            .send('service_vimsp8b', 'template_mkl0oq6', data, '_skPtTuhpdi0bie5x')
            .then(
                (result) => {

                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <>
            <div className='p-[3rem] sm:px-[1.25rem] mt-28 flex tm:py-0 sm:py-0 sm:mt-14  tm:flex-col gap-10 sm:flex-col'>
                <Fade left>

                    <div className='flex w-[50%]  tm:pt-0 sm:pt-0 tm:w-full sm:w-full'>
                        <h1 className='w-[25rem] tm:w-full  tracking-wider font-[600] text-[2rem] lg:text-[2rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1.8rem]  sm:w-[100%]'>Wanna hit up with <span className='text-yellow-500'>something ?</span> </h1>
                    </div>
                </Fade>

                <Fade right>
                    <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit() }} className='w-[50%] flex  flex-col gap-3 tm:w-full sm:w-full'>
                        <input id="name"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name} className='p-4 rounded-[4px]  bg-[#e4e1e1fa] dark:bg-[#343541] h-[60px]' placeholder='Name' />
                        {formik.touched.name && formik.errors.name ? (
                            <p className="font-[200] text-[.9rem] mt-[-8px] mb-[-8px] text-red-400" >{formik.errors.name}</p>
                        ) : null}

                        <input
                            id='email'
                            type="email"
                            placeholder="Email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className='p-4 rounded-[4px] bg-[#e4e1e1fa] dark:bg-[#343541] h-[60px]' />
                        {formik.touched.email && formik.errors.email ? (
                            <p className="font-[200] text-[.9rem] mt-[-8px] mb-[-8px] text-red-400" >{formik.errors.email}</p>
                        ) : null}
                        <textarea
                            id='message'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                            className='p-4 resize-none rounded-[4px] input bg-[#e4e1e1fa] dark:bg-[#343541] h-[400px] ' placeholder='Your message' type='text' />
                        {formik.touched.message && formik.errors.message ? (
                            <p className="font-[200] text-[.9rem] mt-[-8px] mb-[-8px] text-red-400" >{formik.errors.message}</p>
                        ) : null}

                        <div className='flex justify-end mb-8'>
                            <button type='submit' className='px-[1.6em] coursor-pointer  rounded-[4px] flex justify-start items-center gap-1  py-[.8em] border-2 lg:text-[.8rem] sm:text-[.8rem]'>SEND <img src={send} className='w-[20px]' /></button>
                        </div>
                    </form>
                </Fade>
            </div>
            <div className='flex justify-center items-center font-[350] text-[1rem] leading-loose sm:text-[.9rem]  tm:text-[1rem]'><span className=' text-[1.3rem]'>©&nbsp;</span> Hamza 2023 - All Right Reserved</div>
        </>
    )
}

export default Contact