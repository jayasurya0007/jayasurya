import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A fully responsive e-commerce platform built with React and Node.js with payment integration.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      image: "project1.jpg"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application that helps users organize and prioritize their daily tasks.",
      tags: ["React", "Redux", "Firebase"],
      image: "project2.jpg"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather application that displays weather forecasts using a third-party API.",
      tags: ["JavaScript", "API Integration", "CSS"],
      image: "project3.jpg"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase projects and skills (similar to this one).",
      tags: ["React", "Vite", "CSS"],
      image: "project4.jpg"
    }
  ];

  return (
    <div className="projects-container">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <div className="image-placeholder"></div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span className="tag" key={index}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href="#" className="project-link">View Project</a>
                <a href="#" className="project-link">Source Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;