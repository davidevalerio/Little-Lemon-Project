import React, { useReducer, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking'; // Import the ConfirmedBooking component
import { fetchAPI, submitAPI } from '../api'; // Adjust the import path as needed

const initializeTimes = async () => {
  const today = new Date().toISOString().split('T')[0]; // Format date as 'YYYY-MM-DD'
  try {
    const times = await fetchAPI(today);
    return times;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateTimes = async (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      try {
        const times = await fetchAPI(action.date);
        return times;
      } catch (error) {
        console.error(error);
        return state;
      }
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer((state, action) => {
    if (action.type === 'SET_TIMES') {
      return action.times;
    }
    return state;
  }, []);

  useEffect(() => {
    const fetchInitialTimes = async () => {
      const times = await initializeTimes();
      dispatch({ type: 'SET_TIMES', times });
    };
    fetchInitialTimes();
  }, []);

  const navigate = useNavigate();

  const submitForm = async (formData) => {
    try {
      const result = await submitAPI(formData);
      if (result) {
        navigate('/confirmed-booking');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/menu" element={<div>Menu Page</div>} />
        <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="/order-online" element={<div>Order Online Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} /> {/* Add the route for ConfirmedBooking */}
      </Routes>
    </main>
  );
}

export default Main;
