import "./contact.css";
import { motion as m } from "framer-motion";

export const Contact = () => {
  return (
    <m.section
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="contact"
    >
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="contact__container"
      >
        <h1 className="contact__title">Contact me</h1>

        <div className="contact__icons">
          <a
            href="mailto:germanfaob@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="contact__icon"
              src="../../../images/email.svg"
              alt="email"
            />
          </a>
          <a
            href="https://github.com/germanfaob"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="contact__icon"
              src="../../../images/github.svg"
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/germanfig/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="contact__icon"
              src="../../../images/linkedin.svg"
              alt="linkedin"
            />
          </a>
          <a href="../../../resume/resume.pdf" target="_blank" rel="noreferrer">
            <img
              className="contact__icon"
              src="../../../images/resume.svg"
              alt="resume"
            />
          </a>
        </div>
      </m.div>
    </m.section>
  );
};
