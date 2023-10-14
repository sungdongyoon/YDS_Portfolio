import { createGlobalStyle } from "styled-components";
import {reset} from "styled-reset";

const GlobalStyle = createGlobalStyle`
  :root {
    --sky-blue: #acd8f8;
    --blue: #0079FF;
    --light-gray: #ccc;
    --semi-gray: #999;
    --gray: #555;
    --white: #fff;
    --black: #000;
    --red: #ff0000;
  }
  ${reset}
  *{
    box-sizing: border-box;
  }
  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table{
    margin: 0px;
    padding: 0px;
    border: 0;
    font-size: 10px;
    vertical-align: baseline;
  }
  body{
    font-family: 'Pretendard';
  }
  a{
    text-decoration: none;
    color: var(--black);
  }
  ol, ul{
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;