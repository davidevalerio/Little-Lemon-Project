import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/menu" element={<div>Menu Page</div>} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/order-online" element={<div>Order Online Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
    </main>
  );
}

export default Main;



