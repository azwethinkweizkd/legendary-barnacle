import React from "react";
import { Router } from "@reach/router";
import { AnimatePresence } from "framer-motion";
import { NavBar } from "./components/nav-bar/nav-bar";
import { HomePage } from "./pages/home-page/home-page";
import { AboutMe } from "./pages/about-page/about-me";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AnimatePresence mode="wait">
        <Router>
          <HomePage path="/" />
          <AboutMe path="/about-me" />
        </Router>
      </AnimatePresence>
    </div>
  );
}

export default App;
