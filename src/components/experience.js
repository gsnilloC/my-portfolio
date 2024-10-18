import React from "react";
import omnidyaLogo from "../assets/omnidya_logo.jpg"; // Update the path to your image
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaJira,
  FaJava,
} from "react-icons/fa";
import { SiMongodb /*SiSpringboot*/ } from "react-icons/si";
import "../styles/experience.css"; // Import the specific CSS file

function Experience() {
  return (
    <div>
      <section id="experience" className="experience-section">
        <div className="experience-container">
          <div className="experience-text">
            <h2>Work Experience</h2>
          </div>
          <div className="experience-details">
            <div className="company-logo">
              <img src={omnidyaLogo} alt="Company Logo" />
            </div>
            <div className="job-title-description">
              <strong>Software Engineer Intern - Omnidya</strong>
              <div className="time-period">
                <p>Mar - Aug 2024</p>
              </div>
            </div>
          </div>
          <div className="job-description">
            <p>
              Collaborated in an Agile environment to develop an Insurance Rater
              for calculating driver premiums. I built RESTful APIs for seamless
              data exchange, optimized AWS Lambda functions, designed test cases
              with Selenium, and gained experience with MongoDB integration.
            </p>
            <div className="tech-logos">
              <div className="tech-logo-container" data-name="React.js">
                <FaReact size={20} />
              </div>
              <div className="tech-logo-container" data-name="Node.js">
                <FaNodeJs size={20} />
              </div>
              <div className="tech-logo-container" data-name="AWS">
                <FaAws size={20} />
              </div>
              <div className="tech-logo-container" data-name="Docker">
                <FaDocker size={20} />
              </div>
              <div className="tech-logo-container" data-name="Jira">
                <FaJira size={20} />
              </div>
              <div className="tech-logo-container" data-name="MongoDB">
                <SiMongodb size={20} />
              </div>
              <div className="tech-logo-container" data-name="Java">
                <FaJava size={20} /> {/* Use FaJava or another alternative */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
