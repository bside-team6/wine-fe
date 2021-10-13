import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; // style-reset 패키지

const GlobalStyle = createGlobalStyle` 
    ${reset}
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        font-family: 'Noto Sans KR', sans-serif !important;
        font-size: 14px;
    }
    li{
      cursor: pointer;
    }
    .notKor{
        font-family: 'Lato', sans-serif;
    }
`;

export default GlobalStyle;
