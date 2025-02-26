

import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [events, setEvents] = useState({
    coding: false,
    webDesigning: false,
    quizz: false,
    gaming: false,
    productLaunch: false,
    itManager: false,
    reels: false,
  });

  const [eventDetails, setEventDetails] = useState({
    coding: { participant1: '', participant2: '' },
    webDesigning: { participant1: '', participant2: '' },
    quizz: { participant1: '', participant2: '' },
    gaming: { participant1: '', participant2: '', participant3: '', participant4: '' },
    productLaunch: { participant1: '', participant2: '' },
    itManager: { participant1: '' }, // Only one participant for IT Manager
    reels: { participant1: '', participant2: '' },
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    collegeName: '',
    course: 'BCA',
    semester: '',
    transactionId: '',
  });

  const [errors, setErrors] = useState({});
  const [showPaymentImage, setShowPaymentImage] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setEvents({ ...events, [name]: checked });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEventDetailChange = (event, eventName) => {
    const { name, value } = event.target;
    setEventDetails({
      ...eventDetails,
      [eventName]: {
        ...eventDetails[eventName],
        [name]: value,
      },
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate basic form fields
    if (!formData.name) newErrors.name = 'Head Name is required';
    if (!formData.phone) newErrors.phone = 'Head Phone no is required';
    if (!formData.collegeName) newErrors.collegeName = 'College Name is required';
    if (!formData.semester) newErrors.semester = 'Semester is required';

    // Validate at least one event is selected
    if (!Object.values(events).some((event) => event)) {
      newErrors.events = 'At least one event must be selected';
    }

    // Validate participant details for selected events
    Object.keys(events).forEach((event) => {
      if (events[event]) {
        const participants = eventDetails[event];
        if (event === 'gaming') {
          // Gaming requires 4 participants
          if (!participants.participant1) newErrors[`${event}-participant1`] = 'Participant 1 is required';
          if (!participants.participant2) newErrors[`${event}-participant2`] = 'Participant 2 is required';
          if (!participants.participant3) newErrors[`${event}-participant3`] = 'Participant 3 is required';
          if (!participants.participant4) newErrors[`${event}-participant4`] = 'Participant 4 is required';
        } else if (event === 'itManager') {
          // IT Manager requires only 1 participant
          if (!participants.participant1) newErrors[`${event}-participant1`] = 'Participant 1 is required';
        } else {
          // Other events require 2 participants
          if (!participants.participant1) newErrors[`${event}-participant1`] = 'Participant 1 is required';
          if (!participants.participant2) newErrors[`${event}-participant2`] = 'Participant 2 is required';
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully:', formData, eventDetails);
    } else {
      console.log('Form validation failed');
    }
  };

  const handlePayButtonClick = () => {
    setShowPaymentImage(true);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Registration</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          {/* Basic Form Fields */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Head Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Head Phone no:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>

          {/* More Form Fields */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="collegeName">College Name:</label>
              <input
                type="text"
                id="collegeName"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleInputChange}
                required
              />
              {errors.collegeName && <span className="error">{errors.collegeName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="course">Course:</label>
              <select id="course" name="course" value={formData.course} onChange={handleInputChange}>
                <option>BCA</option>
                <option>MCA</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="semester">Semester:</label>
              <input
                type="text"
                id="semester"
                name="semester"
                value={formData.semester}
                onChange={handleInputChange}
                required
              />
              {errors.semester && <span className="error">{errors.semester}</span>}
            </div>
          </div>

          {/* Events Section */}
          <h2>Events</h2>
          {errors.events && <span className="error">{errors.events}</span>}
          <div className="events-grid">
            {Object.keys(events).map((event) => (
              <div className="event-group" key={event}>
                <label>
                  <input
                    type="checkbox"
                    name={event}
                    checked={events[event]}
                    onChange={handleCheckboxChange}
                  />
                  {event.replace(/([A-Z])/g, ' $1').toUpperCase()}
                </label>
                {events[event] && (
                  <div className="event-details">
                    {event === 'gaming' ? (
                      <>
                        <input
                          type="text"
                          placeholder="Participant 1"
                          name="participant1"
                          value={eventDetails[event].participant1}
                          onChange={(e) => handleEventDetailChange(e, event)}
                          required
                          className={errors[`${event}-participant1`] ? 'error' : ''}
                        />
                        {errors[`${event}-participant1`] && (
                          <span className="error">{errors[`${event}-participant1`]}</span>
                        )}
                        <input
                          type="text"
                          placeholder="Participant 2"
                          name="participant2"
                          value={eventDetails[event].participant2}
                          onChange={(e) => handleEventDetailChange(e, event)}
                          required
                          className={errors[`${event}-participant2`] ? 'error' : ''}
                        />
                        {errors[`${event}-participant2`] && (
                          <span className="error">{errors[`${event}-participant2`]}</span>
                        )}
                        <input
                          type="text"
                          placeholder="Participant 3"
                          name="participant3"
                          value={eventDetails[event].participant3}
                          onChange={(e) => handleEventDetailChange(e, event)}
                          required
                          className={errors[`${event}-participant3`] ? 'error' : ''}
                        />
                        {errors[`${event}-participant3`] && (
                          <span className="error">{errors[`${event}-participant3`]}</span>
                        )}
                        <input
                          type="text"
                          placeholder="Participant 4"
                          name="participant4"
                          value={eventDetails[event].participant4}
                          onChange={(e) => handleEventDetailChange(e, event)}
                          required
                          className={errors[`${event}-participant4`] ? 'error' : ''}
                        />
                        {errors[`${event}-participant4`] && (
                          <span className="error">{errors[`${event}-participant4`]}</span>
                        )}
                      </>
                    ) : event === 'itManager' ? (
                      <>
                        <input
                          type="text"
                          placeholder="Participant 1"
                          name="participant1"
                          value={eventDetails[event].participant1}
                          onChange={(e) => handleEventDetailChange(e, event)}
                          required
                          className={errors[`${event}-participant1`] ? 'error' : ''}
                        />
                        {errors[`${event}-participant1`] && (
                          <span className="error">{errors[`${event}-participant1`]}</span>
                        )}
                      </>
                    ) : (
                      <>
                        <input
                          type="text"
                          placeholder="Participant 1"
                          name="participant1"
                          value={eventDetails[event].participant1}
                          onChange={(e) => handleEventDetailChange(e, event)}
                          required
                          className={errors[`${event}-participant1`] ? 'error' : ''}
                        />
                        {errors[`${event}-participant1`] && (
                          <span className="error">{errors[`${event}-participant1`]}</span>
                        )}
                        <input
                          type="text"
                          placeholder="Participant 2"
                          name="participant2"
                          value={eventDetails[event].participant2}
                          onChange={(e) => handleEventDetailChange(e, event)}
                          required
                          className={errors[`${event}-participant2`] ? 'error' : ''}
                        />
                        {errors[`${event}-participant2`] && (
                          <span className="error">{errors[`${event}-participant2`]}</span>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Transaction ID */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="transactionId">Transaction ID:</label>
              <input
                type="text"
                id="transactionId"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Pay Button */}
          <button type="button" className="pay-button" onClick={handlePayButtonClick}>
            Pay
          </button>

          {/* Payment Image */}
          {showPaymentImage && (
            <div className="payment-image">
              <img src="/images/bgf.jpg" alt="Payment QR Code" />
            </div>
          )}

          {/* Query Section */}
          <div className="query-section">
            <p>If any query, call: 65879585</p>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;