// src/components/SubjectPage.js

import React from "react";
import "./SubjectPage.css";
const IntroductionCard = () => {
  return (
    <div className="card">
      <h2>Introduction</h2>
      <p>
        This course provides an introduction to the principles and practices of
        web development. Students will explore HTML, CSS, and JavaScript, and
        gain hands-on experience in creating dynamic and interactive websites.
      </p>
    </div>
  );
};

const InstructorInfoCard = () => {
  return (
    <div className="card">
      <h2>Instructor</h2>
      <p>Name: Rares Dan</p>
      <p>
        Email:{" "}
        <a className="text" href="mailto: rares.dan@stud.ubbcluj.ro">
          rares.dan@stud.ubbcluj.ro
        </a>
      </p>
    </div>
  );
};

const ClassScheduleCard = () => {
  return (
    <div className="card">
      <h2>Class Schedule</h2>
      <ul>
        <li>Monday: 9:00 AM - 11:00 AM</li>
        <li>Wednesday: 9:00 AM - 11:00 AM</li>
        <li>Friday: 9:00 AM - 11:00 AM</li>
      </ul>
    </div>
  );
};

const EvaluationCriteriaCard = () => {
  return (
    <div className="card">
      <h2>Evaluation Criteria</h2>
      <ul>
        <li>Assignments: 30%</li>
        <li>Midterm Exam: 30%</li>
        <li>Final Project: 30%</li>
        <li>Participation: 10%</li>
      </ul>
    </div>
  );
};

const AdditionalInfoCard = () => {
  return (
    <div className="card">
      <h2>Additional Information</h2>
      <p>
        <strong>Textbooks:</strong> "HTML and CSS: Design and Build Websites" by
        Jon Duckett, "JavaScript and JQuery: The Missing Manual" by David Sawyer
        McFarland.
      </p>
      <p>
        <strong>Prerequisites:</strong> Basic understanding of computer science
        concepts.
      </p>
      <p>
        <strong>Software:</strong> Students are required to have a text editor
        (e.g., VSCode) installed for coding exercises.
      </p>
    </div>
  );
};

const SubjectPage = () => {
  return (
    <div className="subject-container">
      <h1 className="subject-title">Introduction to Web Development</h1>

      <div className="subject-info">
        <IntroductionCard />
        <InstructorInfoCard />
      </div>

      <div className="class-schedule">
        <ClassScheduleCard />
      </div>

      <div className="evaluation-criteria">
        <EvaluationCriteriaCard />
      </div>

      <div className="additional-info">
        <AdditionalInfoCard />
      </div>
    </div>
  );
};

export default SubjectPage;
