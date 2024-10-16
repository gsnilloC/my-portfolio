import React from "react";
import companyLogo from "../assets/profile.jpg"; // Add the path to your company logo

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
              <img src={companyLogo} alt="Company Logo" />
            </div>
            <div className="experience-details">
              <div className="position">
                <h2>Omnidya</h2>
                <div className="job-title">
                  <strong>Full-Stack Software Engineering Intern</strong>
                </div>
                <div className="job-description">
                  <ul>
                    <p>
                      Collaborated in an Agile environment to design and develop
                      an Insurance Rater. Developed RESTful APIs, optimized AWS
                      Lambda functions, and managed CI/CD pipelines with Docker.
                    </p>
                  </ul>
                </div>
              </div>
              <div className="time-period">
                <p>March - August 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
