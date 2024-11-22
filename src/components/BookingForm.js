import React, { useState, useEffect } from 'react';
import { fetchAPI } from '../api'; // Adjust the import path as needed
import '../App.css'; // Ensure you import the CSS file

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Empty',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    specialInstructions: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [mobileError, setMobileError] = useState('');

  useEffect(() => {
    if (formData.date) {
      const fetchTimes = async () => {
        try {
          const times = await fetchAPI(formData.date);
          dispatch({ type: 'SET_TIMES', times });
          if (times.length > 0) {
            setFormData((prevFormData) => ({
              ...prevFormData,
              time: times[0],
            }));
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchTimes();
    }
  }, [formData.date, dispatch]);

  useEffect(() => {
    const isValid = formData.date && formData.time && formData.guests > 0 && formData.occasion &&
                    /^[A-Za-z\s]+$/.test(formData.firstName) && /^[A-Za-z\s]+$/.test(formData.lastName) &&
                    /^[0-9]+$/.test(formData.mobile) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError('');
      }
    }

    if (name === 'firstName') {
      const namePattern = /^[A-Za-z\s]+$/;
      if (!namePattern.test(value)) {
        setFirstNameError('First name should only contain letters and spaces.');
      } else {
        setFirstNameError('');
      }
    }

    if (name === 'lastName') {
      const namePattern = /^[A-Za-z\s]+$/;
      if (!namePattern.test(value)) {
        setLastNameError('Last name should only contain letters and spaces.');
      } else {
        setLastNameError('');
      }
    }

    if (name === 'mobile') {
      const mobilePattern = /^[0-9]+$/;
      if (!mobilePattern.test(value)) {
        setMobileError('Mobile phone should contain only numbers.');
      } else {
        setMobileError('');
      }
    }

    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', date: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Reservation Details</legend>

        <label htmlFor="res-date" className="mandatory">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          aria-label="Choose date"
        />

        <label htmlFor="res-time" className="mandatory">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          aria-label="Choose time"
        >
          {Array.isArray(availableTimes) && availableTimes.length > 0 ? (
            availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))
          ) : (
            <option value="">No available times</option>
          )}
        </select>

        <label htmlFor="guests" className="mandatory">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
          required
          aria-label="Number of guests"
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          aria-label="Occasion"
        >
          <option value="Empty"></option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Contact Information</legend>

        <label htmlFor="first-name" className="mandatory">First Name</label>
        <input
          type="text"
          id="first-name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          pattern="[A-Za-z\s]+"
          title="First name should only contain letters and spaces."
          aria-label="First Name"
        />
        {firstNameError && <span className="error-message">{firstNameError}</span>}

        <label htmlFor="last-name" className="mandatory">Last Name</label>
        <input
          type="text"
          id="last-name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          pattern="[A-Za-z\s]+"
          title="Last name should only contain letters and spaces."
          aria-label="Last Name"
        />
        {lastNameError && <span className="error-message">{lastNameError}</span>}

        <label htmlFor="mobile" className="mandatory">Mobile Phone</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
          pattern="[0-9]+"
          title="Mobile phone should contain only numbers."
          aria-label="Mobile Phone"
        />
        {mobileError && <span className="error-message">{mobileError}</span>}

        <label htmlFor="email" className="mandatory">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
          title="Please enter a valid email address."
          aria-label="Email"
        />
        {emailError && <span className="error-message">{emailError}</span>}

        <label htmlFor="special-instructions">Special Instructions</label>
        <textarea
          id="special-instructions"
          name="specialInstructions"
          value={formData.specialInstructions}
          onChange={handleChange}
          aria-label="Special Instructions"
        />
      </fieldset>

      <button type="submit" disabled={!isFormValid} aria-label="Submit Reservation">Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;
