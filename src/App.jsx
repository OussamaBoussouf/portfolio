import { AlignRight } from "lucide-react";
// CSS
import "./App.css";
// Component
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="test">
          <h1>Hello world</h1>
      </div>
      {/* <div className="contact__form">
        <Form />
      </div> */}
    </>
  );
}

export default App;
