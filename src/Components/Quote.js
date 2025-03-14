import React, { useState } from "react";
import "../styles/Quote.css";

function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentAddress: "",
    destinationAddress: "",
    moveDate: "",
    propertySize: "",
    propertyType: "Apartment",
    services: {
      packing: false,
      unpacking: false,
      storage: false,
      dismantling: false,
    },
    specialItems: [],
    contactMethod: "email",
    insurance: "",
    notes: "",
    budget: "",
  });

  const [step, setStep] = useState(1); // Progress indicator step
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        services: { ...formData.services, [name]: checked },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSpecialItemsChange = (e) => {
    const { value } = e.target;
    let items = [...formData.specialItems];
    if (items.includes(value)) {
      items = items.filter((item) => item !== value);
    } else {
      items.push(value);
    }
    setFormData({ ...formData, specialItems: items });
  };

  // Step-wise validation
  const validateStep = () => {
    let newErrors = {};
    if (step === 1) {
      if (!formData.name) newErrors.name = "Name is required.";
      if (!formData.email) newErrors.email = "Email is required.";
      if (!formData.phone) newErrors.phone = "Phone number is required.";
    } else if (step === 2) {
      if (!formData.currentAddress)
        newErrors.currentAddress = "Pickup address is required.";
      if (!formData.destinationAddress)
        newErrors.destinationAddress = "Drop-off address is required.";
      if (!formData.moveDate) newErrors.moveDate = "Move date is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      setFormSubmitted(true);
      // Handle form submission logic, such as sending data to backend
      console.log("Form data:", formData);
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div id="get-quote" className="quote-container">
      {/* Quote Text Div */}
      <div className="quote-text">
        <h1>Request Quote</h1>
        <p>Fill out the form to receive a personalized quote for your house removal service.</p>
      </div>

      {/* Quote Form Div */}
      <div className="quote-form">
        {formSubmitted ? (
          <div className="success-message">
            <h2>Thank you!</h2>
            <p>Your quote request has been submitted successfully. We will contact you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <h2 className="form-step-title">Basic Information</h2>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "error" : ""}
                    aria-label="Full Name"
                  />
                  {errors.name && <p className="error-text">{errors.name}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "error" : ""}
                    aria-label="Email"
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? "error" : ""}
                    aria-label="Phone Number"
                  />
                  {errors.phone && <p className="error-text">{errors.phone}</p>}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="form-step-title">Move Details</h2>
                <div className="form-group">
                  <label htmlFor="currentAddress">Current Address</label>
                  <input
                    type="text"
                    name="currentAddress"
                    value={formData.currentAddress}
                    onChange={handleChange}
                    className={errors.currentAddress ? "error" : ""}
                    aria-label="Current Address"
                  />
                  {errors.currentAddress && <p className="error-text">{errors.currentAddress}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="destinationAddress">Destination Address</label>
                  <input
                    type="text"
                    name="destinationAddress"
                    value={formData.destinationAddress}
                    onChange={handleChange}
                    className={errors.destinationAddress ? "error" : ""}
                    aria-label="Destination Address"
                  />
                  {errors.destinationAddress && <p className="error-text">{errors.destinationAddress}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="moveDate">Move Date</label>
                  <input
                    type="date"
                    name="moveDate"
                    value={formData.moveDate}
                    onChange={handleChange}
                    className={errors.moveDate ? "error" : ""}
                    aria-label="Move Date"
                  />
                  {errors.moveDate && <p className="error-text">{errors.moveDate}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="propertySize">Property Size (e.g., 2-bedroom apartment)</label>
                  <input
                    type="text"
                    name="propertySize"
                    value={formData.propertySize}
                    onChange={handleChange}
                    aria-label="Property Size"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="propertyType">Property Type</label>
                  <select name="propertyType" value={formData.propertyType} onChange={handleChange} aria-label="Property Type">
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Condo">Condo</option>
                  </select>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="form-step-title">Additional Information</h2>
                <div className="form-group">
                  <label>Additional Services</label>
                  <div>
                    <input
                      type="checkbox"
                      name="packing"
                      checked={formData.services.packing}
                      onChange={handleChange}
                      aria-label="Packing Services"
                    />
                    <label>Packing Services</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="unpacking"
                      checked={formData.services.unpacking}
                      onChange={handleChange}
                      aria-label="Unpacking Services"
                    />
                    <label>Unpacking Services</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="storage"
                      checked={formData.services.storage}
                      onChange={handleChange}
                      aria-label="Storage Services"
                    />
                    <label>Storage Services</label>
                  </div>
                </div>

                <div className="form-group">
                  <label>Special Items (e.g., piano, antique furniture)</label>
                  <select multiple={true} name="specialItems" onChange={handleSpecialItemsChange} aria-label="Special Items">
                    <option value="bed">Bed</option>
                    <option value="sofa">Sofa</option>
                    <option value="fridge">Fridge</option>
                    <option value="piano">Piano</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Budget</label>
                  <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    aria-label="Budget"
                  />
                </div>

                <div className="form-group">
                  <label>Additional Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    aria-label="Additional Notes"
                    placeholder="Any special requests or instructions?"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Do you require insurance coverage?</label>
                  <input
                    type="text"
                    name="insurance"
                    value={formData.insurance}
                    onChange={handleChange}
                    aria-label="Insurance"
                  />
                </div>
              </>
            )}

            {/* Progress Indicator */}
            <div className="progress-indicator">
              <p>Step {step} of 3</p>
            </div>

            {/* Navigation Buttons */}
            <div className="form-navigation">
              {step > 1 && <button type="button" onClick={prevStep}>Previous</button>}
              {step < 3 && <button type="button" onClick={nextStep}>Next</button>}
              {step === 3 && <button type="submit">Submit</button>}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Quote;
