import "./project.css";
import { motion } from "framer-motion";
import projectOne from "../../assets/images/project-one.png";
import projectTwo from "../../assets/images/project-two.png";
import projectThree from "../../assets/images/project-three.png";
import { Github, Link } from "lucide-react";

const projects = [
  {
    project_title: "Latitude",
    project_image: projectOne,
    project_desc: `Latitude is a clothing e-commerce 
    site with collections for men and women. It has all the basic functionalities of an e-commerce site: users can add and remove products from their basket, data is retained when the page is refreshed using Redux, and payments are managed using the Stripe API.`,
    project_stack: ["React", "Redux", "Tailwind", "Stripe", "Sanity"],
    project_links: {
      preview: "https://latitude-shop.vercel.app/",
      code: "https://github.com/OussamaBoussouf/ecommerce-website",
    },
  },
  {
    project_title: "Flow Jobs",
    project_image: projectTwo,
    project_desc: `Flow Jobs is a website for job seekers looking 
    for developer positions. Recruiters can publish vacant positions using 
    a dynamic form to enter all the necessary information. Each job offer 
    must be approved by an administrator before it becomes available in 
    the job listings. you can access the admin page via "flow-jobs-mu.vercel.app/admin"
    `,
    project_stack: ["React", "Tailwind", "Firebase", "Shadcn ui"],
    project_links: {
      preview: "https://flow-jobs-mu.vercel.app/",
      code: "https://github.com/OussamaBoussouf/job-post",
    },
  },
  {
    project_title: "Rawg Clone",
    project_image: projectThree,
    project_desc: `This website is a clone of the famous RAWG games site. It displays a list of games retrieved from the RAWG API and includes basic features such as search, sort, categorize, and drak mode.`,
    project_stack: ["React", "Rawg Api", "Chakra ui"],
    project_links: {
      preview: "https://rawg-clone-cyan.vercel.app/",
      code: "https://github.com/OussamaBoussouf/game-lists",
    },
  },
];

function Projects() {
  return (
    <section id="Projects" className="projects">
      <div className="projects__container">
        <div className="wrapper">
          <h2 className="projects__heading">Projects</h2>
          <div className="projects__project-wrapper">
            {projects.map((project, index) => (
              <div key={index} className="project__container">
                <motion.img
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="project__image"
                  src={project.project_image}
                />
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="project__desc"
                >
                  <h3>{project.project_title}</h3>
                  <p>{project.project_desc}</p>
                  {project.project_title === "Flow Jobs" ? (
                    <ul className="admin__credential">
                      <li>Emial : admin@admin.com</li>
                      <li>Password : admin123456789</li>
                    </ul>
                  ) : null}
                  <h4>Stack :</h4>
                  <ul className="project__stack">
                    {project.project_stack.map((stack, index) => (
                      <li key={index}>{stack}</li>
                    ))}
                  </ul>
                  <div className="btn__container">
                    <a href={project.project_links.preview} target="_blank">
                      <button type="button">
                        <Link className="icon" /> Preview
                      </button>
                    </a>
                    <a href={project.project_links.code} target="_blank">
                      <button type="button">
                        <Github className="icon" /> Code
                      </button>
                    </a>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
