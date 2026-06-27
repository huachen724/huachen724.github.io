import "./About.css";

function About() {
  return (
    <section className="about-page">
      <div className="page-card">
        <h1>About Me</h1>
        <p>
          I’m Hua, a software engineer based in New York City, currently
          building AI-powered tools on the Data Intelligence team at Wells
          Fargo. I’m a Lehigh University alum, and I care about writing
          software that’s secure, well-tested, and pleasant to use. Outside of
          work, I build side projects around things I’m into — right now,
          that’s League of Legends.
        </p>
        <div className="about-grid">
          <div className="about-item">
            <h2>Education</h2>
            <p>
              Lehigh University — B.S. in Computer Science, graduated with
              High Honors, May 2024.
            </p>
          </div>
          <div className="about-item">
            <h2>Languages &amp; Frameworks</h2>
            <p>
              Python, TypeScript, JavaScript, Go, C#, SQL · React, Node.js
              (Express), .NET, FastAPI, Tailwind CSS, Vite
            </p>
          </div>
          <div className="about-item">
            <h2>AI &amp; Data Engineering</h2>
            <p>
              LLM tool calling, agentic workflows, semantic search, and ETL
              development with MongoDB, PostgreSQL, and Cohere NLP
            </p>
          </div>
          <div className="about-item">
            <h2>Interests</h2>
            <p>
              Building side projects around League of Legends, developer
              tooling and automation, and exploring agentic AI workflows
              outside of work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
