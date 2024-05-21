import { AlignRight, X } from "lucide-react";
import { motion, stagger, useAnimate } from "framer-motion";
import "./navbar.css";
import { useEffect, useRef, useState } from "react";
import useScroll from "../../hooks/useScroll";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-scroll";

const variants = {
  open: { height: "auto" },
  closed: { height: 0 },
};

const links = ["Home", "About", "Skills", "Projects"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const navNode = useRef(null);

  const { scrollY, prevScrollY } = useScroll();

  useEffect(() => {
    if (scrollY > prevScrollY) {
      navNode.current.style.top = "-100%";
    } else {
      navNode.current.style.top = 0;
    }
  }, [scrollY, prevScrollY]);

  useEffect(() => {
    animate(
      "li",
      { opacity: 1, y: 0 },
      { delay: stagger(0.3, { ease: "easeOut" }) }
    );
  }, []);

  const close = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav ref={navNode} className="navbar">
      <div className="wrapper">
        <div className="navbar__container">
          <div className="navbar__logo">
            <a href="/">Developo.</a>
          </div>
          <ul ref={scope} className="navbar__list">
            {links.map((link, index) => (
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                className="navbar__item"
                key={index}
              >
                <Link onClick={close} to={`${link}`} spy={true} smooth={true} duration={500} offset={-10}>
                  {link}
                </Link>
              </motion.li>
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
                  <Link onClick={() => setIsOpen(false)} to={`${link}`} spy={true} smooth={true} duration={500} offset={-20}>
                    {link}
                  </Link>
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
