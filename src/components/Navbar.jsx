import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ 
  scrollToSection, 
  homeRef, 
  aboutRef, 
  projectsRef, 
  skillsRef, 
  experienceRef, 
  contactRef 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine which section is in view
      const scrollPosition = window.scrollY;
      
      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'about', ref: aboutRef },
        { id: 'projects', ref: projectsRef },
        { id: 'skills', ref: skillsRef },
        { id: 'experience', ref: experienceRef },
        { id: 'contact', ref: contactRef },
      ];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const offsetTop = section.ref.current.offsetTop;
          if (scrollPosition >= offsetTop - 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [homeRef, aboutRef, projectsRef, skillsRef, experienceRef, contactRef]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <h1>Portfolio</h1>
      </div>
      
      <ul className="navbar-links">
        <li className={activeSection === 'home' ? 'active' : ''}>
          <a href="#home" onClick={(e) => {
            e.preventDefault();
            scrollToSection(homeRef);
          }}>Home</a>
        </li>
        <li className={activeSection === 'about' ? 'active' : ''}>
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            scrollToSection(aboutRef);
          }}>About</a>
        </li>
        <li className={activeSection === 'projects' ? 'active' : ''}>
          <a href="#projects" onClick={(e) => {
            e.preventDefault();
            scrollToSection(projectsRef);
          }}>Projects</a>
        </li>
        <li className={activeSection === 'skills' ? 'active' : ''}>
          <a href="#skills" onClick={(e) => {
            e.preventDefault();
            scrollToSection(skillsRef);
          }}>Skills</a>
        </li>
        <li className={activeSection === 'experience' ? 'active' : ''}>
          <a href="#experience" onClick={(e) => {
            e.preventDefault();
            scrollToSection(experienceRef);
          }}>Experience</a>
        </li>
        <li className={activeSection === 'contact' ? 'active' : ''}>
          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            scrollToSection(contactRef);
          }}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;