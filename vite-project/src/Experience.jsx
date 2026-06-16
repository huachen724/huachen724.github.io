import "./Experience.css";

function Experience() {
  return (
    <section className="experience-page">
      <div className="page-card">
        <h1>Experience</h1>
        <p>
          A summary of roles and projects where I’ve contributed to software,
          data, and engineering work.
        </p>
        <div className="experience-list">
          <article className="experience-item">
            <h2>Student Developer</h2>
            <p className="experience-meta">Lehigh University</p>
            <p>
              Worked on academic and personal software projects, focusing on
              web development, accessible UI, and interactive frontend design.
            </p>
          </article>
          <article className="experience-item">
            <h2>Research Assistant</h2>
            <p className="experience-meta">Computer Science Department</p>
            <p>
              Assisted with algorithm analysis, data visualization, and
              collaborative research documentation.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Experience;
