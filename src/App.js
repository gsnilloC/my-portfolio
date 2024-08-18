import React from "react";
import "./components/css/App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer"; // Import the Footer component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Section id="home" title="Home" />
        <Section id="about" title="About" />
        <Section id="skills" title="Skills" />
        <Section id="contact" title="Contact" />
      </main>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
}

const Section = ({ id, title }) => {
  return (
    <div id={id} className="section">
      <h1>{title}</h1>
      <p>This is the {title} section.</p>
    </div>
  );
};

export default App;
