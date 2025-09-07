import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-background-text">
            About Jorg
          </div>
          <div className="about-text">
            <h2 className="about-title">About Jorg.</h2>
            
            <div className="about-sections">
              <div className="about-section">
                <div className="section-image">
                  <img 
                    src="./professional-journey.jpg" 
                    alt="Jorg van Gaal - Professional Headshot" 
                    className="section-img"
                  />
                </div>
                <h3 className="section-heading">Professional Journey</h3>
                <p className="about-description">
                  I'm Jorg – a pragmatic leader, problem-solver, and someone who believes that work should have meaning beyond metrics. 
                  I've spent the last 15+ years leading teams and driving change across Africa, Asia, and Europe in industries ranging 
                  from digital media to solar energy, logistics, and consulting.
                </p>
                <p className="about-description">
                  I currently serve as General Manager at Sam Media in Kuala Lumpur, where I lead a diverse and talented team delivering 
                  digital products to millions of users worldwide. Before this, I helped scale solar companies in Zambia and Senegal, 
                  overhauled management structures in a Zambian retail giant, and gained experience in business consultancy and project 
                  management in West-Europe.
                </p>
              </div>

              <div className="about-section">
                <div className="section-image">
                  <img 
                    src="./leadership-style.JPG" 
                    alt="Jorg van Gaal - Leadership in Action" 
                    className="section-img"
                  />
                </div>
                <h3 className="section-heading">Leadership Style</h3>
                <p className="about-description">
                  Colleagues often describe me as direct but empathetic. I'm not one to dance around issues. I believe in honesty, 
                  clarity, integrity, and creating environments where people feel safe to contribute, experiment, and grow. Creating 
                  'Psychological Safety' in companies and teams is one of my top priorities!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 