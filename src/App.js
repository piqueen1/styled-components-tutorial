import React from 'react';
import './App.css';
import StyledHeader from './components/StyledHeader';
import PropsButton from './components/PropsButton';

function App() {
  return (
  <div>
    <StyledHeader title="Hello from App" />
    <PropsButton color='blue'>Thing One</PropsButton>
    <PropsButton color='red'>Thing Two</PropsButton>
  </div>
  );
}

export default App;
