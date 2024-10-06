// src/components/Hero.js
import React from 'react';
import './Hero.css';
// import aarthi from '../assets/logo.jpg'; // Keeping your logo image

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Left Side: Image */}
      {/* <div className="hero-image">
        <img src={aarthi} alt="Aarthi" />
      </div> */}

      {/* Right Side: Text */}
      <div className="hero-text">
        <h1>Aarthi</h1>
        <p>Front-End Developer & Designer</p>
        <p>
          I create clean and modern web designs with responsive front-end
          development, using the latest technologies like React, JavaScript, and CSS.
        </p>

        {/* Add buttons for interactions if needed */}
        {/* <div className="hero-buttons">
          <a href="#portfolio" className="btn-primary">View Resume</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
