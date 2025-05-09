import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './About.css';
import abi from '../images/about1.jpg'
  const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

   const navigate = useNavigate();

   const scrollTo = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.3 }
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

  return (
    <section ref={sectionRef} className="about-section" id='about'>
      {/* Background animated elements */}
      <div className="about-background">
        <div className="about-blob-1"></div>
        <div className="about-blob-2"></div>
      </div>
      
      <div className={`about-container ${isVisible ? 'visible' : ''}`}>
        <div className={`about-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="about-title text-center">About Us</h2>
          <div className="about-divider"></div>
        </div> 
        
        <div className="about-content">
          <div className={`about-text ${isVisible ? 'visible' : ''}`}>
            <p>
              Welcome to <span className="about-highlight">Urban Drive</span>! We're not just another transportation service - we're your travel partners committed to making every journey memorable.
            </p>
            
            <p>
              Whether you're dashing to a meeting or planning a road trip with friends, our diverse fleet and friendly team have got you covered. We believe getting there should be half the fun!
            </p>
            
            <p>
              Our passion is simple: connecting people to places with style, comfort, and a touch of excitement.
            </p>
            
            <div className="about-buttons">
              <button className="about-button about-button-primary"  onClick={() => scrollTo('team')}>
                Meet Our Team
              </button>
              <button className="about-button about-button-secondary "  onClick={() => scrollTo('service')}>
                Our Services
              </button>
            </div>
          </div>
          
          <div className={`about-image-container ${isVisible ? 'visible' : ''}`}>
            <div className="about-image-bg"></div>
            <img 
              src={abi}
              alt="About Urban Drive" 
              className="about-image"
            />
            <div className="about-badge">
              Since 2002
            </div>
          </div>
        </div>
        
        <div className={`about-stats ${isVisible ? 'visible' : ''}`}>
          {[
            { number: '5K+', label: 'Happy Customers' },
            { number: '20+', label: 'Available Vehicles' },
            { number: '100%', label: 'Satisfaction Rate' },
            { number: '24/7', label: 'Customer Support' }
          ].map((stat, index) => (
            <div key={index} className="about-stat">
              <h3 className="about-stat-number">{stat.number}</h3>
              <p className="about-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;