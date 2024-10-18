import React from "react";
import resume from "../assets/Gichohi_Collins_Resume.pdf"; // Import the resume

function Navbar() {
  return (
    <nav
      style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}
    >
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "white",
          color: "black",
          textDecoration: "none",
          padding: "10px 20px",
          border: "1px solid black",
          borderRadius: "10px",
          fontSize: "1rem", // Increase the font size
        }}
      >
        My Resume
      </a>
    </nav>
  );
}

export default Navbar;
