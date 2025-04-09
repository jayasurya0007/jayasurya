import './About.css';
import profileImg from '../assets/profile.png';


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
          <p>I'm a passionate full-stack developer with a strong focus on building functional and efficient web applications. I specialize in crafting seamless user experiences backed by powerful backend systems and smart integrations.</p>
          <p>My journey began with HTML, CSS, and JavaScript, and has expanded to include React, Node.js, MongoDB, and modern tools. Recently, I’ve been diving deep into blockchain development, creating decentralized applications (dApps), smart contracts using Solidity, and integrating NFTs and IPFS into real-world solutions.</p>
          <p>I’m always learning, experimenting, and pushing boundaries to stay ahead in the fast-evolving tech landscape.  </p>
          <p>When I’m not coding, I enjoy solving cubes, playing chess, or exploring new technologies in Web3.</p>
        </div>
      </div>
    </div>
  );
};

export default About;