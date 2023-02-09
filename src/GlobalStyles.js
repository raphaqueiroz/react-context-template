import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Poppins', sans-serif;
    /* available font-weight: 400, 500 and 700 */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #BBE6F0
  }

  #root {
    margin: 0 auto;
    max-width: 1200px;
  }
`;