import { createContext, useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Navbar from './components/Navbar'
import ScrollToTop from "react-scroll-to-top";
import Services from './components/Services';


function App() {
  return (
    <div className='bg-[#F6FBF4] text-black dark:bg-[#20262E] dark:text-white min-h-screen'>
      <Navbar />
      <AboutMe />
      <Services />
      <ScrollToTop smooth className='flex justify-center items-center ' />
    </div>
  )
}

export default App
