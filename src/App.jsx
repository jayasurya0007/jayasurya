import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation,Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/additional/Blog';
import './App.css';
import './lib/fontawesome';

function MainContent() {
  const location = useLocation();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

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
        <Routes location={location}>
          <Route path="/" element={
            <>
              <section ref={homeRef} className="section" id="home">
                <Home />
              </section>
              <section ref={aboutRef} className="section" id="about">
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
              </section>
            </>
          } />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;