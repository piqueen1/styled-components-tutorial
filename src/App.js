import React from 'react';
import './App.css';
import StyledHeader from './components/StyledHeader';
import { PropsButton, BigButton } from './components/PropsButton';
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
      <PropsButton color="red">Thing One</PropsButton>
      <PropsButton color="purple">Thing Two</PropsButton>
      <PropsButton>Thing Three</PropsButton>
      <BigButton>Big Thing</BigButton>
      
    </div>
  );
}

export default App;
