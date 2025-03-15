import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#');  
  const [isWiggling, setIsWiggling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWiggling(true);
      setTimeout(() => {
        setIsWiggling(false);
      }, 1500); 
    }, 7000); 

    return () => clearInterval(interval);
  }, []);

  const handleLinkClick = (hash) => {
    setActiveLink(hash);
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className="navbar" aria-label="Primary Navigation">
      {/* Logo */}
      <div className="logo">
        <a href="/" aria-label="Homepage">MyLogo</a>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} role="menu">
        <li role="menuitem">
          <a 
            href="#"
            className={activeLink === '#' ? 'active' : ''}
            onClick={() => handleLinkClick('#')}
            aria-current={activeLink === '#' ? 'page' : undefined}
          >
            Home
          </a>
        </li>
        <li role="menuitem">
          <a 
            href="#services"
            className={activeLink === '#services' ? 'active' : ''}
            onClick={() => handleLinkClick('#services')}
            aria-current={activeLink === '#services' ? 'page' : undefined}
          >
            Services
          </a>
        </li>
        <li role="menuitem">
          <a 
            href="#about"
            className={activeLink === '#about' ? 'active' : ''}
            onClick={() => handleLinkClick('#about')}
            aria-current={activeLink === '#about' ? 'page' : undefined}
          >
            About Us
          </a>
        </li>
        <li role="menuitem">
          <a 
            href="#testimonials"
            className={activeLink === '#testimonials' ? 'active' : ''}
            onClick={() => handleLinkClick('#testimonials')}
            aria-current={activeLink === '#testimonials' ? 'page' : undefined}
          >
            Testimonials
          </a>
        </li>
        <li role="menuitem">
          <a 
            href="#contacts"
            className={activeLink === '#contacts' ? 'active' : ''}
            onClick={() => handleLinkClick('#contacts')}
            aria-current={activeLink === '#contacts' ? 'page' : undefined}
          >
            Contact Us
          </a>
        </li>
      </ul>

      {/* Navigation Buttons */}
      <div className={`nav-btn ${isMenuOpen ? 'active' : ''}`}>
        {/* Email Button */}
        <button className="contact-btn" aria-label="Send us an email">
          <a href="mailto:datarenceremovals@gmail.com" className="mail-link">Send us a mail</a>
        </button>

        {/* Get a Quote Button with Wiggle Effect */}
        <button 
          className={`contact-btn ${isWiggling ? 'wiggle' : ''}`} 
          onClick={() => window.location.href = '#get-quote'}
          aria-label="Get a quote for services"
        >
          Get a Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
