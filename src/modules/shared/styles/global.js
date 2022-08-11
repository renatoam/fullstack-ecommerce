import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

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

export const Main = styled.main`
.banner {
  background-image: url("/images/banner-adidas2.webp");
  height: calc(100vh - 125px);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 60px;

  h2 {
    color: #fff;
    font-size: 3rem;
  }

  p {
    color: #fff;
    font-size: 1.5rem;
  }

  button {
    border: none;
    background-color: #fff;
    margin: 20px 0;
    padding: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    box-shadow: 5px 5px 0 0 gray;
    cursor: pointer;
  }
}
`;

export default GlobalStyle;
