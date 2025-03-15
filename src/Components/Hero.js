import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import "../styles/Hero.css";

function Hero() {
  const images = [
    process.env.PUBLIC_URL + "/images/hero-img1.jpg",
    process.env.PUBLIC_URL + "/images/hero-img2.jpg",
    process.env.PUBLIC_URL + "/images/hero-img3.jpg",
    process.env.PUBLIC_URL + "/images/hero-img1.jpg",
  ];

  const texts = [
    {
      heading: "Seamless Home Removals is Our Promise",
      paragraph:
        "At Datarence Removals, we take pride in offering smooth, stress-free home removal services. From packing your belongings to safely transporting them, we handle everything with care and precision, ensuring a hassle-free move.",
    },
    {
      heading: "Your Trusted Home Removal Experts",
      paragraph:
        "With years of experience, our expert team understands the intricacies of every home removal. Whether you're moving across town or to a new city, we guarantee a seamless experience, offering support at every step of the journey.",
    },
    {
      heading: "Efficient and Stress-Free Home Removals",
      paragraph:
        "Efficiency and care are at the heart of what we do. Our trained professionals work swiftly, ensuring your move is not just fast, but also safe. You can count on us to make your next move as easy as possible, with attention to every detail.",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(imageInterval);
  }, [images.length]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 15000);

    return () => clearInterval(textInterval);
  }, [texts.length]);

  return (
    <div id="#" className="hero">
      <div className="hero-content">
        <div className="hero-txt" data-aos="fade-right" data-aos-duration="10000">
          <p id="bootcamp-title" data-aos="fade-right" data-aos-duration="10000">
            WELCOME TO DATARENCE REMOVALS
          </p>

          <ReactTyped
            strings={[texts[currentTextIndex].heading]}
            typeSpeed={100}
            backSpeed={50}
            loop={false}
            showCursor={false}
            className="typed-heading"
          />

          <ReactTyped
            strings={[texts[currentTextIndex].paragraph]}
            typeSpeed={30}
            backSpeed={20}
            loop={false}
            showCursor={false}
            className="typed-paragraph"
          />

          <div className="hero-btns">
            <button
              className={`apply-btn ${isHovered ? "no-arrow" : ""}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              aria-label="Request a quote for home removals"
            >
              Request Quote {isHovered ? "" : "➜"}
            </button>
          </div>
        </div>

        <div className="hero-img">
          <img
            src={images[currentImageIndex]}
            alt={`Home removal services image ${currentImageIndex + 1}`}
            className="main-img"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
