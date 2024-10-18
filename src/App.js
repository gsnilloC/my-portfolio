import React from "react";
import "./styles/App.css";
import Navbar from "./components/navbar";
import AboutMe from "./components/about";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Experience from "./components/experience";
import Projects from "./components/projects"; // Import the Projects component

function App() {
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
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
