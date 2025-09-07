import React, { useState } from 'react';
import './BeyondWork.css';

const BeyondWork = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const activities = [
    {
      id: 1,
      // icon: "🏃‍♂️",
      title: "Ultra Running",
      description: "Challenging myself in the Malaysian jungle",
      details: "Pushing physical and mental limits through endurance running in challenging terrain.",
      image: "./running-activity.JPG"
    },
    {
      id: 2,
      // icon: "🚴‍♂️",
      title: "Cycling",
      description: "Exploring mountains and new routes",
      details: "Discovering new perspectives while cycling through diverse landscapes and challenging climbs.",
      image: "./cycling-activity.JPG"
    },
    {
      id: 3,
      // icon: "✈️",
      title: "Travel",
      description: "Family adventures and cultural exploration",
      details: "Creating lasting memories with family while immersing in different cultures and experiences.",
      image: "./travel-activity.JPG"
    },
    {
      id: 4,
      // icon: "🌿",
      title: "Nature",
      description: "Staying grounded in the outdoors",
      details: "Finding balance and perspective through connection with natural environments.",
      image: "./nature-activity.JPG"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="beyond-work" className="beyond-work">
      <div className="beyond-work-container">
        <h2 className="beyond-work-title">Beyond Work</h2>
        <div className="beyond-work-content">
          <div className="beyond-work-text">
            <p className="beyond-work-description">
              Beyond work, I'm a lifelong explorer. Travel, sports, and nature keep me grounded. Whether it's running an ultra in 
              the Malaysian jungle, cycling through the mountains, or short term travels with my family, I try to keep life dynamic 
              and full of perspective.
            </p>
            <p className="beyond-work-description">
              Those passions shape my work too—I naturally gravitate to roles and cultures that blend adventure with ambition.
            </p>
          </div>
          
          <div className="beyond-work-carousel">
            <div className="carousel-container">
              <div 
                className="carousel-track" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {activities.map((activity, index) => (
                  <div key={activity.id} className="carousel-slide">
                    <div className="activity-card">
                      {activity.image && (
                        <div className="activity-image">
                          <img 
                            src={activity.image} 
                            alt={`${activity.title} - ${activity.description}`}
                            className="activity-img"
                          />
                        </div>
                      )}
                      <div className="activity-content">
                        <span className="activity-icon">{activity.icon}</span>
                        <h3 className="activity-title">{activity.title}</h3>
                        <p className="activity-description">{activity.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="carousel-button prev" onClick={prevSlide}>
                ‹
              </button>
              <button className="carousel-button next" onClick={nextSlide}>
                ›
              </button>
            </div>
            
            <div className="carousel-dots">
              {activities.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondWork; 