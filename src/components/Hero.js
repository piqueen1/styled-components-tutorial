/* Finn's */

import styled from 'styled-components';
import mountain from '../images/img2.jpeg';

const Hero = styled.div`
  min-height: ${props => (props.big ? '100 vh' : '50 vh')};
  background-image: url(${props => (props.img ? props.img : mountain)});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default Hero;
