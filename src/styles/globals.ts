import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --darkest: #272D2D;
    --primary: #31E981;
    --primary-light: #c4ffe4;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;
