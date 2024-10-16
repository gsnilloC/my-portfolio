import React from "react";
import profileImage from "../assets/profile.jpg"; // Update the path to your image

function AboutMe() {
  return (
    <section id="about-me" className="section profile">
      <div className="profile-container">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="profile-info">
          <p>Collins Gichohi</p>
          <p>Software Engineer</p>
          <p>
            <a
              href="https://linkedin.com/in/collinsgichohi"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
      <div className="profile-text">
        <h3>About</h3>
        <div>
          Hi, I'm Collins, a software engineer and recent graduate from San
          Francisco State University. I love solving problems through code and
          building impactful projects. In a constant pursuit of improvement.
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
