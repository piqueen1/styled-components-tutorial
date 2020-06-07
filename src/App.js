import React from 'react';
import './App.css';
import { Button } from './components/Buttons';
import { SecondButton } from './components/Buttons';

function App() {
  return (
  <div>
    Hello from app
    <Button>Click Me</Button>
    <SecondButton>Click Me Next</SecondButton>
  </div>
  );
}

export default App;
