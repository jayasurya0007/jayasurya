import '../css/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Hello, I'm <span className="highlight">JAYASURYA</span></h1>
        <h2>Full Stack Crafter | Code alchemist </h2>
        <p>Turning coffee into scalable web apps with pixel-perfect UI and rock-solid backend logic.
        I design experiences, not just websites.</p>
        <div className="home-buttons">
          <a 
            href="https://drive.google.com/file/d/1EF4voxSZyN6dRvYbolYuy01KPkNyJ4q0/view?usp=sharing" 
            className="btn primary"
            download="Jayasuriya_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Grab My CV
          </a>
        </div>
      </div>
    </div>
        
  );
};

export default Home;
