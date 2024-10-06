// src/components/About.js
import React from 'react';
import './About.css';
// import topright from '../assets/topright.jpeg';  // Image for the top-right
// import botleft from '../assets/botleft.jpeg';  // Image for the bottom-left

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-wrapper">
        {/* About Content Box */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi, I’m Aarthi, a passionate and creative front-end developer and designer with experience 
            in building visually engaging websites and user interfaces.
          </p>
          <p>
            I specialize in HTML, CSS, and have a strong foundation in creating interactive designs using Figma. 
            I also have experience working with Unity for game development and immersive experiences.
          </p>
          <p>
            I enjoy combining my technical skills and design expertise to bring ideas to life, whether 
            it's a website, app, or digital experience. My focus is on clean, responsive designs 
            and seamless user experiences.
          </p>
        </div>

        {/* Decorative Images */}
        {/* <img src={topright} alt="Decorative top-right" className="top-right-image" />
        <img src={botleft} alt="Decorative bottom-left" className="bottom-left-image" /> */}
      </div>
    </section>
  );
};

export default About;
