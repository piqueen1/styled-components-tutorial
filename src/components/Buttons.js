import styled from 'styled-components';

const color = '#f15025';
const padding  = 'padding: 1rem';
const margin  = 'margin: 1rem';
const border = (width) => {
  return `border:solid ${width} red`
}

export const Button = styled.button`
  ${padding};
  ${margin};
  color: red;
  background: blue;
  text-transform: uppercase;
  ${border('10px')};
`;

export const SecondButton = styled.button`
  ${padding};
  ${margin};
  ${border()}
  color: ${color};
  background: var(--primaryColor);
  text-transform: uppercase;
`;
