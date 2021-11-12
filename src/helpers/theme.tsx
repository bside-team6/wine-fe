import {
  css,
  ThemeProvider as EmotionProvider,
  Global,
  Theme,
} from '@emotion/react';
import reset from 'emotion-reset';

export const theme: Theme = {
  colors: {
    main: {
      primary: '#7430e4',
      dark: '#520bc6',
      light1: '#d7bfff',
      light2: '#f1eafc',
    },
    border: '#dfdfdf',
    white: '#ffffff',
    black: '#000000',
    black02: '#424242',
    black04: '#757575',
    black06: '#a8a8a8',
    black07: '#c5c5c5',
    black08: '#dfdfdf',
    shadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
  },
  typography: {
    lato: "'Lato', 'Noto Sans KR', sans-serif",
  },
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
  svg {
    vertical-align: middle;
  }
  .notKor {
    font-family: 'Lato', sans-serif;
  }
  .ReactQueryDevtools * {
    color: white;
  }
`;

export const ThemeProvider: React.FC = ({ children }) => {
  return (
    <EmotionProvider theme={theme}>
      {children}
      <Global styles={globalStyle} />
    </EmotionProvider>
  );
};
