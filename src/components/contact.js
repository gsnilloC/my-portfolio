import React from "react";
import "../styles/contact.css"; // Import the specific CSS file
import resume from "../assets/Gichohi_Collins_Resume.pdf"; // Update with the correct file name

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Connect</h2>
      <ul className="contact-links">
        <li>
          GitHub
          <a
            href="https://github.com/gsnilloC"
            target="_blank"
            rel="noopener noreferrer"
          >
            @gsnilloC
          </a>
        </li>
        <li>
          LinkedIn
          <a
            href="https://linkedin.com/in/collinsgichohi"
            target="_blank"
            rel="noopener noreferrer"
          >
            @collinsgichohi
          </a>
        </li>
        <li>
          Wellfound
          <a
            href="https://wellfound.com/u/collins-gichohi"
            target="_blank"
            rel="noopener noreferrer"
          >
            @collins-gichohi
          </a>
        </li>
        <li>
          Resume
          <a href={resume} target="_blank" rel="noopener noreferrer">
            View
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
