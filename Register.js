import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
const RegistrationForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
  });

  // State for tracking registration status
  const [registrationStatus, setRegistrationStatus] = useState(null);

  // Event handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform registration logic (you can send the data to a server, update a database, etc.)
    // For simplicity, let's assume a successful registration for this example
    setRegistrationStatus('success');
  };

  return (
    <>
    <Navbar/>
    <div className="container mt-4">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="college">College</label>
          <input
            type="text"
            className="form-control"
            id="college"
            name="college"
            value={formData.college}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary m-1">
          Register
        </button>
      </form>

      {/* Display registration status */}
      {registrationStatus === 'success' && (
        <div className="alert alert-success mt-3" role="alert">
          Registration Successful! You will receive a confirmation email.
        </div>
      )}

<Link to="/">
            <button className="btn btn-warning m-1">Go Back</button>
          </Link>
    </div>
    <Footer/>
    </>
  );
};

export default RegistrationForm;
