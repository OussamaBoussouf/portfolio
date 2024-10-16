import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const fakeRequest = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
  };

  useEffect(() => {
    fakeRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        const fadeOut = [{ opacity: "0" }];
        const fadeOutTiming = {
          duration: 1000,
          fill: "forwards",
        };
        const animateLoader = loaderElement.animate(fadeOut, fadeOutTiming);
        animateLoader.finished.then(() => {
          loaderElement.remove();
        });
        setIsLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) return null;

  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
