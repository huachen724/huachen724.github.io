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
            Computer Science and Engineering Student
            <span>at Lehigh University</span>
          </h1>
          <p className="hero-description">
            I build clean, responsive web experiences and love solving practical
            problems with code. Exploring software engineering, design systems,
            and real-world applications every day.
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
            <a href="mailto:huachen724@gmail.com">
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
