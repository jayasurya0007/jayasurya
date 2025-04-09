import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "StreamSyncJJ – Synchronized Live Streaming Platform",
      description: "A fully synchronized, encrypted live-streaming platform built for webinars, events, and broadcasts. Features real-time chat, seamless playback sync across viewers, and secure video delivery with AWS.",
      tags: ["React", "Node.js", "Express", "MongoDB","WebSockets","FFmpeg","HLS","AWS S3 + CloudFront"],
      link:"https://devfolio.co/projects/streamsyncjj-530c",
      github:"https://github.com/jayasurya0007/streamsync",
    },
    {
      id: 2,
      title: "RESQ – Emergency Coordination Platform 🚨",
      description: "A real-time disaster response app built with React Native Expo. Connects citizens, NGOs, and government agencies with AI-driven disaster prediction, geolocation-based SOS alerts, and coordinated rescue dashboards.",
      tags: ["React Native (Expo)", "Node.js","Express","MongoDB","WebSocket"],
      link:"https://expo.dev/accounts/jayasurya.26it/projects/RescueApp/builds/e9e3dfc7-9e97-491b-aff0-0ae387ad5f92",
      github:"https://github.com/jayasurya0007/ResQ-Mobile",
    }
  ];

  return (
    <div className="projects-container">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span className="tag" key={index}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="project-link">View Project</a>
                <a href={project.github} className="project-link">Source Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;