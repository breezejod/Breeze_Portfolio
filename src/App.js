import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./_components/Header";
import Body from "./_components/Body";
import Contact from "./_components/Contact";
import Projects from "./_components/Projects";
import Web from "./_components/Web";
import About from "./_components/About";
import Home from "./_components/Home";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/body" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/web" element={<Web />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
