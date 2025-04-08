import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2022 - Present",
      description: "Leading frontend development for web applications, implementing new features, and optimizing performance. Collaborating with designers and backend developers to deliver high-quality user experiences.",
      responsibilities: [
        "Developed and maintained multiple React-based applications",
        "Led a team of 3 junior developers and provided mentorship",
        "Improved website performance by 40% through code optimization",
        "Implemented responsive design principles across all projects"
      ]
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Digital Creations",
      duration: "Mar 2019 - Dec 2021",
      description: "Worked on various client projects, building responsive websites and web applications using modern JavaScript frameworks and libraries.",
      responsibilities: [
        "Built and maintained client websites using React and Vue.js",
        "Collaborated with UI/UX designers to implement designs",
        "Integrated RESTful APIs and third-party services",
        "Participated in code reviews and contributed to coding standards"
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