import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { QueryProvider } from 'helpers/query';
import { ThemeProvider } from 'helpers/theme';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </QueryProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
