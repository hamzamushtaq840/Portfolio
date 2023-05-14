import ScrollToTop from "react-scroll-to-top";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ParticlesView from './Layout/ParticlesView';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import Testmonial from './components/Testmonial';

function App() {

  return (
    <ParticlesView>
      <div className='font-poppins select-none text-black bg-white dark:bg-[#20262E] dark:text-white  transition duration-500'>
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
    </ParticlesView>
  )
}

export default App
