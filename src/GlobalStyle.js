import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 1;
    height: 100%;
    -ms-overflow-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    cursor: pointer;
    outline: none;
    border: none;
    padding: 0;
  };
  input {
    display: flex;
    outline: none;
    border: none;
    padding: 0;
    -webkit-appearance : none;
    -moz-appearance:none;
    appearance:none;
  } 
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
