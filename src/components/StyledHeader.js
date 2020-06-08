import React from 'react';
import styled from 'styled-components';

const StyledHeader = () => {
  return (
    <StyledWrapper>
      <h1>Hello from Styled Header</h1>
      <h2 className="random">Say it like it is, sister</h2>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  background: red;
`

export default StyledHeader;