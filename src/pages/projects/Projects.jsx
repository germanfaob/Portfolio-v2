import { motion } from "framer-motion";
import "./projects.css";

export const Projects = () => {
  return (
    <motion.section
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="projects"
    >
      COMPONENTE PROJECTS
      <div className="projects__container">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="projects__text"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Adipisci, laudantium dicta? Optio quae veniam aut recusandae quo id
          totam doloremque blanditiis pariatur dignissimos? Assumenda rem quasi
          exercitationem? Quisquam, obcaecati provident.
        </motion.p>
      </div>
    </motion.section>
  );
};
