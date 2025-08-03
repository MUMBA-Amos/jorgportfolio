import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Design",
      description: "Creating beautiful, responsive websites that engage users and drive results.",
      icon: "💻"
    },
    {
      id: 2,
      title: "SEO Marketing",
      description: "Optimizing your online presence to rank higher in search results.",
      icon: "🔍"
    },
    {
      id: 3,
      title: "Video Editing",
      description: "Professional video content that tells your story and captivates audiences.",
      icon: "🎬"
    },
    {
      id: 4,
      title: "Product Design",
      description: "User-centered design solutions that solve real problems.",
      icon: "🎨"
    },
    {
      id: 5,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that grow your business online.",
      icon: "📈"
    },
    {
      id: 6,
      title: "Brand Strategy",
      description: "Building memorable brands that connect with your target audience.",
      icon: "🏆"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="services-title">My Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 