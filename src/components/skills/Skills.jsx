import "./skills.css";
import { motion } from "framer-motion";
import image from "../../assets/images/html.webp";

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "Scss",
  "Bootstrap",
  "Tailwind",
  "React",
  "Typescript",
  "Firebase",
  "Laravel",
  "MySQL",
];

function Skills() {
  return (
    <section className="skills">
      <div className="wrapper">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5, ease: "easeInOut" }}
          className="skills__heading"
        >
          Skills
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut", delay:.5 }}
            className="skills__heading-border"
          ></motion.div>
        </motion.h2>
        <div className="skills__technologies">
          {skills.map((skill) => (
            <p> {skill}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
