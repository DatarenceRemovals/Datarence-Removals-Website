import React from "react";
import "../styles/Testimonials.css";

const testimonials = [
  {
    text: "Absolutely fantastic service! The team arrived on time, worked quickly, and treated my belongings with care. Best removal company I've used in the UK!",
    name: "Oliver Bishop",
    image: "path/to/image1.jpg",
    rating: 5,
  },
  {
    text: "I was dreading the move, but this company made it so much easier. Everything was packed securely, and nothing was damaged. I highly recommend them!",
    name: "Amelia Harrington",
    image: "path/to/image2.jpg",
    rating: 5,
  },
  {
    text: "The team was so professional and friendly. They made my move across London stress-free. I couldn't believe how smooth the process was.",
    name: "Sebastian Whitfield",
    image: "path/to/image3.jpg",
    rating: 5,
  },
  {
    text: "Brilliant service! The movers were punctual, and they took great care with all of my furniture. I would recommend them to anyone moving in the UK.",
    name: "Isabella Hughes",
    image: "path/to/image4.jpg",
    rating: 4,
  },
  {
    text: "Excellent removal company! They went above and beyond to make sure everything was handled with care, even in the typical British weather!",
    name: "Henry Davies",
    image: "path/to/image5.jpg",
    rating: 5,
  },
  {
    text: "They made moving home such a breeze. From packing up my kitchen to transporting everything safely to my new flat, they were amazing throughout.",
    name: "Charlotte Beaumont",
    image: "path/to/image6.jpg",
    rating: 5,
  },
];


const renderStars = (rating) => {
  return [...Array(5)].map((_, i) => (
    <span key={i} className={i < rating ? "star-filled" : "star-empty"}>
      ★
    </span>
  ));
};

const Testimonial = () => {
  const handleMouseMove = (event) => {
    const cards = document.querySelectorAll(".testimonial-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      card.style.setProperty("--xPos", `${x}px`);
      card.style.setProperty("--yPos", `${y}px`);
    });
  };

  return (
    <div id="testimonials" className="testimonial-container">
      <h1 data-aos="fade-in" data-aos-duration="10000">What Our Clients Say</h1>
      <h2 data-aos="fade-up" data-aos-duration="10000">Join Over 1000+ People Who Trust Us With Their Moves</h2>
      <div
        className="testimonial-grid"
        onMouseMove={handleMouseMove}
        data-aos="fade-in"
        data-aos-duration="50000"
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>"{testimonial.text}"</p>
            <div className="star-rating">{renderStars(testimonial.rating)}</div>
            <h4>{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
