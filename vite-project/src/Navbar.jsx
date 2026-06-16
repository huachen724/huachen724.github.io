import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/lady_laptop.png";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo-container">
        <img src={Logo} alt="Hua Chen logo" className="logo-image" />
        <span className="logo-text">Hua Chen</span>
      </NavLink>
      <div className="nav-links">
        <NavLink to="/" className="nav-button">
          Home
        </NavLink>
        <NavLink to="about" className="nav-button">
          About
        </NavLink>
        <NavLink to="experience" className="nav-button">
          Experience
        </NavLink>
        <NavLink to="projects" className="nav-button">
          Projects
        </NavLink>
        <NavLink to="contact" className="nav-button">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
