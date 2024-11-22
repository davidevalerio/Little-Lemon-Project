import React from 'react';
import { useNavigate } from 'react-router-dom';
import callToActionImage from '../images/restauranfood.jpg'; // Adjust the path as needed

function CallToAction() {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/reservations');
  };

  return (
    <section className="call-to-action">
      <div className="cta-text">
        <h2 className="headline">Welcome to Little Lemon</h2>
        <p className="subtitle">Escape to the Mediterranean without leaving town. Little Lemon invites you to savor authentic flavors and warm hospitality. From our signature dishes to our handcrafted cocktails, every bite is a journey. Book your table today and let us transport you to the sun-kissed shores of the Mediterranean.</p>
        <button className="reserve-button" onClick={handleReserveClick}>Reserve a Table</button>
      </div>
      <div className="cta-image">
        <img src={callToActionImage} alt="Delicious Mediterranean dish" />
      </div>
    </section>
  );
}

export default CallToAction;
