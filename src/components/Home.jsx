import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Hello, I'm <span className="highlight">Your Name</span></h1>
        <h2>Frontend Developer & UI/UX Designer</h2>
        <p>I build beautiful, responsive web applications with modern technologies</p>
        <div className="home-buttons">
          <button className="btn primary">Download CV</button>
        </div>
      </div>
    </div>
    
  );
};

export default Home;
