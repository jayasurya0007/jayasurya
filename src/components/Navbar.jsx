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
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (window.innerWidth <= 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          document.querySelector('.navbar').style.transform = 'translateY(-100%)';
        } else {
          document.querySelector('.navbar').style.transform = 'translateY(0)';
        }
      }

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
          if (currentScrollY >= offsetTop - 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }

      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, homeRef, aboutRef, projectsRef, skillsRef, experienceRef, contactRef]);

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setIsMenuOpen(false);
  };

  const toggleName = () => {
    setShowName(!showName);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo" onClick={toggleName}>
        <div className={`logo-container ${showName ? 'rotated' : ''}`}>
          <h1 className="logo-text">~/root</h1>
          <h1 className="logo-text">~/portfolio</h1>
        </div>
      </div>

      <button 
        className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Navigation menu"
      >
        <span className="menu-line"></span>
        <span className="menu-line"></span>
        <span className="menu-line"></span>
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
          <li>
            <a 
              href="https://blogs.jayasuryar.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Blogs
            </a>
          </li>
        </ul>

    </nav>
  );
};

export default Navbar;