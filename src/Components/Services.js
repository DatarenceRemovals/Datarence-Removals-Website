import React, { useState } from 'react';
import '../styles/Services.css';

const servicesData = [
  {
    title: 'Packing Services',
    description: `We handle all your packing needs, from wrapping household items to securing fragile pieces like glassware or electronics...`,
    image: '/images/packing.jpg',
    details: `Our packing services ensure that every item, from everyday belongings to delicate items like glassware or electronics, is securely packed for safe transport. We provide high-quality packing materials, including boxes, tape, and bubble wrap, to ensure your possessions are well-protected for the journey. We specialize in packing fragile items with extra care, so you can rest assured everything arrives in perfect condition.`,
    alt: 'Packing services for household and fragile items',
  },
  // Add other services as needed
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
    setSubmitted(false); // Reset submission status
    setError(null); // Reset error state
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false); // Reset submission state before form submit
    setError(null); // Reset error state before form submit

    try {
      const response = await fetch('https://submit-form.com/QWcKPtx2F', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send form data
      });

      if (response.ok) {
        setSubmitted(true); // Show success message
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        setError('Form submission failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <section id='services' className="services-section">
      <h4 className="section-subtitle">OUR SERVICES</h4>
      <h2 className="section-title">Offering Excellent and Impeccable House Removal Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img 
              src={service.image} 
              alt={service.alt} 
              className="service-image" 
              loading="lazy" 
            />
            <div className='service-text'>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button onClick={() => openModal(service)}>View more</button>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <h3>{selectedService.title}</h3>
            <p>{selectedService.details}</p>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Your Name"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Your Email"
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                value={formData.message}
                placeholder="Your Message"
                onChange={handleChange}
                required
              />
              <button type="submit">Submit</button>
            </form>

            {/* Display submission state */}
            {submitted && <p className="success-message">Form submitted successfully!</p>}
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
