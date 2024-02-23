// src/components/Contact.js

import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const showAlert = (message, type) => {
    alert(`${type.toUpperCase()}: ${message}`);
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xqkrabja", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        setFormStatus("success");
        showAlert("Form submitted successfully!", "success");
        console.log("Form submitted successfully!");
        clearForm(); // Clear the form fields on success
      } else {
        // Handle error
        setFormStatus("error");
        showAlert("Form submission failed. Please try again later.", "error");
        console.error("Form submission failed");
      }
    } catch (error) {
      // Handle network or other errors
      setFormStatus("error");
      showAlert("Error submitting form. Please try again later.", "error");
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <div>
      <h1 className="page-title">Contact Me</h1>
      <div className="additional-contact-info">
        <p>
          Email:{" "}
          <a href="mailto: rares.dan@stud.ubbcluj.ro">
            rares.dan@stud.ubbcluj.ro
          </a>
        </p>

        <p>Phone: +40 740 163 308</p>
        <p>Current office: Strada Croitorilor 12-14, Cluj-Napoca</p>
        {/* Add other contact information as needed */}
      </div>

      <div className="map-container">
        <iframe
          title="Google Maps"
          width="100%"
          height="400"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?q=@msg+systems%2C+Strada+Croitorilor%2C+Nr.+12-14%2C+Cluj-Napoca%2C+Romania&key=AIzaSyA1r1OGe7OdrEYU5iTp6UYm0vUbl1CZnog`}
          allowFullScreen
        ></iframe>
      </div>

      <div className="contact-container">
        <h3>Contact Form</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:<br></br>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:<br></br>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:<br></br>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit">Submit</button>

          {formStatus === "success" && (
            <div className="message success-message">
              Form submitted successfully!
            </div>
          )}
          {formStatus === "error" && (
            <div className="message error-message">
              Form submission failed. Please try again later.
            </div>
          )}
        </form>
      </div>

      <div className="suggested-pictures">
        {/* Add suggested pictures or illustrations here */}
        <img src="https://placekitten.com/200/300" alt="Cute Cat 1" />
        <img src="https://placekitten.com/201/300" alt="Cute Cat 2" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default Contact;

//AIzaSyA1r1OGe7OdrEYU5iTp6UYm0vUbl1CZnog
