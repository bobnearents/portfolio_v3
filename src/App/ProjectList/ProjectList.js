import "./ProjectList.css";
export default function ProjectList(props) {
  /**
   * @example
   * project = {
   *    name: 'cool project',
   *    image: 'path/to/image'
   *    tools: ['list of', 'all tools'],
   *    team: 4, //number of people worked with
   *    duration: 12, //number of months worked on the project
   *    link: 'website.com', //link to the website
   *    description: 'Brief description of project',
   * }
   */
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
        "postgreSQL",
        "AWS",
      ],
      team: 1,
      duration: 24,
      link: "https://nurture-directory.onrender.com/",
      description:
        "I developed a comprehensive full-stack resource directory catering to new mothers in the Virginia area. This directory listed all medical providers essential for their needs. The project's primary objective was to create a minimum viable product (MVP) to support the client's grant applications. After showcasing the website to potential investors and stakeholders, the client successfully secured over $60,000 in grants. Throughout the development process, we diligently worked through user stories to ensure the inclusion of core features that catered to both investors and end-users.",
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
        "This project was a full stack app for a/b testing. I created a database with a server for user data - this is where we implemented the clients a/b testing algorithm. On the frontend we had a user dashboard, and a form to input relevant data. In addition there was an admin dashboard that could view user data and process users form submission.",
    },
    {
      name: "SALT (soulbuffalo)",
      tools: ["React", "bootstrap"],
      team: 1,
      duration: 1,
      description:
        "This was a frontend project. I developed an admin dashboard for their existing app. I used wireframes provided by their designers, I worked closely with their team to ensure the functionality was what they were looking for.",
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
