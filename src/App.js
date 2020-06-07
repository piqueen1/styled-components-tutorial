import React from 'react';
import './App.css';
import { Button } from './components/Buttons';
import { SecondButton } from './components/Buttons';
import Header from './components/Header'

function App() {
  return (
  <div>
    <Header />
    Hello from app
    <Button>Click Me</Button>
    <SecondButton>Click Me Next</SecondButton>
  </div>
  );
}

export default App;
