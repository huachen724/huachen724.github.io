import "./Experience.css";

const EXPERIENCE = [
  {
    title: "AI Full Stack Engineer, Data Intelligence Team",
    company: "Wells Fargo",
    location: "New York, NY",
    period: "Oct 2025 – Present",
    highlights: [
      "Architected a high-priority AI Data Intelligence platform using TypeScript/React and Python (FastAPI) to deliver scalable organizational insights.",
      "Reduced API response latency by 20% by refactoring FastAPI middleware and service integrations.",
      "Built a Playwright/Gherkin test automation framework on HyperExecute, cutting manual QA overhead by 70%.",
      "Hardened security with JWT-based authentication and SonarQube remediation, reaching 75% unit test coverage.",
    ],
  },
  {
    title: "Software Engineer, Counterparty Risk Team",
    company: "Wells Fargo",
    location: "New York, NY",
    period: "July 2024 – Oct 2025",
    highlights: [
      "Built a C#/.NET (WPF) desktop application used by trading desks to automate financial counterparty risk assessments.",
      "Replaced legacy AutoSys job scheduling with a custom Hangfire-based processor, significantly accelerating task execution.",
      "Led full-stack feature delivery and critical bug fixes across the SDLC in an Agile environment for high-availability financial tools.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Wells Fargo",
    location: "Charlotte, NC",
    period: "June 2023 – Aug 2023",
    highlights: [
      "Built an OpenFin application with C#/.NET and React to automate repository and version maintenance across services.",
      "Architected a C# API with LibGit2Sharp for automated branch and repo management, cutting production build time by 55% and saving 2–3 hours of manual labor per developer.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "L3Harris",
    location: "Nashville, TN",
    period: "June 2022 – Aug 2022",
    highlights: [
      "Developed a Forward-Looking Infrared (FLIR) sensor simulation app in C# to expand sensor testing capabilities.",
      "Built secure encoding/decoding for 20+ message types between the interfacing system and the FLIR system.",
      "Integrated an internal geospatial engine to support the sensor's positional data relative to Earth.",
    ],
  },
];

function Experience() {
  return (
    <section className="experience-page">
      <div className="page-card">
        <h1>Experience</h1>
        <p>
          A summary of roles where I’ve contributed to software, security,
          and platform engineering work.
        </p>
        <div className="experience-list">
          {EXPERIENCE.map((role) => (
            <article className="experience-item" key={`${role.company}-${role.title}`}>
              <div className="experience-heading">
                <h2>{role.title}</h2>
                <span className="experience-period">{role.period}</span>
              </div>
              <p className="experience-meta">
                {role.company} · {role.location}
              </p>
              <ul>
                {role.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
