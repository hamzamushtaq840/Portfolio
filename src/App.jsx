import { createContext, useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Navbar from './components/Navbar'
import ScrollToTop from "react-scroll-to-top";
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testmonial from './components/Testmonial';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='bg-[#F6FBF4] text-black dark:bg-[#20262E] dark:text-white'>
      <Navbar />
      <AboutMe />
      <Services />
      <Experience />
      <Projects />
      <Testmonial />
      <Contact />
      <ToastContainer style={{ zIndex: "1000000000000000000000" }} autoClose={2000} />
      <ScrollToTop smooth className='flex justify-center items-center ' />
    </div>
  )
}

export default App
