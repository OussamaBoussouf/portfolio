import { motion } from "framer-motion";
import "./about.css";

function About() {
  return (
    <section id="About" className="about">
      <div className="wrapper">
        <div className="about__container">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="about__heading"
          >
            About me
          </motion.h2>
          <div className="about__content ">
            <motion.p
              initial={{ y: -30, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="about__presentation"
            >
              My journey into web development began out of curiosity to explore
              this field, but over time, it has grown into a passion that I want
              to turn into a profession. I'm not just a coder; I'm a problem
              solver, a tech enthusiast, and a dedicated learner. <br />
              <br />I am particularly interested in front-end development and
              have worked on several personal projects, utilizing various
              technologies to achieve my goals. I am excited to bring my
              enthusiasm and skills to a forward-thinking team where I can grow
              and contribute to impactful projects.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
