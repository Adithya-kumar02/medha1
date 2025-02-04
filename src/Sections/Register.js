import React, { useState } from 'react';
import './Register.css'; // Import the CSS file

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

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    CollegeName: '',
    course: 'BCA',
    Semester: '',
    codingInput1: '',
    codingInput2: '',
    webDesigningInput1: '',
    webDesigningInput2: '',
    quizzInput1: '',
    quizzInput2: '',
    gamingInput1: '',
    gamingInput2: '',
    gamingInput3: '',
    gamingInput4: '',
    productLaunchInput1: '',
    productLaunchInput2: '',
    itManagerInput1: '',
    reelsInput1: '',
    reelsInput2: '',
  });

  const [errors, setErrors] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setEvents({
      ...events,
      [name]: checked,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Check if at least one event is selected
    if (!Object.values(events).some((event) => event)) {
      newErrors.events = 'At least one event must be selected';
    }

    // Check if all required fields are filled
    if (!formData.name) newErrors.name = 'Head Name is required';
    if (!formData.phone) newErrors.phone = 'Head Phone no is required';
    if (!formData.CollegeName) newErrors.CollegeName = 'College Name is required';
    if (!formData.Semester) newErrors.Semester = 'Semester is required';

    // Check event-specific requirements
    if (events.gaming) {
      if (!formData.gamingInput1 || !formData.gamingInput2 || !formData.gamingInput3 || !formData.gamingInput4) {
        newErrors.gaming = 'All 4 inputs for Gaming are required';
      }
    }

    if (events.itManager && !formData.itManagerInput1) {
      newErrors.itManager = 'Input for IT Manager is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log('Form submitted successfully:', formData);
      // You can add your form submission logic here
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Registration</h1>
        <form className="register-form" onSubmit={handleSubmit}>
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
                type="phone"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="CollegeName">College Name:</label>
              <input
                type="text"
                id="CollegeName"
                name="CollegeName"
                value={formData.CollegeName}
                onChange={handleInputChange}
                required
              />
              {errors.CollegeName && <span className="error">{errors.CollegeName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="course">Course:</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
              >
                <option>BCA</option>
                <option>MCA</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="Semester">Sem:</label>
              <input
                type="text"
                id="Semester"
                name="Semester"
                value={formData.Semester}
                onChange={handleInputChange}
                required
              />
              {errors.Semester && <span className="error">{errors.Semester}</span>}
            </div>
          </div>

          <h1>Events details</h1>
          {errors.events && <span className="error">{errors.events}</span>}

          <div className="events-grid">
            <div className="event-group">
              <label>
                <input
                  type="checkbox"
                  name="coding"
                  checked={events.coding}
                  onChange={handleCheckboxChange}
                />
                Coding
              </label>
              {events.coding && (
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Input 1 for Coding"
                    name="codingInput1"
                    value={formData.codingInput1}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder="Input 2 for Coding"
                    name="codingInput2"
                    value={formData.codingInput2}
                    onChange={handleInputChange}
                  />
                </div>
              )}
            </div>

            <div className="event-group">
              <label>
                <input
                  type="checkbox"
                  name="webDesigning"
                  checked={events.webDesigning}
                  onChange={handleCheckboxChange}
                />
                Web Designing
              </label>
              {events.webDesigning && (
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Input 1 for Web Designing"
                    name="webDesigningInput1"
                    value={formData.webDesigningInput1}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder="Input 2 for Web Designing"
                    name="webDesigningInput2"
                    value={formData.webDesigningInput2}
                    onChange={handleInputChange}
                  />
                </div>
              )}
            </div>

            <div className="event-group">
              <label>
                <input
                  type="checkbox"
                  name="quizz"
                  checked={events.quizz}
                  onChange={handleCheckboxChange}
                />
                Quizz
              </label>
              {events.quizz && (
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Input 1 for Quizz"
                    name="quizzInput1"
                    value={formData.quizzInput1}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder="Input 2 for Quizz"
                    name="quizzInput2"
                    value={formData.quizzInput2}
                    onChange={handleInputChange}
                  />
                </div>
              )}
            </div>

            <div className="event-group">
              <label>
                <input
                  type="checkbox"
                  name="gaming"
                  checked={events.gaming}
                  onChange={handleCheckboxChange}
                />
                Gaming
              </label>
              {events.gaming && (
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Input 1 for Gaming"
                    name="gamingInput1"
                    value={formData.gamingInput1}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder="Input 2 for Gaming"
                    name="gamingInput2"
                    value={formData.gamingInput2}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder="Input 3 for Gaming"
                    name="gamingInput3"
                    value={formData.gamingInput3}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder="Input 4 for Gaming"
                    name="gamingInput4"
                    value={formData.gamingInput4}
                    onChange={handleInputChange}
                  />
                </div>
              )}
              {errors.gaming && <span className="error">{errors.gaming}</span>}
            </div>

            <div className="event-group">
              <label>
                <input
                  type="checkbox"
                  name="productLaunch"
                  checked={events.productLaunch}
                  onChange={handleCheckboxChange}
                />
                Product Launch
              </label>
              {events.productLaunch && (
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Input 1 for Product Launch"
                    name="productLaunchInput1"
                    value={formData.productLaunchInput1}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder="Input 2 for Product Launch"
                    name="productLaunchInput2"
                    value={formData.productLaunchInput2}
                    onChange={handleInputChange}
                  />
                </div>
              )}
            </div>

            <div className="event-group">
              <label>
                <input
                  type="checkbox"
                  name="itManager"
                  checked={events.itManager}
                  onChange={handleCheckboxChange}
                />
                IT Manager
              </label>
              {events.itManager && (
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Input 1 for IT Manager"
                    name="itManagerInput1"
                    value={formData.itManagerInput1}
                    onChange={handleInputChange}
                  />
                </div>
              )}
              {errors.itManager && <span className="error">{errors.itManager}</span>}
            </div>

            <div className="event-group">
              <label>
                <input
                  type="checkbox"
                  name="reels"
                  checked={events.reels}
                  onChange={handleCheckboxChange}
                />
                Reels
              </label>
              {events.reels && (
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Input 1 for Reels"
                    name="reelsInput1"
                    value={formData.reelsInput1}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder="Input 2 for Reels"
                    name="reelsInput2"
                    value={formData.reelsInput2}
                    onChange={handleInputChange}
                  />
                </div>
              )}
            </div>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;