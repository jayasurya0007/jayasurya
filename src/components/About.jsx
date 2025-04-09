import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img 
            src="/path-to-your-image.jpg" 
            alt="Profile" 
            className="profile-img"
          />
        </div>
        <div className="about-text">
          <p>I'm a passionate frontend developer with a strong focus on creating intuitive and responsive user interfaces. With 5 years of experience in the industry, I've had the opportunity to work on various projects ranging from small business websites to complex web applications.</p>
          <p>My journey in web development started with HTML and CSS, but quickly evolved to include JavaScript, React, and other modern technologies. I believe in continuously learning and adapting to new technologies to stay at the forefront of web development.</p>
          <p>When I'm not coding, you can find me hiking, reading, or experimenting with new recipes in the kitchen.</p>
        </div>
      </div>
    </div>
  );
};

export default About;