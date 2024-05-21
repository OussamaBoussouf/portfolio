import "./skills.css";
import { motion, useAnimate, stagger, useInView  } from "framer-motion";

import bootstrap from "../../assets/images/logos/bootstrap-new.png";
import html from "../../assets/images/logos/html-logo-new.png";
import firebase from "../../assets/images/logos/firebase-logo-new.png";
import git from "../../assets/images/logos/git-logo-new.png";
import laravel from "../../assets/images/logos/laravel-new.png";
import css from "../../assets/images/logos/css-logo-new.png";
import sass from "../../assets/images/logos/sass-logo-new.png";
import tailwind from "../../assets/images/logos/tailwind-new.png";
import mysql from "../../assets/images/logos/mysql-logo-new.png";
import github from "../../assets/images/logos/github-logo-new.png";
import react from "../../assets/images/logos/react-logo-new.png";
import javascript from "../../assets/images/logos/javascript-logo-new.png";
import sanity from "../../assets/images/logos/sanity-logo-new.png";
import ResponsiveSlider from "../ui/Slider";
import { useEffect, useRef } from "react";

const skills = [
  {
    skill: "HTML",
    icon: html,
  },
  {
    skill: "CSS",
    icon: css,
  },
  {
    skill: "Javascript",
    icon: javascript,
  },
  {
    skill: "React",
    icon: react,
  },
  {
    skill: "Sass",
    icon: sass,
  },
  {
    skill: "Bootstrap",
    icon: bootstrap,
  },
  {
    skill: "Tailwind",
    icon: tailwind,
  },
  {
    skill: "Firebase",
    icon: firebase,
  },
  {
    skill: "Git",
    icon: git,
  },
  {
    skill: "GitHub",
    icon: github,
  },
  {
    skill: "Laravel",
    icon: laravel,
  },
  {
    skill: "MySQL",
    icon: mysql,
  },
  {
    skill: "Sanity",
    icon: sanity,
  },
];

function Skills() {

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope)

  useEffect(() => {

   if(isInView){
    animate("div", {opacity: 1, x:0}, {delay: stagger(0.3,{ ease: "easeOut" })});
   }

  },[isInView]);


  return (
    <section id="Skills" className="skills">
      <div className="wrapper">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="skills__heading"
          >
            Skills
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="skills__heading-border"
            ></motion.div>
          </motion.h2>
          <div ref={scope} className="skills__technologies">
            {skills.map((skill, index) => (
              <motion.div initial={{opacity: 0, x:-50}}  key={index} className="skills__technologie">
                <img
                  className="skills__technologie-logo"
                  height="80"
                  src={skill.icon}
                  alt="logo"
                />
                <p>{skill.skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
