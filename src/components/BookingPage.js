import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section id="booking">
      <h2 className="headline">Reserve a Table</h2>
      <p className="subtitle">Book your table at Little Lemon and enjoy a delightful dining experience.</p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      <p className="additional-info">We look forward to serving you!</p>
    </section>
  );
}

export default BookingPage;

