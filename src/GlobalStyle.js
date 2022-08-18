import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans KR', 'KoPubWorld', sans-serif;
    background: #F0F0F0;
    line-height: 1;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    display: flex;
    cursor: pointer;
    outline: none;
    border-radius: 3px;
  };
  input {
    display: flex;
    outline: none;
    padding-left: 10px;
  }
`;

export default GlobalStyle;
