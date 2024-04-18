import { AlignRight, X } from "lucide-react";
import { easeInOut, motion } from "framer-motion";
import "./navbar.css";
import { useState } from "react";

const variants = {
  open: { height: "auto" },
  closed: { height: 0 },
  //   test: { duration: 5, ease: "easeInOut" },
};

const links = ["Home", "About", "Projects", "Skills", "Contact"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="navbar__container">
          <div className="navbar__logo">
            <a href="#">Developo.</a>
          </div>
          <ul className="navbar__list">
            {links.map((link, index) => (
              <li className="navbar__item" key={index}>
                <a href="">{link}</a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="navbar__btn"
            type="button"
          >
            {isOpen ? (
              <X color="white" size={30} />
            ) : (
              <AlignRight color="white" size={30} />
            )}
          </button>
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            className="navbar__menu"
          >
            <ul className="navbar__menu__list">
            {links.map((link, index) => (
              <li key={index} className="navbar__menu__item">
                <a href="">{link}</a>
              </li>
            ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
