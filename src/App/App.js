import Header from "../Header/Header";
import "./App.css";
import ProjectList from "./ProjectList/ProjectList";

import { useState } from "react";
import Project from "../Project/Project";

const aboutText =
  "As a dedicated full-stack web developer with over 4 years of professional experience, I am constantly driven by a desire for continuous learning. I find joy in acquiring knowledge, whether it's mastering the rules of a new board game or staying up-to-date with the latest JavaScript libraries. Collaboration is where I truly thrive, particularly when working with a team of passionate individuals who share a strong commitment to delivering high-quality work.";

function App() {
  const [activeProject, setActiveProject] = useState();

  const setProject = (project, event) => {
    event.preventDefault();

    setActiveProject(project);
  };
  const clearProject = () => {
    setActiveProject(undefined);
  };

  return (
    <>
      <Header />
      <div className="main-container">
        {activeProject ? (
          <Project clearProject={clearProject} project={activeProject} />
        ) : (
          <div className="content">
            <div className="call-to-action">
              <p>
                I'm looking for work! Check out my{" "}
                <a href="https://docs.google.com/document/d/1jeoFNS0MEhHUJuzhA2y7t0Q-4iXezJtKs6PkzYk-dWo/edit?usp=sharing">
                  resume
                </a>{" "}
                or just send me an{" "}
                <a href="mailto:bobnearents@gmail.com">email</a>
              </p>
            </div>
            <p className="about-me">{aboutText}</p>
            <ProjectList setProject={setProject} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
