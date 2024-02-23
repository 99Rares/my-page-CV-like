import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/my-page-CV-like/" className="social-logo">
              RAREȘ DAN&nbsp;
              <i class="fa-brands fa-react"></i>
            </Link>
          </div>
          <small className="website-rights">
            RAREȘ DAN <i class="fa-regular fa-copyright"></i> 2023
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="https://www.facebook.com/Rares.Dan.Gabriel"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="https://www.instagram.com/danrares/"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="https://www.youtube.com/channel/UCgcpM-xWiovXhKTYFemds0A"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="https://twitter.com/raresdang1"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="https://www.linkedin.com/in/rare%C8%99-dan-a6a70920b/"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
