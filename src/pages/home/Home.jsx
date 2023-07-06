import { motion as m } from "framer-motion";
import "./home.css";

export const Home = () => {
  return (
    <m.section
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="home"
    >
      <div className="hero">
        <m.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="hero__title"
        >
          Germán Figueroa
        </m.h1>
        <m.p className="hero__subtitle">
          Front-End, Web application developer
        </m.p>
      </div>
    </m.section>
  );
};
