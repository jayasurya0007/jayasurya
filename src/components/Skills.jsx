import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3/SASS", level: 85 },
        { name: "JavaScript/ES6+", level: 90 },
        { name: "React", level: 85 },
        { name: "Vue.js", level: 75 },
        { name: "TypeScript", level: 80 }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express", level: 65 },
        { name: "MongoDB", level: 60 },
        { name: "RESTful APIs", level: 75 }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Webpack/Vite", level: 80 },
        { name: "Responsive Design", level: 90 },
        { name: "UI/UX Design", level: 75 },
        { name: "Testing (Jest, React Testing Library)", level: 70 }
      ]
    }
  ];

  return (
    <div className="skills-container">
      <h2 className="section-title">My Skills</h2>
      
      <div className="skills-content">
        {skillCategories.map((category, categoryIndex) => (
          <div className="skill-category" key={categoryIndex}>
            <h3>{category.category}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div className="skill-card" key={skillIndex}>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
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