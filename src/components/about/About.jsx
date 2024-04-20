import profileImage from "../../assets/images/about_me_img_mobile.jpg";
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import "./about.css";
import { useEffect, useRef } from "react";

function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [0, distance]);
  }
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "110%"]);

  return (
    <section className="about">
      <div className="wrapper">
        <motion.div
          style={{y}}
          className="about__container"
        >
          <motion.h2
            // ref={title}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="about__heading"
          >
            About me
          </motion.h2>
          <div className="about__content">
            <div
              className="about__profile__image-mobile"
            ></div>
            <motion.img
              initial={{ height: 0 }}
              whileInView={{ height: "300px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="about__profile__image-desktop"
              src={profileImage}
              alt="profile image"
            />
            <motion.p
            ref={ref}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="about__presentation"
            >
              My journey in web development began out of curiosity to discover
              this field,but over time, it has become a passion that i want to
              turn into profession. I'm not just a coder; I'm a problem solver,
              a tech enthusiast, and a dedicated learner. I specialize in
              creating engaging user interfaces using frameworks like React.
              work with languages such as Laravel and have experience with
              databases MySQL. Familiar with version control Git, RESTful API, I
              am an enthusiastic learner, adaptable team player, and committed
              to contributing to the development and maintenance of dynamic web
              applications.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
