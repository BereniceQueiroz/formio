import { createGlobalStyle } from 'styled-components';
import themes from './index';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #FFF;
    max-width: 100vw;
    overflow-x:hidden;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, a {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
    background-color: ${themes.components.colors.button};
    color: ${themes.components.colors.buttonText}
  }
`;
