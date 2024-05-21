import { useState } from "react";
import Form from "../Form";
import "./header.css";
import { motion } from "framer-motion";

function Header() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <header id="Home" className="header">
      <div className="wrapper">
        <div className="header__container">
          <div className="header__description">
            <div className="header__mask">
              <motion.h1
                initial={{ y: 220 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                onTransitionEnd={() => console.log("Hello world")}
              >
                Hi! I'm Oussama Boussouf
              </motion.h1>
            </div>
            <div className="header__description-mask">
              <motion.p
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                I'm a passionate and aspiring web developer  with a
                mission to create dynamic and interactive web applications.
              </motion.p>
            </div>
            <div className="header__btn__group">
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeIn", delay: 1 }}
                type="button"
                className="header__cta"
                onClick={() => setIsFormOpen(true)}
              >
                Contact me
              </motion.button>
              <motion.button
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeIn", delay: 1 }}
                type="button"
                className="header__cta"
              >
                Check resume
              </motion.button>
            </div>
          </div>
          {isFormOpen ? (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 0.5 }}
              className="contact__form"
            >
              <Form onClose={() => setIsFormOpen(false)} />
            </motion.div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export default Header;
