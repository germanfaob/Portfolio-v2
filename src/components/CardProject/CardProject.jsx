import { PropTypes } from "prop-types";
import "./cardproject.css";
import { motion as m } from "framer-motion";
import { useState } from "react";

export const CardProject = (props) => {
  const { projectName, projectDescription, linkGithub, linkPage, stack } =
    props;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <m.div
      layout
      transition={{ layout: { duration: 1, type: "spring" } }}
      exit={{ duration: 1 }}
      className={`card ${isOpen ? "expanded" : ""}`}
      onClick={handleClick}
    >
      <m.h2 layout="position" className="card__title">
        {projectName}
      </m.h2>

      {isOpen && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          className="card__expand"
        >
          <p>{projectDescription}</p>
          <div className="card__expand-stack">
            <h4 className="stack-title">Stack</h4>
            <span className="stack">{stack}</span>
          </div>
          <div className="card__expand-icons">
            <a href={linkGithub} target="_blank" rel="noopener noreferrer">
              <img
                className="icon"
                src="../../../images/github.svg"
                alt="github"
              />
            </a>
            <a href={linkPage} target="_blank" rel="noopener noreferrer">
              <img className="icon" src="../../../images/link.svg" alt="link" />
            </a>
          </div>
        </m.div>
      )}
    </m.div>
  );
};

CardProject.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  linkGithub: PropTypes.string.isRequired,
  linkPage: PropTypes.string.isRequired,
};
