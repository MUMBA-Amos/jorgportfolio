import React from 'react';
import './Kiva.css';

const Kiva = () => {
  return (
    <section id="kiva" className="kiva">
      <div className="kiva-container">
        <h2 className="kiva-title">Micro loans for Empowerment</h2>
        <div className="kiva-content">
          <div className="kiva-intro">
            <h3 className="kiva-subtitle">Kiva Lender</h3>
            <p className="kiva-description">
              I am an active lender on Kiva (member since November 5, 2019), where I support micro-entrepreneurs in developing countries. 
              Through carefully selected loans, I believe in enabling people to build their businesses and pursue their dreams—offering 
              empowering capital rather than a handout. This approach reflects my commitment to sustainable impact through entrepreneurship 
              and aligns with my broader values of global equity and personal agency.
            </p>
          </div>
          
          <div className="kiva-cta">
            <a 
              href="https://www.kiva.org/lender/jorgvgaal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="kiva-button"
            >
              💰 View My Kiva Profile
            </a>
          </div>
          
          <div className="kiva-stats">
            <div className="kiva-stat">
              <h4>Member Since</h4>
              <p>November 5, 2019</p>
            </div>
            <div className="kiva-stat">
              <h4>Focus</h4>
              <p>Micro-entrepreneurs in developing countries</p>
            </div>
            <div className="kiva-stat">
              <h4>Approach</h4>
              <p>Empowering capital, not handouts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kiva;
