import { motion } from "framer-motion";
import "./home.css";

export const Home = () => {
  return (
    <motion.section
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="home"
    >
      COMPONENTE HOME
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
        exercitationem? Quisquam, obcaecati provident. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Quasi ipsa, aliquid suscipit dicta
        distinctio doloremque alias adipisci voluptatum corporis laboriosam
        aspernatur minima, non sequi voluptas iusto, odit labore amet deleniti.
      </motion.p>
    </motion.section>
  );
};
