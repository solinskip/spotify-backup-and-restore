import styled, {createGlobalStyle} from 'styled-components';
import trailImage from './images/trail.svg';
import backgroundImage from './images/background.svg';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    font-size: 20px;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    ${props => props.setBackground ? `background-image: url(${trailImage}), url(${backgroundImage})` : ''};
    background-position: top;
    background-repeat: no-repeat;
  }
`;

export const Center = styled.div`
  text-align: center;
`;