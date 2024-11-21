import React from 'react';

function Specials() {
  const specials = [
    { id: 1, name: 'Special 1', description: 'Delicious special 1' },
    { id: 2, name: 'Special 2', description: 'Delicious special 2' },
    { id: 3, name: 'Special 3', description: 'Delicious special 3' },
  ];

  return (
    <section className="specials">
      <h2>Specials</h2>
      <ul>
        {specials.map(special => (
          <li key={special.id}>
            <h3>{special.name}</h3>
            <p>{special.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Specials;
