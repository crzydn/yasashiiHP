import React from 'react';
import './HeroSection.css'; // Assuming you will create a CSS file for styling

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-image">
        {/* Replace with your hero image URL */}
        <img src="URL_TO_YOUR_HERO_IMAGE" alt="Hero" />
      </div>
      <div className="hero-content">
        <h1>Your Main Value Proposition</h1>
        <p>Brief description highlighting the benefits of your product or service.</p>
        <div className="cta-buttons">
          <button className="cta-button">Get Started</button>
          <button className="cta-button">Learn More</button>
        </div>
        <div className="feature-cards">
          <div className="feature-card">
            <h2>Feature 1</h2>
            <p>Description of Feature 1</p>
          </div>
          <div className="feature-card">
            <h2>Feature 2</h2>
            <p>Description of Feature 2</p>
          </div>
          <div className="feature-card">
            <h2>Feature 3</h2>
            <p>Description of Feature 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;