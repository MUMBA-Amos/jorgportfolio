import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Society of Human Resource Management Sr Certified Professional (SHRM-SCP)",
      year: "2025",
      description: "Senior-level HR certification demonstrating expertise in strategic HR management and leadership."
    },
    {
      id: 2,
      title: "Adult and Pediatric First Aid/CPR/AED",
      year: "2024",
      description: "Emergency response certification for adult and pediatric first aid, CPR, and AED use."
    },
    {
      id: 3,
      title: "LIFO® Certified Trainer",
      year: "2022",
      description: "Certified trainer for Life Orientations (LIFO) methodology through Bcon Business Consultants Inc."
    },
    {
      id: 4,
      title: "ECM (Enterprise Content Management) Master",
      year: "2010",
      description: "Advanced certification in enterprise content management systems and strategies."
    },
    {
      id: 5,
      title: "PRINCE2 Foundation",
      year: "2009",
      description: "Project management methodology certification for structured project delivery."
    },
    {
      id: 6,
      title: "ISO 9001:2008 Quality Management & Internal Auditing",
      year: "2009",
      description: "Quality management system certification and internal auditing expertise."
    }
  ];

  const onlineCourses = [
    {
      id: 1,
      title: "Financial Markets",
      institution: "Yale University",
      description: "Comprehensive understanding of financial markets and investment strategies."
    },
    {
      id: 2,
      title: "Innovation Management",
      institution: "Haas School of Business, UC Berkeley",
      description: "Advanced strategies for driving innovation in business environments."
    },
    {
      id: 3,
      title: "Leadership Development",
      institution: "HarvardX",
      description: "Executive leadership skills and organizational management principles."
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <h2 className="certifications-title">Certifications & Professional Development</h2>
        <p className="certifications-intro">
          Continuous learning and professional development are core to my leadership philosophy. 
          I actively pursue certifications and courses that enhance my strategic thinking, 
          people management, and technical capabilities.
        </p>
        
        <div className="certifications-content">
          <div className="certifications-section">
            <h3 className="section-title">Professional Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert) => (
                <div key={cert.id} className="certification-card">
                  <div className="certification-header">
                    <h4 className="certification-title">{cert.title}</h4>
                    <span className="certification-year">{cert.year}</span>
                  </div>
                  <p className="certification-description">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="certifications-section">
            <h3 className="section-title">Online Courses & Continuous Learning</h3>
            <div className="courses-grid">
              {onlineCourses.map((course) => (
                <div key={course.id} className="course-card">
                  <div className="course-header">
                    <h4 className="course-title">{course.title}</h4>
                    <span className="course-institution">{course.institution}</span>
                  </div>
                  <p className="course-description">{course.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="certifications-section">
            <h3 className="section-title">Languages & Technical Skills</h3>
            <div className="skills-overview">
              <div className="languages">
                <h4 className="skills-subtitle">Languages</h4>
                <div className="language-list">
                  <span className="language-item">
                    <strong>Dutch</strong> (Native)
                  </span>
                  <span className="language-item">
                    <strong>English</strong> (Full Professional)
                  </span>
                  <span className="language-item">
                    <strong>German</strong> (Intermediate)
                  </span>
                  <span className="language-item">
                    <strong>French</strong> (Intermediate)
                  </span>
                </div>
              </div>
              <div className="technical-skills">
                <h4 className="skills-subtitle">Technical Proficiency</h4>
                <p className="tech-description">
                  All-round computer skills with expertise in business software, project management tools, 
                  and early adoption of AI technologies for enhanced productivity and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 