import React, { useState, useEffect } from 'react';
import { fetchAPI } from '../api'; // Adjust the import path as needed

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  useEffect(() => {
    if (formData.date) {
      const fetchTimes = async () => {
        try {
          const times = await fetchAPI(formData.date);
          dispatch({ type: 'SET_TIMES', times });
        } catch (error) {
          console.error(error);
        }
      };
      fetchTimes();
    }
  }, [formData.date, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', date: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
      >
        {Array.isArray(availableTimes) && availableTimes.length > 0 ? (
          availableTimes.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))
        ) : (
          <option value="">No available times</option>
        )}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
}

export default BookingForm;
