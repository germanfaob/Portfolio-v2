import { Link, NavLink, Outlet } from "react-router-dom";
import "./layout.css";

export const Layout = () => {
  return (
    <div className="layout">
      <nav className="nav">
        <div className="logo">
          <Link to="/">
            <img className="logo__img" src="../images/logo2.png" alt="logo" />
          </Link>
        </div>
        <div className="links">
          <NavLink className="links__item" to="/">
            Home
          </NavLink>
          <NavLink className="links__item" to="/projects">
            Projects
          </NavLink>
          <NavLink className="links__item" to="/projects">
            Experience
          </NavLink>
          <NavLink className="links__item" to="/projects">
            Contact
          </NavLink>
        </div>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
