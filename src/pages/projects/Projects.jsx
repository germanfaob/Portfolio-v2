import "./projects.css";
import { motion as m } from "framer-motion";
import { CardProject } from "../../components/CardProject/CardProject";
import { cardData } from "../../data/projectData";

export const Projects = () => {
  return (
    <m.section
      className="projects"
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <m.div
        className="projects__container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <h1 className="projects__title">Projects</h1>

        <m.div className="carousel">
          {cardData.map((card) => (
            <m.div key={card.id} className="item">
              <CardProject
                projectId={card.id}
                projectName={card.projectName}
                projectDescription={card.projectDescription}
                stack={card.stack}
                linkGithub={card.linkGithub}
                linkPage={card.linkPage}
              />
            </m.div>
          ))}
        </m.div>
      </m.div>
    </m.section>
  );
};
