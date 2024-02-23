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
          <Route path="/my-page-CV-like/" Component={Home} />
          <Route path="/my-page-CV-like/about" Component={Services} />
          <Route path="/my-page-CV-like/contact" Component={ContactPage} />
          <Route path="/my-page-CV-like/teaching" Component={TeachingPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
