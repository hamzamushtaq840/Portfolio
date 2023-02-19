import { createContext, useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Navbar from './components/Navbar'
import ScrollToTop from "react-scroll-to-top";
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testmonial from './components/Testmonial';


function App() {
  return (
    <div className='bg-[#F6FBF4] text-black dark:bg-[#20262E] dark:text-white'>
      <Navbar />
      <AboutMe />
      <Services />
      <Experience />
      <Projects />
      {/* <Testmonial /> */}
      <ScrollToTop smooth className='flex justify-center items-center ' />
    </div>
  )
}

export default App
