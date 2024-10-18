import React from "react";
import { LinkedIn, GitHub } from "@mui/icons-material"; // Import MUI icons
import profileImage from "../assets/profile-grey.png"; // Update the path to your image
import "../styles/about.css"; // Import the specific CSS file

function AboutMe() {
  return (
    <section id="about-me" className="section profile">
      <div className="profile-container">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="profile-info">
          <p className="profile-name">Collins Gichohi</p>
          <p className="profile-title">Software Engineer</p>
          <p className="links">
            <a
              href="https://linkedin.com/in/collinsgichohi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn fontSize="small" />
            </a>
            <a
              href="https://github.com/gsnilloC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub fontSize="small" />
            </a>
          </p>
        </div>
      </div>
      <div className="profile-text">
        <h3>About</h3>
        <p className="profile-text-p">
          Hi! I'm Collins, a New Grad Software Engineer who’s always up for a
          challenge. I love turning ideas into code and building projects that
          make a difference. Always learning, always growing!
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
