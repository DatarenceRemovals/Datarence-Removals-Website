import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          {/* Company Logo Section */}
          <div className="footer-logo">
            <h4>Logo</h4>
          </div>

          {/* Navigation Links */}
          <div className="footer-links">
            <div>
              <p>Navigation</p>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <p>Contact Us</p>
              <ul>
                <li>Reach out to us</li>
                <li><a href="tel:+447463933679">07463 933 679</a></li>
                <li><a href="mailto:datarenceremovals@gmail.com">datarenceremovals@gmail.com</a></li>
                <li>Manchester</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; 2025 Datarence Removals.</p>
          
          {/* Social Media Icons */}
          <div className="social-icons">
            <a
              href="https://wa.me/447463933679"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://facebook.com"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
