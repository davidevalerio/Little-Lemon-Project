import React from 'react';
import special1Image from '../images/bruschetta.svg'; // Adjust the path as needed
import special2Image from '../images/greek salad.jpg'; // Adjust the path as needed
import special3Image from '../images/lemon dessert.jpg'; // Adjust the path as needed

function Specials() {
  const specials = [
    { id: 1, name: 'Special 1', description: 'Delicious special 1', image: special1Image },
    { id: 2, name: 'Special 2', description: 'Delicious special 2', image: special2Image },
    { id: 3, name: 'Special 3', description: 'Delicious special 3', image: special3Image },
  ];

  return (
    <section className="specials">
      <h2 className="headline">Specials</h2>
      <div className="specials-container">
        {specials.map(special => (
          <div key={special.id} className="special-card">
            <img src={special.image} alt={special.name} className="special-image" />
            <h3 className="card-title">{special.name}</h3>
            <p>{special.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;
