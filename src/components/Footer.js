import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Jorg van Gaal</h3>
            <p className="footer-description">
              International Senior Leader & General Manager
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact</h4>
            <p className="footer-contact">jorgvgaal@gmail.com</p>
            <p className="footer-contact">+60 17-630 5409</p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Connect</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/jorgvangaal/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="https://wa.me/60176305409" target="_blank" rel="noopener noreferrer" className="social-link">WhatsApp</a>
              <a href="mailto:jorgvgaal@gmail.com" className="social-link">Email</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © 2024 Jorg van Gaal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 