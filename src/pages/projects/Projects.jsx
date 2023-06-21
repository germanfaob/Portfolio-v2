import "./projects.css";
import { useState, useRef, useEffect } from "react";
import { motion as m } from "framer-motion";
import { CardProject } from "../../components/CardProject/CardProject";

export const Projects = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const cardData = [
    {
      id: 1,
      projectName: "Login Page",
      projectDescription:
        "Authentication page. You can create an account with your email and try it out.",
      stack: "React - Firabase",
      linkGithub: "https://github.com/germanfaob/Login_System_Firebase",
      linkPage: "https://germadev-login.netlify.app/",
    },
    {
      id: 2,
      projectName: "Movie App",
      projectDescription:
        "You can browse the list of current movies and access each one for more information.",
      stack: "React - API:TMDb",
      linkGithub: "https://github.com/germanfaob/Movie_App",
      linkPage: "https://germadev-movie-app.netlify.app/",
    },
    {
      id: 3,
      projectName: "Portfolio",
      projectDescription:
        "Public portfolio for other users to utilize, simply change the data or modify it to your liking.",
      stack: "React",
      linkGithub: "https://github.com/germanfaob/React-Portfolio",
      linkPage: "https://germadev-portfolio.netlify.app/",
    },
    {
      id: 4,
      projectName: "Dashboard",
      projectDescription:
        "Complete dashboard with a welcome page, login page, and private area featuring information from various APIs.",
      stack: "React - Firabase - Axios - APIs:TMDb, NASA, News, Weather",
      linkGithub: "https://github.com/germanfaob/Dashboard",
      linkPage: "https://germadev-dashboard.netlify.app/",
    },
    {
      id: 5,
      projectName: "Kanban UI",
      projectDescription:
        "Kanban-style task organizer. Users can interact with labels and drag tasks from one column to another.",
      stack: "React - SCSS - Library:React beautiful dnd",
      linkGithub: "https://github.com/germanfaob/Kanban_UI",
      linkPage: "https://germadev-kanban-ui.netlify.app/",
    },
    {
      id: 6,
      projectName: "Task App",
      projectDescription:
        "TODO application. You can add or remove tasks, and the changes are saved in your browser.",
      stack: "HTML - CSS - JavaScript",
      linkGithub: "https://github.com/germanfaob/TaskApp",
      linkPage: "https://germadev-task-app.netlify.app/",
    },
    {
      id: 7,
      projectName: "Shopping Cart",
      projectDescription:
        "Page simulating an online store for PC towers. You can add products to the shopping cart and view the final price.",
      stack: "React - DB:Json",
      linkGithub: "https://github.com/germanfaob/Shopping_Cart",
      linkPage: "https://germadev-shopping-cart.netlify.app/",
    },
  ];

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

        <m.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <m.div
            className="inner-carousel"
            drag="x"
            dragConstraints={{ right: +width, left: -width }}
          >
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
      </m.div>
    </m.section>
  );
};
