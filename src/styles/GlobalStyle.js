import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  li {
    cursor: pointer;
  }
  .notKor {
    font-family: 'Lato', sans-serif;
  }
  .ReactQueryDevtools * {
    color: white;
  }
`;

export default GlobalStyle;
