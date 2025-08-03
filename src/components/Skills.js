import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      category: "Leadership",
      skills: [
        "Team Management",
        "Strategic Planning",
        "Change Management",
        "Cross-cultural Leadership",
        "Emotional Intelligence"
      ]
    },
    {
      id: 2,
      category: "Business",
      skills: [
        "Process Optimization",
        "Business Development",
        "Project Management",
        "Consulting",
        "Operations Management"
      ]
    },
    {
      id: 3,
      category: "Industries",
      skills: [
        "Digital Media",
        "Solar Energy",
        "Logistics",
        "Retail",
        "Consulting"
      ]
    },
    {
      id: 4,
      category: "Personal",
      skills: [
        "Adaptability",
        "Problem Solving",
        "Direct Communication",
        "Mentoring",
        "Global Perspective"
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills & Competencies</h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 