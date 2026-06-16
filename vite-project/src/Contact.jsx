import "./Contact.css";
import LinkedinIcon from "../assets/linkedin.png";
import GithubIcon from "../assets/github.png";
import MailIcon from "../assets/mail.png";
import ResumeIcon from "../assets/resume.png";

function Contact() {
  return (
    <section className="contact-page">
      <div className="page-card">
        <h1>Contact</h1>
        <p>
          I’m always interested in new opportunities and collaborations.
          Reach out via email or connect on LinkedIn.
        </p>
        <div className="contact-grid">
          <a href="mailto:huachen724@gmail.com" className="contact-card">
            <img src={MailIcon} alt="Email" />
            <div>
              <h2>Email</h2>
              <p>huachen724@gmail.com</p>
            </div>
          </a>
          <a
            href="https://github.com/huachen724"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <img src={GithubIcon} alt="GitHub" />
            <div>
              <h2>GitHub</h2>
              <p>github.com/huachen724</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/huajchen"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <img src={LinkedinIcon} alt="LinkedIn" />
            <div>
              <h2>LinkedIn</h2>
              <p>linkedin.com/in/huajchen</p>
            </div>
          </a>
          <a
            href="/hua_chen_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <img src={ResumeIcon} alt="Resume" />
            <div>
              <h2>Resume</h2>
              <p>View or download my resume</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
