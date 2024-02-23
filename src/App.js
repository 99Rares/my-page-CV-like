import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./components/pages/ContactPage";
import TeachingPage from "./components/pages/TeachingPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={Services} />
          <Route path="/contact" Component={ContactPage} />
          <Route path="/teaching" Component={TeachingPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
