import { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='bg-white text-[white] dark:bg-[#20262E] transition duration-1000 min-h-screen'>
      <Navbar />
    </div>
  )
}

export default App
