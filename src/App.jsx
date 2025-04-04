import { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  // Function for smooth scrolling
  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navbar 
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        experienceRef={experienceRef}
        contactRef={contactRef}
      />
      
      <div className="content">
        <section ref={homeRef} className="section" id="home">
          <Home />
        </section>
        
{/*         <section ref={aboutRef} className="section" id="about">
          <About />
        </section>
        
        <section ref={projectsRef} className="section" id="projects">
          <Projects />
        </section>
        
        <section ref={skillsRef} className="section" id="skills">
          <Skills />
        </section>
        
        <section ref={experienceRef} className="section" id="experience">
          <Experience />
        </section>
        
        <section ref={contactRef} className="section" id="contact">
          <Contact />
        </section> */}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
