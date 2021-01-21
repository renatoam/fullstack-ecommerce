import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  html {
    font-family: sans-serif;
    font-size: 14px;
    scroll-behavior: smooth;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1140px;
    margin: auto;
  }
`;

export default GlobalStyle;
