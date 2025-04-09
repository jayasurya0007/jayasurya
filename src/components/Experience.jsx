import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "AI/ML Intern",
      company: "Innovate Intern ",
      duration: "March 2024 – May 2024",
      description: "Worked on machine learning and computer vision projects, gaining hands-on experience in intelligent system development and deployment.",
      responsibilities: [
        "Developed a human motion detection system using OpenCV and Python",
        "Applied computer vision techniques to analyze real-time video streams" 
      ]
    }
  ];

  return (
    <div className="experience-container">
      <h2 className="section-title">Work Experience</h2>
      
      <div className="experience-timeline">
        {experiences.map((exp) => (
          <div className="experience-card" key={exp.id}>
            <div className="experience-header">
              <h3>{exp.role}</h3>
              <div className="company-info">
                <span className="company-name">{exp.company}</span>
                <span className="duration">{exp.duration}</span>
              </div>
            </div>
            
            <p className="experience-description">{exp.description}</p>
            
            <div className="responsibilities">
              <h4>Key Responsibilities:</h4>
              <ul>
                {exp.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;