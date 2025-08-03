import React from 'react';
import './Reading.css';

const Reading = () => {
  return (
    <section id="reading" className="reading">
      <div className="reading-container">
        <h2 className="reading-title">Reading List</h2>
        <div className="reading-content">
          <div className="reading-intro">
            <p className="reading-description">
              As I mentioned I am (at least try to be) an avid reader with more and less active periods. 
              A lot of business and self improvement books that is in line with my belief in continuous 
              learning and improvement. It requires some curiosity that I am trying to instill in my children as well.
            </p>
            <p className="reading-description">
              If you are curious you can check out the books I read and how I rate them on Goodreads. 
              Feel free to suggest new titles as I am always up for suggestions.
            </p>
          </div>
          
          <div className="reading-cta">
            <a 
              href="https://www.goodreads.com/user/show/YOUR_GOODREADS_ID" 
              target="_blank" 
              rel="noopener noreferrer"
              className="goodreads-button"
            >
              📚 View My Goodreads Profile
            </a>
          </div>
          
          <div className="reading-categories">
            <div className="reading-category">
              <h3>📈 Business & Leadership</h3>
              <p>Books on strategy, management, and organizational development</p>
            </div>
            <div className="reading-category">
              <h3>🧠 Self Improvement</h3>
              <p>Personal development, productivity, and mindset books</p>
            </div>
            <div className="reading-category">
              <h3>🌍 Global Perspective</h3>
              <p>Books about different cultures, travel, and international business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reading; 