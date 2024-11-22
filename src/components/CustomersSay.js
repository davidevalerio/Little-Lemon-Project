import React from 'react';

function CustomersSay() {
  const testimonials = [
    { id: 1, name: 'Fabrizio Fabrizi', review: 'Amazing food! Bellissimo Amore Mio!' },
    { id: 2, name: 'Roger Ghino', review: 'Great service! Incredible Carbonara' },
    { id: 3, name: 'Sarah Jessica Perker', review: 'Will come again! Thanks guys' },
    { id: 4, name: 'Donatella Spinnaker', review: 'Best experience ever! I love my Little Lemon' },
  ];

  return (
    <section className="customers-say">
      <h2 className="headline">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <h3 className="card-title">{testimonial.name}</h3>
            <p className="review">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
