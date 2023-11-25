import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
  }

  html {
    font-size: 62.5%;
  }


  body {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 1.5;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
`;

export default GlobalStyles;
