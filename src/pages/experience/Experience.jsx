import "./experience.css";
import { motion as m } from "framer-motion";

export const Experience = () => {
  return (
    <m.section
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="experience"
    >
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="experience__header"
      >
        <h1 className="experience__title">Experience and Studies</h1>
      </m.div>

      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="experience__body"
      >
        <div className="experience__body-column">
          <div className="experience__body-header">
            <h2 className="experience__body-title">Work experience</h2>
          </div>

          <div className="experience__body-description">
            <div className="experience__description-header">
              <h3 className="experience__description-title">
                RiojaWeb - Front-End Developer
              </h3>
              <span className="accent-color">Feb 2023 - Current</span>
            </div>
            <div className="experiencie__description-spans">
              <span className="experience-spans">
                - Front-End Web Development and Design
              </span>
              <span className="experience-spans">
                - Handling HTML, CSS and Vanilla JavaScript
              </span>
            </div>
            <div className="experience__description-header">
              <h3 className="experience__description-title">
                HDC Informática - Software Manager
              </h3>
              <span className="accent-color">Dec 2019 - Jun 2021</span>
            </div>
            <div className="experiencie__description-spans">
              <span className="experience-spans">
                - Work with pharmacy software: in charge of resolving incidents,
                dealing with resolving incidents, dealing with customers and
                implementing the software on the client side.
              </span>
              <span className="experience-spans">
                - Work with pharmacy software: in charge of resolving incidents,
                dealing with resolving incidents, dealing with customers and
                implementing the software on the client side.
              </span>
            </div>
          </div>
        </div>

        <div className="experience__body-column">
          <div className="experience__body-header">
            <h2 className="experience__body-title">Academic studies</h2>
          </div>

          <div className="experience__body-description">
            <div className="experience__description-header">
              <h3 className="experience__description-title">
                Master in Web Development - Nett Digital School
              </h3>
              <span className="accent-color">2023</span>
            </div>
            <div className="experiencie__description-spans">
              <span className="experience-spans">
                - JavaScript y TypeScript
              </span>
              <span className="experience-spans">- Docker</span>
              <span className="experience-spans">- Usability and UX</span>
              <span className="experience-spans">- Databases SQL</span>
              <span className="experience-spans">- Boostrap and Tailwind</span>
            </div>

            <div className="experience__description-header">
              <h3 className="experience__description-title">
                Web development - Tamwood College
              </h3>
              <span className="accent-color">2021 - 2022</span>
            </div>
            <div className="experiencie__description-spans">
              <span className="experience-spans">
                - Fundamentals of Front-End Web Development
              </span>
              <span className="experience-spans">
                - CSS Fundamentals, Pre-Processors, Frameworks and Version
                Control Systems Version Control Systems
              </span>
              <span className="experience-spans">
                - JavaScript for Web Development
              </span>
              <span className="experience-spans">
                - Introduction to Back-End Web Development: NodeJS and PHP
              </span>
              <span className="experience-spans">
                - Introduction to Front-End Frameworks: ReactJS and AngularJS
              </span>
            </div>
          </div>
        </div>
      </m.div>
    </m.section>
  );
};
