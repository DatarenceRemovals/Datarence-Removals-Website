import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contacts" className="contact-us">
      <div className="contact-card">
        <div className="contact-text">
          <h1>Contact Us</h1>
          <address>
            <p>
              <i className="fas fa-envelope" aria-hidden="true"></i>{" "}
              <a
                href="mailto:datarenceremovals@gmail.com"
                aria-label="Email datarenceremovals"
              >
                datarenceremovals@gmail.com
              </a>
            </p>
            <p>
              <i className="fas fa-phone" aria-hidden="true"></i>{" "}
              <a href="tel:07463933679" aria-label="Call 07463933679">
                07463933679
              </a>
            </p>
            <p>
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>{" "}
              Manchester, UK
            </p>
          </address>
          <div className="social-icons">
            <a
              href="https://wa.me/447463933679"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.facebook.com"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.instagram.com"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23754.085344051206!2d-2.248774973809128!3d53.479489533628335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c2c9c2a6db%3A0x53b0c8e29b03442e!2sManchester%2C%20UK!5e0!3m2!1sen!2sus!4v1614123456789"
            allowFullScreen=""
            loading="lazy"
            title="Map of Manchester"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
