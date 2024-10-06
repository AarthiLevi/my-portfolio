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
        <p>Web Designer</p>
<p>
  I craft modern and user-friendly designs that elevate brands.
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
