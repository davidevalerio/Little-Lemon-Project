import React from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';

function Homepage() {
  return (
    <main>
      <CallToAction />
      <Specials />
      <CustomersSay />
    </main>
  );
}

export default Homepage;
