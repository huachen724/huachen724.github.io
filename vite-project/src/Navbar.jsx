import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/lady_laptop.png";

function Navbar() {
  return (
    <div className="navbar">
      {/*<a href="https://github.com/huachen724" target="_blank"><img src="images/github.png" class="resize" alt="Github"></a>
       */}
      <NavLink to={"/"} className="logo-container ">
        <a href="" className="logo"></a>
        <img src={Logo} alt="" />
      </NavLink>
      <NavLink to={"/"} className="nav-buttons">
        Home
      </NavLink>
      <NavLink to={"experience"} className="nav-buttons">
        Experience
      </NavLink>
      <NavLink to={"projects"} className="nav-buttons">
        Projects
      </NavLink>
      <NavLink to={"contact"} className="nav-buttons">
        Contact
      </NavLink>
      <a href={"*"} className="nav-buttons">
        NotFound
      </a>
    </div>
  );
}

export default Navbar;
