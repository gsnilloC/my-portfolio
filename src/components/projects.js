import React from "react";
import "../styles/projects.css";
import cyoRugsLogo from "../assets/cyo-rugs.png";
import dropsLogo from "../assets/drops-logo.png";
import carLogo from "../assets/car-logo.gif";
import piLogo from "../assets/pi-logo.png";
import tttLogo from "../assets/ttt-logo.jpeg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { FaReact, FaNodeJs, FaAws, FaJava, FaPython } from "react-icons/fa";
import { SiExpress, SiC, SiLinux, SiMongodb, SiAxios } from "react-icons/si";

function Projects() {
  return (
    <div>
      <section id="project" className="project-section">
        <div className="project-container">
          <div className="experience-text">
            <h2>Projects</h2>
          </div>
          <ProjectDetail
            logo={cyoRugsLogo}
            title="CYO Rugs"
            link="https://cyorugs.vercel.app/"
            timePeriod="September 2024 - Present"
            description="Made a website for a friend's rug business. Customers can browse, purchase, and request custom rugs."
            techLogos={[
              { icon: <FaReact size={20} />, name: "React" },
              { icon: <FaNodeJs size={20} />, name: "Node.js" },
              { icon: <FaAws size={20} />, name: "AWS" },
              { icon: <FaJava size={20} />, name: "Java" },
              { icon: <SiAxios size={20} />, name: "Axios" },
              { icon: <SiExpress size={20} />, name: "Express" },
            ]}
          />
          <ProjectDetail
            logo={dropsLogo}
            title="drops."
            link="https://cyorugs.vercel.app/"
            timePeriod="August 2024 - Present"
            description="Keeps track of sneaker prices from several different platforms and notifies users when a pair is at a certain price."
            techLogos={[
              { icon: <FaReact size={20} />, name: "React" },
              { icon: <FaNodeJs size={20} />, name: "Node.js" },
              { icon: <FaAws size={20} />, name: "AWS" },
              { icon: <FaJava size={20} />, name: "Java" },
              { icon: <SiExpress size={20} />, name: "Express" },
              { icon: <SiMongodb size={20} />, name: "Express" },
            ]}
            timePeriodClass="drops-time-period"
          />
          <ProjectDetail
            logo={carLogo}
            title="Robot Car"
            link="https://cyorugs.vercel.app/"
            timePeriod="January 2024 - May 2024"
            description="Collaborated with a team of 4 to design and implement a self-driving car using C on a Raspberry Pi, integrating ultrasonic and infrared sensors for navigation."
            techLogos={[
              { icon: <SiC size={20} />, name: "C" }, // Add C logo
              { icon: <SiLinux size={20} />, name: "Linux" }, // Add Linux logo
              {
                icon: (
                  <img
                    src={piLogo}
                    alt="Raspberry Pi"
                    style={{ width: 30, height: 30 }}
                  />
                ),
                name: "Raspberry Pi",
              },
            ]}
          />
          <ProjectDetail
            logo={tttLogo}
            title="Tic Tac Toe Bot"
            link="https://cyorugs.vercel.app/"
            timePeriod="November 2023"
            description="Tic-Tac-Toe game using the Minimax algorithm to create an AI opponent that optimally evaluates each potential board state recursively."
            techLogos={[{ icon: <FaPython size={30} />, name: "Python" }]}
          />
        </div>
      </section>
    </div>
  );
}

function ProjectDetail({
  logo,
  title,
  link,
  timePeriod,
  timePeriodClass,
  description,
  techLogos,
}) {
  return (
    <>
      <div className="project-details">
        <div className="project-logo">
          <img src={logo} alt={`${title} Logo`} />
        </div>
        <div className="title">
          <p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
              <ArrowOutwardIcon
                fontSize="medium"
                style={{ verticalAlign: "middle" }}
              />
            </a>
          </p>
          <div className={`project-time-period ${timePeriodClass}`}>
            <p>{timePeriod}</p>
          </div>
        </div>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="project-logos">
        {techLogos.map((tech, index) => (
          <div
            key={index}
            className="tech-logo-container"
            data-name={tech.name}
          >
            {tech.icon}
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
