import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Services";
import Contact from "./routes/Contact";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// import BackToTop from "react-back-to-top";
function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </React.StrictMode>
  );
}

export default App;
