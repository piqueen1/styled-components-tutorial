import React from 'react';
import './App.css';
import StyledHeader from './components/StyledHeader';
import { DangerButton, SuccessButton } from './components/PropsButton';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <StyledHeader title="Hello from App" />
      <DangerButton big>Yikes!!!</DangerButton>
      <SuccessButton>Yikes!!!</SuccessButton>
    </div>
  );
};

export default App;
