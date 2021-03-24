import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
    font-size: 20px;
    color: #000;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
  }

  input, button {
    font-family: inherit;
  }

  h1, h2, h3 {
    font-family: Pacifico;
  }

  h1, h2, h3, p {
    padding: 0;
    margin: 0;
  }
`