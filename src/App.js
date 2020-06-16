/* Finn's */

import React from 'react';
import './App.css';
import Hero from './components/Hero';
import desert from './images/img1.jpg';
import turtle from './images/img3.jpg';

function App() {
  return (
    <div>
      <Hero img={turtle} />
      <Hero img={desert} />
      <Hero big />
    </div>
  );
};

export default App;
