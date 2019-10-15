import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smooting: antialiased !important;
    background: #FAFAFA;
    font-family: sans-serif;
    color: #0F0F0F;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
