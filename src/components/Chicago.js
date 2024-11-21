import React from 'react';
import logo from '../images/logo.svg'; // Adjust the path as needed

function Chicago() {
  return (
    <section className="chicago">
      <div className="chicago-column">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
      </div>
      <div className="chicago-column">
        <h3 className="card-title">Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
      <div className="chicago-column">
        <h3 className="card-title">Contact Us</h3>
        <p>123 Main Street, Chicago, IL 60601</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@littlelemon.com</p>
      </div>
      <div className="chicago-column">
        <h3 className="card-title">Follow Us</h3>
        <p><a href="https://www.facebook.com">Facebook</a></p>
        <p><a href="https://www.instagram.com">Instagram</a></p>
        <p><a href="https://www.twitter.com">X</a></p>
      </div>
    </section>
  );
}

export default Chicago;
