// src/Sections/Register.js
import React from 'react';
import './Register.css'; // Import the CSS file

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Registration Form</h1>
        <form className="register-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;