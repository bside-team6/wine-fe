import { css, ThemeProvider as EmotionProvider, Global } from '@emotion/react';
import reset from 'emotion-reset';

export const theme = {
  colors: {
    purple: '#7430e4',
    border: '#dfdfdf',
    black02: '#424242',
    black04: '#757575',
    black06: '#a8a8a8',
    black08: '#dfdfdf',
  },
  typography: {
    lato: "'Lato', 'Noto Sans KR', sans-serif",
  },
  primePurple: '#7430E4',
  darkPurple: '#520BC6',
  lightPurple1: '#D7BFFF',
  lightPurple2: '#F1EAFC',
  // background: "#FFFEFC",
  // white: "#FFFFFF",
  // vermilion: "#ff7425",
  // orange: "#FF9900",
  // opacityOrange: "rgba(242,153,74,0.5)",
  // yellow: "#FFD66C",
  // grey: "rgba(196,196,196,0.3)",
  // middleGrey: "rgba(65,65,65,0.4)",
  // deepGrey: "#828282",
  // lightOrange: "rgba(255,195,170,0.3)",
  // fontColor: "#2D2B2B",
  // fontTitle: "'Alata', sans-serif;",
  // fontContent: "'Noto Sans KR', sans-serif;",
  // shadow: "1px 1px 1px 0px rgba(0, 0, 0, 0.3);",
};

const globalStyle = css`
  ${reset}
  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    color: #000000;
    line-height: 1.5;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    max-width: 100%;
    vertical-align: middle;
  }
  .notKor {
    font-family: 'Lato', sans-serif;
  }
  .ReactQueryDevtools * {
    color: white;
  }
`;

export const ThemeProvider = ({ children }) => {
  return (
    <EmotionProvider theme={theme}>
      {children}
      <Global styles={globalStyle} />
    </EmotionProvider>
  );
};
