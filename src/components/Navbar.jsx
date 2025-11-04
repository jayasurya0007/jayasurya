import { useState, useEffect } from 'react';
import '../css/Navbar.css';

const Navbar = ({ 
  scrollToSection, 
  homeRef, 
  aboutRef, 
  projectsRef, 
  skillsRef, 
  experienceRef, 
  contactRef 
}) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
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
          if (window.scrollY >= offsetTop - 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [homeRef, aboutRef, projectsRef, skillsRef, experienceRef, contactRef]);

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Portfolio</h1>
      </div>

      <button 
        className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
          <li 
            key={section}
            className={activeSection === section ? 'active' : ''}
          >
            <a
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(eval(`${section}Ref`));
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;