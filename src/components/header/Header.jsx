import { useState } from "react";
import profileImage from "../../assets/images/about_me_img_mobile.jpg";
import Form from "../Form";
import "./header.css";
import { motion } from "framer-motion";

function Header() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__container">
          <div className="header__description">
            <div className="header__mask">
              <motion.h1
                initial={{ y: 190, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "backInOut", delay: 0.5 }}
              >
                Hi! I'm Oussama Boussouf
              </motion.h1>
            </div>
            <div className="header__description-mask">
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "backInOut" }}
              >
                I'm a passionate and aspiring junior web developer with a
                mission to bring creativity and functionality to the digital
                realm.
              </motion.p>
            </div>
            <div className="header__btn__group">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn", delay: 1 }}
                type="button"
                className="header__cta"
                onClick={() => setIsFormOpen(true)}
              >
                Contact me
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn", delay: 1 }}
                type="button"
                className="header__cta"
              >
                Check resume
              </motion.button>
            </div>
          </div>
          {isFormOpen ? (
            <div className="contact__form">
              <Form onClose={() => setIsFormOpen(false)} />
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export default Header;
