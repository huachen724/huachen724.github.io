import "./About.css";

function About() {
  return (
    <section className="about-page">
      <div className="page-card">
        <h1>About Me</h1>
        <p>
          I’m Hua, a computer science student at Lehigh University. I enjoy
          building web applications with clean design, strong accessibility,
          and thoughtful user experience.
        </p>
        <div className="about-grid">
          <div className="about-item">
            <h2>Skills</h2>
            <p>JavaScript, React, HTML, CSS, responsive design, version control</p>
          </div>
          <div className="about-item">
            <h2>Interests</h2>
            <p>Web development, data-driven software, collaboration, and learning.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
