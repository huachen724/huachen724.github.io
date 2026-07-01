import "./Projects.css";

const PROJECTS = [
  {
    title: "LoLMate",
    meta: "Personal Project",
    description:
      "A peer-review platform for League of Legends teammates — Rate My Professor, but for whoever you just got queued with. Search a player to read reviews left by past teammates, or leave one yourself after a game. Can detect when you're heading into a live ranked match and surface reviews for your teammates before the game starts.",
    tags: ["React", "TypeScript", "Express", "PostgreSQL", "Riot API"],
  },
  {
    title: "League Queue History Checker",
    meta: "Personal Project",
    description:
      "A small tool that takes two summoner names and checks recent match history to show how many times the two players have been queued into the same game together.",
    tags: ["React", "TypeScript", "Express", "Riot API"],
  },
  {
    title: "League Match Predictor (Idle Game)",
    meta: "Concept · In Progress",
    description:
      "An idle/incremental game built around live League matches: detect when you're in a game, let you wager a prediction on the outcome, and reward correct calls with currency and upgrades. Still early-stage — more to come.",
    tags: ["Riot API", "Game Design"],
  },
  {
    title: "Beat Buddy",
    meta: "Sept 2021 – Dec 2021",
    description:
      "A full-stack Node.js web app, built with a 3-person team, that helps concertgoers connect with other attendees. Styled the UI with Pug/HTML/CSS and pulled live upcoming shows onto the home page via the Ticketmaster API.",
    tags: ["Node.js", "Pug", "Ticketmaster API"],
  },
  {
    title: "Self-Driving Cars in Urban Environment",
    meta: "May 2021 – Aug 2021",
    description:
      "Lehigh University MTSE research project with a 7-person undergraduate research team. Implemented Google Cartographer with ROS for simultaneous localization and mapping, and ran simulations to collect and analyze Lidar data.",
    tags: ["ROS", "Google Cartographer", "Lidar"],
  },
];

function Projects() {
  return (
    <section className="projects-page">
      <div className="page-card">
        <h1>Projects</h1>
        <p>
          A mix of personal apps I'm building around my hobbies and
          coursework/research projects from college.
        </p>
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-heading">
                <h2>{project.title}</h2>
                <span className="project-meta">{project.meta}</span>
              </div>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
