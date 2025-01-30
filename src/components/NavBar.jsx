import "./NavBar.scss";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const toggleMenuBurger = () => {
    const navBar = document.querySelector("nav");
    const main = document.querySelector("main");

    if (navBar) {
      navBar.classList.toggle("active");
      main.classList.toggle("blur");
    }
  };

  return (
    <header className="container-wide">
      <nav className="container flex space-between align-center">
        <NavLink to="/" className="nav-logo">
          <img
            className="standard-img"
            src={logo}
            alt="Dorian Kelly Web Development logo"
          />
        </NavLink>
        <ul className="nav-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? " active" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${isActive ? " active" : ""}`
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `nav-link ${isActive ? " active" : ""}`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Contacts
            </NavLink>
          </li>
        </ul>
        <div className="menu-toggle" id="menuBars" onClick={toggleMenuBurger}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};
