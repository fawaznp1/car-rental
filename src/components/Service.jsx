import React, { useState, useRef, useEffect } from 'react';
import './Service.css';

// SVG Icons for services - you can replace these with your own icons/images
const CarIcon = () => (
  <svg className="service-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"></path>
    <circle cx="6.5" cy="16.5" r="2.5"></circle>
    <circle cx="16.5" cy="16.5" r="2.5"></circle>
  </svg>
);

const ClockIcon = () => (
  <svg className="service-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const MapIcon = () => (
  <svg className="service-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
    <line x1="8" y1="2" x2="8" y2="18"></line>
    <line x1="16" y1="6" x2="16" y2="22"></line>
  </svg>
);

const ShieldIcon = () => (
  <svg className="service-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="M9 12l2 2 4-4"></path>
  </svg>
);

const PriceIcon = () => (
  <svg className="service-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const SupportIcon = () => (
  <svg className="service-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Feature data
  const features = [
    {
      id: 0,
      icon: <CarIcon />,
      title: "Premium Vehicle Fleet",
      description: "Choose from our diverse selection of well-maintained vehicles, from compact cars to luxury SUVs, perfect for any occasion or group size."
    },
    {
      id: 1,
      icon: <ClockIcon />,
      title: "Flexible Rental Periods",
      description: "Whether you need a car for a few hours or several weeks, our flexible rental options are designed to suit your schedule."
    },
    {
      id: 2,
      icon: <MapIcon />,
      title: "Convenient Locations",
      description: "Pick up and drop off your vehicle at multiple convenient locations throughout the city, with optional delivery to your doorstep."
    },
    {
      id: 3,
      icon: <ShieldIcon />,
      title: "Comprehensive Insurance",
      description: "Drive with peace of mind knowing you're covered with our comprehensive insurance options that protect both you and your rental."
    },
    {
      id: 4,
      icon: <PriceIcon />,
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. Our transparent pricing ensures you know exactly what you're paying for before booking."
    },
    {
      id: 5,
      icon: <SupportIcon />,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available around the clock to assist with any questions or issues that may arise during your rental."
    }
  ];

  // Function to change active feature every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredCard === null) {
        setActiveFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1));
      }
    }, 2000);
    
    return () => clearInterval(interval);
  }, [features.length, hoveredCard]);

  return (
    <section ref={sectionRef} className="services-section" id="service">
      <div className="services-background">
        <div className="services-blob-1"></div>
        <div className="services-blob-2"></div>
        <div className="services-blob-3"></div>
      </div>
      
      <div className={`services-container ${isVisible ? 'visible' : ''}`}>
        <div className={`services-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="services-title">Our Services</h2>
          <div className="services-divider"></div>
          <p className="services-subtitle">Experience premium transportation solutions tailored to your needs</p>
        </div>
        
        <div className="services-tabs">
          {features.map((feature, index) => (
            <button 
              key={feature.id}
              className={`services-tab ${activeFeature === index ? 'active' : ''}`}
              onClick={() => setActiveFeature(index)}
            >
              <span className="tab-icon">{feature.icon}</span>
              <span className="tab-text">{feature.title}</span>
            </button>
          ))} 
        </div>
        
        <div className="services-layout">
          <div className={`services-grid ${isVisible ? 'visible' : ''}`}>
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                className={`service-card ${isVisible ? 'visible' : ''} ${activeFeature === index ? 'highlighted' : ''}`} 
                style={{ transitionDelay: `${(index % 6) * 0.1 + 0.3}s` }}
                onMouseEnter={() => {
                  setActiveFeature(index);
                  setHoveredCard(index);
                }}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="service-icon-container">
                  {feature.icon}
                </div>
                <h3 className="service-title">{feature.title}</h3>
                <p className="service-description">{feature.description}</p>
                <div className="service-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>
        
       {/*  <div className={`services-cta ${isVisible ? 'visible' : ''}`}>
          <div className="services-cta-content">
            <div className="cta-columns">
              <div className="cta-info">
                <h3 className="services-cta-title">Ready to Experience Urban Drive?</h3>
                <p className="services-cta-text">Join thousands of satisfied customers who trust us for their transportation needs.</p>
                <ul className="cta-benefits">
                  <li>Easy online booking</li>
                  <li>No hidden fees</li>
                  <li>Free cancellation up to 24 hours</li>
                  <li>Loyalty rewards program</li>
                </ul>
              </div>
              <div className="cta-action">
                <button className="services-cta-button">Book Now</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;