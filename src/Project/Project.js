import { ArrowLeftOutlined } from "@ant-design/icons";
import "./Project.css";

export default function Project(props) {
  const { team, duration, name, description, link } = props.project;
  const calculateYears = (months) => {
    return months / 12;
  };
  return (
    <div className="project-container">
      <button onClick={props.clearProject}>
        <ArrowLeftOutlined />
      </button>
      <h2>{name}</h2>
      <p>
        {description}
        {team > 1
          ? ` I worked on a team of ${team} people,`
          : " I worked on my own,"}
        {` for ${
          duration > 12
            ? calculateYears(duration) + " years."
            : duration + " months."
        }`}
        {link && <a href={link}> Check it out!</a>}
      </p>
      <div className="tool-list">
        <h3>Tools used:</h3>
        <ul>
          {props.project.tools.map((tool, i) => {
            return <li key={i}>{tool}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
