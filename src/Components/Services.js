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
  {
    title: 'Loading and Unloading',
    description: `Our team carefully handles lifting and securing your items for transport to prevent any damage...`,
    image: '/images/loading.jpg',
    details: `Our loading and unloading services ensure that your belongings are handled with care. From the moment we lift your items onto the removal truck, we make sure everything is positioned securely to avoid any shifting or damage during transport. Upon arrival, we carefully unload everything, placing it in your new home exactly where you want it.`,
    alt: 'Loading and unloading services for a safe move',
  },
  {
    title: 'Transportation',
    description: `We offer reliable transport for your belongings, whether you're moving locally or across borders...`,
    image: '/images/hero-img3.jpg',
    details: `Our transportation services cater to moves of any scale, from local relocations to international transfers. We ensure that our vans and trucks are properly sized to accommodate your belongings, making sure everything is transported safely. Whether you're moving down the street or to another country, our vehicles are equipped to handle your needs with the utmost care.`,
    alt: 'Safe and reliable transportation services for home removals',
  },
  {
    title: 'Storage',
    description: `If you need temporary or long-term storage, we provide secure, climate-controlled facilities...`,
    image: '/images/warehouse.jpg',
    details: `We understand that some moves require a bit of extra time, and that's why we offer secure storage solutions. Our facilities are climate-controlled to protect your belongings from humidity or temperature damage, and they're monitored to ensure safety. Whether you need short-term storage between homes or long-term options, we have the perfect solution for you.`,
    alt: 'Secure and climate-controlled storage solutions',
  },
  {
    title: 'Furniture Dismantling/Reassembly',
    description: `We dismantle large furniture for safe transport and reassemble it at your new home...`,
    image: '/images/dismantle.jpg',
    details: `Our team provides complete furniture dismantling and reassembly services. We take apart large items like beds, wardrobes, and desks, making it easier to move them safely. Once your items arrive at your new home, we carefully reassemble everything for you, ensuring that your furniture is back to its original form and function.`,
    alt: 'Furniture dismantling and reassembly services',
  },
  {
    title: 'Unpacking Services',
    description: `Let us handle the unpacking so you can settle into your new home without the hassle...`,
    image: '/images/unpacking.jpg',
    details: `Our unpacking services are designed to make your move even easier. Once your belongings have been safely transported, our team will unpack and organize them according to your preferences. We'll also take care of the removal of all packing materials, leaving you with a clean and organized home.`,
    alt: 'Unpacking services for easy move-in',
  },
  {
    title: 'Insurance',
    description: `We offer insurance to protect your belongings against any damage or loss during the move...`,
    image: '/images/insurance.jpg',
    details: `We know how important your belongings are, and while we take every precaution to ensure their safety, sometimes accidents happen. That's why we offer comprehensive insurance coverage during your move. From small items to large furniture, your possessions will be protected against any loss or damage.`,
    alt: 'Insurance coverage for belongings during the move',
  },
  {
    title: 'Specialty Services',
    description: `For valuable or fragile items like pianos and antiques, we provide specialized care...`,
    image: '/images/specialty.jpg',
    details: `Our specialty services are designed to handle the most delicate or valuable items in your home. Whether you're moving a grand piano, priceless artwork, or antiques, our team has the expertise to ensure that everything is safely transported. We also handle international moves, including managing customs and documentation, to make sure your move goes smoothly no matter where you're going.`,
    alt: 'Specialized moving services for fragile or valuable items',
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null); 

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id='services' className="services-section">
      <h4 className="section-subtitle" data-aos="fade-up" data-aos-duration="10000">OUR SERVICES</h4>
      <h2 className="section-title" data-aos="fade-up" data-aos-duration="10000">Offering Excellent and Impeccable House Removal Services</h2>
      <div className="services-grid" data-aos="zoom-in" data-aos-duration="10000">
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

      {/* Modal for showing more details */}
      {selectedService && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <h3>{selectedService.title}</h3>
            <p>{selectedService.details}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
