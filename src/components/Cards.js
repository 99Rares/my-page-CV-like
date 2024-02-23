import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>About me...</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/sibiu.jpg"
              text="My hometown is Sibiu, Romania."
              description="Sibiu, located in Transylvania, Romania, is renowned for its charming medieval architecture, vibrant cultural scene, and hosting the European Capital of Culture in 2007."
              label="Hometown"
              path="/about"
            />
            <CardItem
              src="images/ubb.jpg" // Replace with the actual image path
              text="I have successfully completed my Bachelor's studies in Informatics at Babeș-Bolyai University"
              description="During my time at Babeș-Bolyai University, I gained a strong foundation in informatics, delving into various aspects of computer science and information technology. The rigorous academic curriculum and diverse learning experiences have equipped me with the skills and knowledge needed for my journey in the field of technology."
              label="University"
              path="/about" // Update with the appropriate link or path
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/msg.png"
              text="I currently work as a developer for MSG Systems."
              label="Workplace"
              description="MSG Systems is a leading global IT services and consulting firm, specializing in innovative solutions for diverse industries. Known for our expertise, client focus, and commitment to digital transformation, we deliver successful projects that help businesses thrive in the ever-evolving landscape of technology."
              path="/about"
            />
            <CardItem
              src="images/pi.png"
              text="Home Server Management"
              label="Personal Projects"
              description="Currently managing my own Linux server, featuring services like Plex for media streaming, Pi-hole for network-wide ad blocking, Home Assistant for smart home automation, and PiVPN for secure remote access."
              path="/about" // Update with the appropriate link or path
            />
            <CardItem
              src="images/hobby.jpg" // Replace with an image related to your hobbies
              text="Adventure Enthusiast"
              label="Hobbies"
              description="Passionate about fitness – you'll often find me at the gym sculpting gains. A nature enthusiast, I love hiking to explore scenic landscapes. Movie buff by night, avid gamer by choice. Living life with an adventurous spirit!"
              path="/about" // Update with the appropriate link or path
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
