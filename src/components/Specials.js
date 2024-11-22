import React from 'react';
import special1Image from '../images/bruschetta.svg'; // Adjust the path as needed
import special2Image from '../images/greek salad.jpg'; // Adjust the path as needed
import special3Image from '../images/lemon dessert.jpg'; // Adjust the path as needed

function Specials() {
  const specials = [
    { id: 1, name: 'Bruschetta', description: 'A classic Italian appetizer with toasted bread, fresh tomatoes, and basil.', image: special1Image },
    { id: 2, name: 'Greek Salad', description: 'A refreshing and healthy salad with cucumbers, tomatoes, olives, feta cheese, and a tangy dressing.', image: special2Image },
    { id: 3, name: 'Lemon Cheese Cake', description: 'A creamy and decadent dessert with a tangy lemon flavor.', image: special3Image },
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
