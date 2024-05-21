import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollY, setScrollY] = useState({
    scrollY: 0,
    prevScrollY: 0
  });

  useEffect(() => {
    const listener = () => {
      setScrollY(prev => {
        return{
            scrollY: document.documentElement.scrollTop,
            prevScrollY: prev.scrollY
        }
      });
    };

    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []);



  return {...scrollY};
};

export default useScroll;
