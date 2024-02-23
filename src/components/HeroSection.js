import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

const handleClick = () => {
  window.location.href = "https://youtu.be/-hVJUJMYTmI?si=7qXu_aiVbwb0zg5t";
};

function HeroSection() {
  return (
    <>
      <div className="hero-container">
        <h1>Welcome to my page!</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            goTo="about"
          >
            GET STARTED
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            goTo=""
            onClick={handleClick}
          >
            WATCH TRAILER <i class="far fa-play-circle" />
          </Button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
