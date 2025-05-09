import React, { useState, useEffect } from 'react';
import { Shield, Clock, MapPin, Sparkles, Check, Crown } from 'lucide-react';
import './Pricing.css';

function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set visibility after component mounts for animation
    setIsVisible(true);
    
    // Optional: Add intersection observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('pricing');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  return (
    <section className="pricing-section" id="pricing">
      {/* Decorative orbs */}
      <div className="decorative-orb-1"></div>
      <div className="decorative-orb-2"></div>
      
      <div className="container">
        {/* Header */}
        <div className={`pricing-header ${isVisible ? '' : 'hidden'}`}>
          <div className="pricing-title-wrapper">
            <Crown size={38} />
            <h2 className="pricing-title">  Pricing & Assurance</h2>
          </div>
          
          <p className="pricing-subtitle">
            Luxury doesn't come cheap — and that's the point. Every ride speaks class, precision, and prestige.
          </p> 
          
          {/* Price tag */}
          <div className="price-tag">
            <p className="price-tag-label">We charge</p>
            <div className="price-tag-value">
              <span className="price-amount">$80</span>
              <span className="price-period">per day</span>
            </div>
          </div>
        </div>
        
        {/* Features */}
        <div className={`features-grid ${isVisible ? '' : 'hidden'}`}>
          <div className="feature-card purple">
            <div className="feature-header">
              <Shield className="feature-icon" size={24} />
              <h3 className="feature-title">Full Coverage Insurance</h3>
            </div>
            <p className="feature-description">
              Drive with confidence knowing you're protected by comprehensive insurance coverage for any unforeseen circumstances.
            </p>
          </div>
          
          <div className="feature-card red">
            <div className="feature-header">
              <Clock className="feature-icon" size={24} />
              <h3 className="feature-title">24/7 Roadside Assistance</h3>
            </div>
            <p className="feature-description">
              Our dedicated team is always on standby to assist you whenever and wherever you need help on the road.
            </p>
          </div>
          
          <div className="feature-card blue">
            <div className="feature-header">
              <MapPin className="feature-icon" size={24} />
              <h3 className="feature-title">Real-time Vehicle Tracking</h3>
            </div>
            <p className="feature-description">
              Advanced GPS technology allows you to monitor your vehicle's location and status through our exclusive mobile app.
            </p>
          </div>
          
          <div className="feature-card green">
            <div className="feature-header">
              <Sparkles className="feature-icon" size={24} />
              <h3 className="feature-title">Complimentary Sanitization</h3>
            </div>
            <p className="feature-description">
              Every vehicle undergoes thorough cleaning and sanitization before delivery, ensuring a pristine experience.
            </p>
          </div>
        </div>
        
        {/* Additional Benefits */}
        <div className={`benefits-section ${isVisible ? '' : 'hidden'}`}>
          <h3 className="benefits-title">Additional Premium Benefits</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <Check className="benefit-icon" size={20} />
              <p>Free airport pickup & drop-off</p>
            </div>
            
            <div className="benefit-item">
              <Check className="benefit-icon" size={20} />
              <p>No hidden fees</p>
            </div>
            <div className="benefit-item">
              <Check className="benefit-icon" size={20} />
              <p>Priority booking status</p>
            </div>
            <div className="benefit-item">
              <Check className="benefit-icon" size={20} />
              <p>Valet service available</p>
            </div>
            <div className="benefit-item">
              <Check className="benefit-icon" size={20} />
              <p>Digital concierge access</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className={`cta-section ${isVisible ? '' : 'hidden'}`}>
          <button className="cta-button">
            Reserve Your Luxury Experience
          </button>
          
          <p className="pricing-note">
            <Crown className="crown-icon" size={16} />
            And no — kings do not bargain.
            <Crown className="crown-icon" size={16} />
          </p>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;