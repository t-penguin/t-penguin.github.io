import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./AppStyles.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);