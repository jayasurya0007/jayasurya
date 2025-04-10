import '../css/About.css';
import profileImg from '../assets/profile.jpg';


const About = () => {
  return (
    <div className="about-container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img 
            src={profileImg} 
            alt="Profile" 
            className="profile-img"
          />
        </div>
        <div className="about-text">
          <p>A full-stack developer who builds more than just websites — I engineer smooth digital journeys backed by smart, scalable systems.</p>
          <p>I started with HTML, CSS, and JavaScript, and now wield React, Node.js, MongoDB, and modern tools to craft efficient web apps.</p>
          <p>Lately, I’ve been diving into the blockchain world — building dApps, writing smart contracts in Solidity, and exploring NFTs and IPFS to solve real-world problems.</p>
          <p>Whether it’s shipping pixel-perfect UIs or integrating decentralized tech, I’m always evolving — learning, building, and exploring the next big thing.</p>
          <p>Off the screen? I’m solving Rubik’s cubes, playing chess, or geeking out over the future of Web3.</p>
        </div>
      </div>
    </div>
  );
};

export default About;