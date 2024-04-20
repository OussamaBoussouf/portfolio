
// CSS
import "./App.css";
// Component
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <div className="test">
          <h1>Hello world</h1>
      </div>
      
    </>
  );
}

export default App;
