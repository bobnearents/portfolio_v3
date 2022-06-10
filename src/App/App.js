import Header from "../Header/Header";
import "./App.css";
import ProjectList from "./ProjectList/ProjectList";
import logo from "../assets/logo-opaque.png";
import { useState } from "react";
import Project from "../Project/Project";

const aboutText =
  "I'm a freelance web developer with over 3 years of professional experience. In any situation of life I strive to be learning something. Whether it be rules to a new board game, or the latest Javascript library. I thrive when I'm working with a team of passionate people who care about the quality of their work.";

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
                I'm looking for work! Check out my <a href="">resume</a> or just
                send me an <a href="mailto:bobnearents@gmail.com">email</a>
              </p>
            </div>
            <p className="about-me">{aboutText}</p>
            <ProjectList setProject={setProject} />
          </div>
        )}
        <img id="logo" src={logo} />
      </div>
    </>
  );
}

export default App;
