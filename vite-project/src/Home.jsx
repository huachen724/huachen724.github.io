import "./Home.css";
import ProfilePicture from "../assets/profile_picture.png";
import BackgroundImage from "../assets/lehighdark.png";
import GithubIcon from "../assets/github.png";
import LinkedinIcon from "../assets/linkedin.png";
import ResumeIcon from "../assets/resume.png";
import MailIcon from "../assets/mail.png";

function Home() {
  return (
    <section className="home-page">
      <div className="hero-panel">
        <div className="hero-copy">
          <p className="hero-subtitle">Hi! I'm Hua</p>
          <h1 className="hero-title">
            Software Engineer
            <span>at Wells Fargo</span>
          </h1>
          <p className="hero-description">
            I build secure, scalable systems — from AI-powered internal
            tooling to high-availability financial applications. Currently on
            the Data Intelligence team, working across React, TypeScript, and
            Python (FastAPI) to ship software that makes engineering teams
            faster and safer.
          </p>
          <div className="hero-links">
            <a
              href="https://github.com/huachen724"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubIcon} alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/huajchen"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} alt="LinkedIn" />
            </a>
            <a href="/hua_chen_resume.pdf" target="_blank" rel="noreferrer">
              <img src={ResumeIcon} alt="Resume" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=huachen724@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={MailIcon} alt="Email" />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img className="profile-picture" src={ProfilePicture} alt="Hua Chen" />
        </div>
      </div>
      <div className="hero-background">
        <img src={BackgroundImage} alt="Lehigh campus" />
      </div>
    </section>
  );
}

export default Home;
