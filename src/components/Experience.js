import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "General Manager",
      company: "Sam Media",
      location: "Kuala Lumpur, Malaysia",
      period: "Current",
      description: "Leading multicultural teams to develop cutting-edge digital products for millions of mobile users worldwide. Driving innovation and operational excellence in digital media."
    },
    {
      id: 2,
      title: "Senior Leadership Roles",
      company: "Solar Energy Companies",
      location: "Zambia & Senegal",
      period: "Previous",
      description: "Helped scale solar companies across Africa, implementing sustainable energy solutions and building operational infrastructure."
    },
    {
      id: 3,
      title: "Management Consultant",
      company: "Retail Giant",
      location: "Zambia",
      period: "Previous",
      description: "Overhauled management structures and operational processes for a major Zambian retail company, driving efficiency and growth."
    },
    {
      id: 4,
      title: "Business Consultant",
      company: "Various Clients",
      location: "West Europe",
      period: "Previous",
      description: "Gained extensive experience in business consultancy and project management across diverse industries and markets."
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="experience-title">Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-role">{exp.title}</h3>
                <div className="experience-meta">
                  <span className="experience-company">{exp.company}</span>
                  <span className="experience-location">{exp.location}</span>
                  <span className="experience-period">{exp.period}</span>
                </div>
              </div>
              <p className="experience-description">{exp.description}</p>
            </div>
          ))}
        </div>
        <div className="experience-cta">
          <a 
            href="https://www.canva.com/design/DAGqllmsHn0/bg-qpppFhyGQJGRPtUpI_w/view?utm_content=DAGqllmsHn0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h24d078d25e" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cv-button"
          >
            View Full CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience; 