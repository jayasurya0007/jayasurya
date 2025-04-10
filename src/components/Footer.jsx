import './Footer.css';
// Import only the icons you need for the footer
import discordIcon from '../assets/discord-icon.png';
import redditIcon from '../assets/reddit-icon.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Jayasurya R</h2>
          <p>Full Stack Developer</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-link-group">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h3>Connect With Me</h3>
            <div className="social-icons">
              <a href="https://discord.com/users/Jayasurya849" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src={discordIcon} alt="Discord" className="social-icon-img" />
              </a>
              <a href="https://www.reddit.com/user/block-chain-07" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src={redditIcon} alt="Reddit" className="social-icon-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <p>&copy; {currentYear} jayasuryar.xyz All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;