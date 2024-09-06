import { createGlobalStyle } from "styled-components";

export const GlobalStyleis = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    background: none;
  }
  
  body {
    min-width: 375px;
    display: flex;
    justify-content: center;
  }

  #root {
    min-height: 100vh;
    width: 100%;
    max-width: 1440px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
  }
`;