import React from "react";
import sfLogo from "../assets/sf-state.png";
import "../styles/education.css"; // Import the specific CSS file

function Education() {
  return (
    <div>
      <section id="experience" className="education-section">
        <div className="education-container">
          <div className="experience-text">
            <h2>Education</h2>
          </div>
          <div className="education-details">
            <div className="school-logo">
              <img src={sfLogo} alt="School Logo" />
            </div>
            <div className="school">
              <p>San Francisco State University</p>
              <div className="school-time-period">
                <p>Spring 2024</p>
              </div>
            </div>
          </div>
          <div className="degree">
            <li>Bachelor's of Science in Computer Science</li>
            <li>Graduated with Honors</li>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
