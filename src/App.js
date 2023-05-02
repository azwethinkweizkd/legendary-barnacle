import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { NavBar } from "./components/nav-bar/nav-bar";
import { HomePage } from "./pages/home-page/home-page";
import { AboutMe } from "./pages/about-page/about-me";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
