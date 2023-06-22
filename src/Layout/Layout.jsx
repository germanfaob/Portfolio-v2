import { Link, NavLink, Outlet } from "react-router-dom";
import "./layout.css";
import { Switch } from "../components/Switch/Switch";

export const Layout = () => {
  return (
    <div className="layout">
      <nav className="nav">
        <div className="logo">
          <Link to="/">
            <img className="logo__img" src="../images/logo.webp" alt="logo" />
          </Link>
        </div>
        <div className="links">
          <NavLink className="links__item" to="/">
            Home
          </NavLink>
          <NavLink className="links__item" to="/projects">
            Projects
          </NavLink>
          <NavLink className="links__item" to="/experience">
            Experience
          </NavLink>
          <NavLink className="links__item" to="/about">
            About
          </NavLink>
          <NavLink className="links__item" to="/contact">
            Contact
          </NavLink>
        </div>
        <Switch />
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
