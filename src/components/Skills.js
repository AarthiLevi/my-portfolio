// src/components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-list">
        <div className="skill-item">HTML5</div>
        <div className="skill-item">CSS3</div>
        <div className="skill-item">JavaScript</div>
        <div className="skill-item">React</div>
        <div className="skill-item">Node.js</div>
        <div className="skill-item">Figma</div>
      </div>
    </section>
  );
};

export default Skills;
