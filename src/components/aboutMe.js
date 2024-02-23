// Import necessary React modules
import React from "react";
import "./aboutMe.css";

// Card component
const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};

// Functional component for the About Me page
const AboutMe = () => {
  const userInfo = {
    name: "Rareș Dan",
    bio: "Passionate software developer with a love for technology and innovation.",
    hobbies:
      "Enthusiastic about staying active, I regularly hit the gym to maintain a healthy lifestyle. Nature calls to me, and I find solace in exploring hiking trails and embracing the great outdoors. A cinephile at heart, I indulge in a diverse range of movies, from classics to the latest releases. When not coding or exploring, you can find me immersed in the virtual world, engaging in exciting gaming adventures.",
    contact: "Feel free to reach out via email at rares.dan@stud.ubbcluj.ro",
    skills: [
      "Java",
      "Python",
      "AWS",
      "React",
      "JavaScript",
      "Node.js",
      "Vue.js",
      "Git",
    ],
    education: "Bachelor's in Computer Science, University of Babes-Bolyai",
    experience: "2+ years of experience as a software developer",
  };

  return (
    <div className="container">
      {/* Photo */}
      <img src="images/Rares.png" alt="Profile" className="profile-photo" />

      <h1 className="header">{userInfo.name}</h1>

      <Card title="Bio" content={userInfo.bio} />
      <Card title="Hobbies" content={userInfo.hobbies} />
      <Card title="Skills" content={userInfo.skills.join(", ")} />
      <Card title="Education" content={userInfo.education} />
      <Card title="Experience" content={userInfo.experience} />
    </div>
  );
};

export default AboutMe;
