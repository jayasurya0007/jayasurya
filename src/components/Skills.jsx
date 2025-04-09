import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Skills.css';

// Font Awesome Icons
import { 
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faNodeJs,
  faPython,
  faGitAlt,
  faGithub,
  faAws,
  faFigma
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "ReactJS", icon: faReact },
        { name: "HTML/CSS", icon: [faHtml5, faCss3Alt] },
        { name: "Bootstrap", icon: faBootstrap },
        { name: "JavaScript", icon: faJs }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", icon: faNodeJs },
        { name: "Express.js", icon: faCode },
        { name: "MongoDB", icon: faDatabase },
        { name: "Mongoose", icon: faDatabase },
        { name: "SQL", icon: faDatabase },
        { name: "Python", icon: faPython },
        { name: "PostgreSQL", icon: faDatabase },
        { name: "REST API", icon: faCode }
      ]
    },
    {
      category: "Blockchain",
      skills: [
        { name: "Solidity", icon: 'solidity' },
        { name: "Ethers.js", icon: 'ethers' }
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git", icon: faGitAlt },
        { name: "GitHub", icon: faGithub },
        { name: "AWS", icon: faAws },
        { name: "Figma", icon: faFigma }
      ]
    }
  ];

  return (
    <div className="skills-container">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-content">
        {skillCategories.map((category, categoryIndex) => (
          <div className="skill-category" key={categoryIndex}>
            <h3>{category.category}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div className="skill-card" key={skillIndex}>
                  <div className="skill-icon">
                    {typeof skill.icon === 'string' ? (
                      <img 
                        src={`/assets/icons/${skill.icon}.svg`} 
                        alt={skill.name}
                        className="custom-icon"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.setAttribute('data-fallback', 'true');
                        }}
                      />
                    ) : Array.isArray(skill.icon) ? (
                      <div className="combined-icons">
                        {skill.icon.map((icon, i) => (
                          <FontAwesomeIcon key={i} icon={icon} />
                        ))}
                      </div>
                    ) : (
                      <FontAwesomeIcon icon={skill.icon} />
                    )}
                  </div>
                  <h4 className="skill-name">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;