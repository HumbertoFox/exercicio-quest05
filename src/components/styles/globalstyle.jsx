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
    min-height: 100vh;
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