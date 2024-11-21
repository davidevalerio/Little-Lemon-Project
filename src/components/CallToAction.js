import React from 'react';
import { useNavigate } from 'react-router-dom';
import callToActionImage from '../images/Mario and Adrian A.jpg'; // Adjust the path as needed

function CallToAction() {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/reservations');
  };

  return (
    <section className="call-to-action">
      <div className="cta-text">
        <h2 className="headline">Welcome to Little Lemon</h2>
        <p className="subtitle">Experience the best Mediterranean cuisine in Chicago.</p>
        <button className="reserve-button" onClick={handleReserveClick}>Reserve a Table</button>
      </div>
      <div className="cta-image">
        <img src={callToActionImage} alt="Delicious Mediterranean dish" />
      </div>
    </section>
  );
}

export default CallToAction;
