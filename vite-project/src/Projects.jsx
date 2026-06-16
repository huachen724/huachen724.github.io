import "./Projects.css";

function Projects() {
  return (
    <section className="projects-page">
      <div className="page-card">
        <h1>Projects</h1>
        <p>Selected projects highlighting web apps, coursework, and portfolio work.</p>
        <div className="projects-grid">
          <article className="project-card">
            <h2>Portfolio Redesign</h2>
            <p>React/Vite portfolio site with responsive navigation and project
            showcase.</p>
          </article>
          <article className="project-card">
            <h2>Sample Web App</h2>
            <p>Front-end web application built using modern component-based UI
            patterns and clean styling.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;
