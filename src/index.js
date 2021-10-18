import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from 'helpers/query';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
