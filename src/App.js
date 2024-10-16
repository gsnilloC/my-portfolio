import React from "react";
import "./components/css/App.css";
import Navbar from "./components/navbar";
import AboutMe from "./components/about";
import Education from "./components/education";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Experience from "./components/experience";
import Projects from "./components/projects"; // Import the Projects component
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function App() {
  const scrollToSection = (direction) => {
    const sections = document.querySelectorAll(".section");
    const currentScroll = window.scrollY;
    let targetSection;

    if (direction === "up") {
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop < currentScroll) {
          targetSection = sections[i];
          break;
        }
      }
    } else {
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop > currentScroll) {
          targetSection = sections[i];
          break;
        }
      }
    }

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="content-container">
        <main className="App-main">
          <AboutMe />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
      <div className="navigation-arrows">
        <ArrowUpwardIcon onClick={() => scrollToSection("up")} />
        <ArrowDownwardIcon onClick={() => scrollToSection("down")} />
      </div>
    </div>
  );
}

export default App;
