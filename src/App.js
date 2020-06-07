import React from 'react';
import './App.css';
import { Button } from './components/Buttons.js';
import { SecondButton } from './components/Buttons.js';
import Header from './components/Header'

function App() {
  return (
  <div>
    <Header />
    <Button>Click Me</Button>
    <SecondButton>Click Me Next</SecondButton>
  </div>
  );
}

export default App;
