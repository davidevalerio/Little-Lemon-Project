import React from 'react';

function CustomersSay() {
  const testimonials = [
    { id: 1, name: 'Customer 1', rating: 5, review: 'Amazing food!' },
    { id: 2, name: 'Customer 2', rating: 4, review: 'Great service!' },
    { id: 3, name: 'Customer 3', rating: 5, review: 'Will come again!' },
    { id: 4, name: 'Customer 4', rating: 5, review: 'Best experience ever!' },
  ];

  return (
    <section className="customers-say">
      <h2 className="headline">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <h3 className="card-title">{testimonial.name}</h3>
            <p>Rating: {testimonial.rating} stars</p>
            <p>{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;

