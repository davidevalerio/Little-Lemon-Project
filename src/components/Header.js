import React from 'react';
import logo from '../images/logo.svg'; // Import the logo

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="Little Lemon Logo" />
    </header>
  );
}

export default Header;
