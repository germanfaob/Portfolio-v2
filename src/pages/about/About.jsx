import "./about.css";
import { motion as m } from "framer-motion";

export const About = () => {
  return (
    <m.section
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="about"
    >
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="about__container"
      >
        <h1 className="about__title">About me</h1>
        <p className="about__text">
          As a Front-End developer, I am passionate about contributing to the
          development of web applications and creating appealing user
          interfaces. From the very beginning, I&apos;ve had a strong interest
          in software, which led me to focus my career on programming. For a
          period of time, I had the valuable opportunity to undergo training in
          Vancouver, where I immersed myself in the world of programming under
          the guidance of experienced professionals in the field. This
          experience was crucial in driving my growth and development as a
          programmer.
          <br />
          <br />
          During my training in Vancouver, I acquired solid knowledge in web
          programming languages such as HTML, CSS, and JavaScript, as well as in
          the use of popular frameworks and libraries like React.js. Through
          practical and challenging projects, I was able to enhance my ability
          to create intuitive and optimized interfaces for various platforms.
          <br />
          <br />
          Since then, I have continued my career in the field of Front-End
          development, applying my skills and knowledge in professional
          environments. My passion for programming and my commitment to quality
          have driven me to constantly seek ways to improve my skills and stay
          up-to-date with the latest trends and technologies in the field.
          <br />
          <br />
          With a strong foundation in Front-End development and a focus on
          usability and user experience, I aspire to keep growing professionally
          and contribute to the success of exciting and high-impact web
          projects. My goal is to continue learning and refining my skills to
          remain a highly competent and passionate Front-End developer.
        </p>
      </m.div>
    </m.section>
  );
};
