import "./ProjectList.css";
export default function ProjectList(props) {
  const professionalProjects = [
    {
      name: "BatchGeo",
      tools: [
        "PHP",
        "jQuery",
        "vanilla JavaScript",
        "karma",
        "mustache",
        "handlebars",
        "google maps api",
        "node.js",
        "express",
        "jsDocs",
      ],
      team: 5,
      duration: 30,
      link: "https://batchgeo.com/",
      description:
        "I worked on bugs, created new features, and helped to modernize legacy code. Tasks were prioritized by the CEO on github issues. Every component was fully tested using karma unit tests, and were documented using jsDocs.",
    },
    {
      name: "Nurture",
      tools: [
        "React",
        "AntD UI library",
        "node.js",
        "express",
        "PostgreSQL",
        "AWS S3",
      ],
      team: 1,
      duration: 12,
      link: "https://nurture-client.onrender.com/",
      description:
        "This project was a full resource directory; listing all medical providers in the virginia area for new mothers. The client wanted an MVP in order to apply for grants; after showcasing the website she was granted $20,000. We worked through user stories in order to develop core features for investors and users alike.",
    },
    {
      name: "BreastfeedLA",
      tools: ["WordPress", "React", "google maps api", "node.js", "express"],
      team: 2,
      duration: 12,
      link: "http://www.breastfeedla.org/resources-map/",
      description:
        "This project converted their resource directory to react in order to achieve more intricate search capabilities. I added a second view for the resource directory, in addition to doing maintenance on their wordpress website.",
    },
    {
      name: "Ozzie",
      tools: ["Firebase", "React", "SQL", "AntD UI library", "node.js"],
      team: 2,
      duration: 8,
      description:
        "This project was a full stack app for a/b testing. Created a database with a server for user data - this is where we implemented the clients a/b testing algorithm. On the frontend we had a user dashboard, and a form to input relevant data. In addition there was an admin dashboard that could view user data and process users form submission.",
    },
    {
      name: "SALT (soulbuffalo)",
      tools: ["React", "bootstrap"],
      team: 1,
      duration: 1,
      description:
        "This was a quick frontend project. They wanted an admin dashboard for an already functioning app.",
    },
  ];
  return (
    <div className="project-list-container">
      <h2>Portfolio:</h2>
      <ul>
        {professionalProjects.map((project, i) => {
          return (
            <li key={i}>
              <a
                href=""
                onClick={(e) => {
                  props.setProject(project, e);
                }}
              >
                {project.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
