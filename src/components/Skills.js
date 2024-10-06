import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJava, FaReact, FaFigma } from 'react-icons/fa';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-list">
        <div className="skill-item">
          <FaHtml5 className="skill-icon" />
          <h3>HTML5</h3>
          <div className="skill-level">
            <div className="progress-bar" style={{ width: '90%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <FaCss3Alt className="skill-icon" />
          <h3>CSS3</h3>
          <div className="skill-level">
            <div className="progress-bar" style={{ width: '85%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <FaJava className="skill-icon" />
          <h3>Java</h3>
          <div className="skill-level">
            <div className="progress-bar" style={{ width: '75%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <FaReact className="skill-icon" />
          <h3>React</h3>
          <div className="skill-level">
            <div className="progress-bar" style={{ width: '80%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <FaFigma className="skill-icon" />
          <h3>Figma</h3>
          <div className="skill-level">
            <div className="progress-bar" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
