import Navbar from "./Navbar/Navbar"
import Hero from "./Hero/Hero"
import HangingNav from "./Navbar/HangingNav";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import ProjectsPage from "./Projects/projectsPage";
import AboutMe from "./About/AboutMe";
import Footer from "./Footer/Footer";
import { AnimatedBackground } from 'animated-backgrounds';
import { useState, useEffect,  useRef  } from 'react'

function App() {
  const [navbarstate, setNavbarstate] = useState('home')
  const [showHangingNav, setShowHangingNav] = useState(false);
  const headerWrapperRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  }
  useEffect(() => {
    // Scroll to the top when navbarstate changes
    const timeoutId = setTimeout(() => {
      scrollToTop();
    }, 0); // Use a timeout to ensure it runs after the state update

    return () => clearTimeout(timeoutId); // Clean up on unmount
  }, [navbarstate]);

  useEffect(() => {
    const targetElement = headerWrapperRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowHangingNav(!entry.isIntersecting); // Show nav if div is not intersecting (not visible)
      },
      {
        root: null, // Use viewport as the root
        threshold: 0, // Trigger when the top of the element is out of view
      }
    );

    if (targetElement) {
      observer.observe(targetElement);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);
  return (
    <>
      <AnimatedBackground animationName="starryNight" style = {{
        opacity: 0.5,
      }} />
      <HangingNav navbarstate = {navbarstate} setNavbarstate = {setNavbarstate} showHangingNav = {showHangingNav} />
      {
        navbarstate === 'home' &&
        <>
          <div className="flex items-center flex-col fixed inset-x-0 header-wrapper">
            <Navbar/>
            <Hero />
          </div>
          <div className="header-wrapper" ref={headerWrapperRef} >
            
          </div>
          <div className="h-[4rem] custom-bg-fade relative z-20 translate-y-1" >
            
          </div>
          <div className="bg-[#020711] z-20 relative">
            <Projects setNavbarstate = {setNavbarstate} scrolltop = {scrollToTop} />
            <Skills />
            
          </div>
        </>
      }
      {
        navbarstate === 'projects' &&
        <div className="z-[25] relative pt-16">
          <ProjectsPage />
        </div>
      }
      {
        navbarstate === 'about' &&
        <div className="z-[25] relative pt-16">
          <About/>
        </div>
      }

      
      <Footer setNavbarstate = {setNavbarstate}/>
    </>
  )
}

export default App
