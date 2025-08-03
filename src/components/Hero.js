import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="name-outline">Jorg</span>
            <span className="name-outline">van Gaal</span>
          </h1>
          <p className="hero-description">
            An international senior leader known for blending innovation with people-centered management. 
            Currently serving as General Manager at Sam Media in Kuala Lumpur, leading multicultural teams 
            to develop cutting-edge digital products for millions of mobile users.
          </p>
          <button className="cta-button">
            View My Experience
          </button>
        </div>
        
        <div className="hero-image">
          <img 
            src="./profile-pic.png" 
            alt="Jorg van Gaal - Professional Headshot" 
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 