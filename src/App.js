import React from "react";
import { Router } from "@reach/router";

import { NavBar } from "./components/nav-bar/nav-bar";
import { HomePage } from "./pages/home-page/home-page";
import { AboutMe } from "./pages/about-page/about-me";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <HomePage path="/" />
        <AboutMe path="/about-me" />
      </Router>
    </div>
  );
}

export default App;
