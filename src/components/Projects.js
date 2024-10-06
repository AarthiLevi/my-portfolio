import React from 'react';
import './Projects.css';

// Import your project images
import myproject1 from '../assets/project1.png'; // Adjust the path if necessary
import myproject2 from '../assets/project2.png'; // Adjust the path if necessary
import myproject3 from '../assets/project3.png'; 
import myproject4 from '../assets/project4.png'; // Adjust the path if necessary

const Projects = () => {
  // Function to handle button click and redirect to the GitHub project link
  const handleButtonClick = (url) => {
    window.open(url, "_blank", "noopener noreferrer"); // Open in a new tab
  };

  // Function to handle the folder button click
  const handleFolderClick = (folderUrl) => {
    window.open(folderUrl, "_blank", "noopener noreferrer"); // Open in a new tab
  };

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="project-grid">
        {/* Project 1 */}
        <div className="project-item">
          <img src={myproject1} alt="Project 1" />
          <h3>OMNIFOOD</h3>
          <p>A healthy meal delivered to your door, every single day.</p>
          <div className="button-group">
            <button onClick={() => handleButtonClick('https://github.com/AarthiLevi/react-pro/blob/main/omifood1.html')}>
              View Source
            </button>
            <button onClick={() => handleFolderClick('https://github.com/AarthiLevi/react-pro/tree/main/omnifood-image')}>
              View Images
            </button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-item">
          <img src={myproject2} alt="Project 2" />
          <h3>CHAIRS</h3>
          <p>Every chair we build is a testament to our passion for perfection and  everyday comfort.</p>
          <div className="button-group">
            <button onClick={() => handleButtonClick('https://github.com/AarthiLevi/react-pro/blob/main/CHAIRS.html')}>
              View Source
            </button>
            <button onClick={() => handleFolderClick('https://github.com/AarthiLevi/react-pro/tree/main/chairs-image')}>
              View Images
            </button>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-item">
          <img src={myproject3} alt="Project 3" />
          <h3>PHOTOGRAPHY</h3>
          <p>Capturing life's most beautiful moments with artistic vision and passion through stunning photography.</p>
          <div className="button-group">
            <button onClick={() => handleButtonClick('https://github.com/AarthiLevi/react-pro/blob/main/PHOTOWEBSITE.html')}>
              View Source
            </button>
            <button onClick={() => handleFolderClick('https://github.com/AarthiLevi/react-pro/tree/main/photoweb-image')}>
              View Images
            </button>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-item">
          <img src={myproject4} alt="Project 4" />
          <h3>DESIGN PORTFOLIO</h3>
          <p>Showcasing a curated collection of my creative work, blending artistry.</p>
          <div className="button-group">
            <button onClick={() => handleButtonClick('https://github.com/AarthiLevi/react-pro/blob/main/PORTFOLIODESIGN.html')}>
              View Source
            </button>
            <button onClick={() => handleFolderClick('https://github.com/AarthiLevi/react-pro/tree/main/portfolio-image')}>
              View Images
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
