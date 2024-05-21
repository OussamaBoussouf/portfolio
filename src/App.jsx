// CSS
import "./App.css";
// Component
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
