import React from 'react';

function CustomersSay() {
  const testimonials = [
    { id: 1, name: 'Customer 1', rating: 5, review: 'Amazing food!' },
    { id: 2, name: 'Customer 2', rating: 4, review: 'Great service!' },
    { id: 3, name: 'Customer 3', rating: 5, review: 'Will come again!' },
  ];

  return (
    <section className="customers-say">
      <h2>What Our Customers Say</h2>
      <ul>
        {testimonials.map(testimonial => (
          <li key={testimonial.id}>
            <h3>{testimonial.name}</h3>
            <p>Rating: {testimonial.rating} stars</p>
            <p>{testimonial.review}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CustomersSay;
