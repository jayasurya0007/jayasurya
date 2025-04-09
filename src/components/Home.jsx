import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Hello, I'm <span className="highlight">JAYASURYA</span></h1>
        <h2>Full Stack Developer </h2>
        <p>I build responsive web applications focused on seamless functionality and modern design</p>
        <div className="home-buttons">
          <a 
            href="https://drive.google.com/uc?export=download&id=1b3FbXPbH5MDqEOWbnJDEs9W_dF8iw5J-" 
            className="btn primary"
            download="Jayasuriya_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
        
  );
};

export default Home;
