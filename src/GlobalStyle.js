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
  }
`;

export default GlobalStyle;
