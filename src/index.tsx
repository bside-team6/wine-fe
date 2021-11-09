import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import { isProduction } from '~/helpers/constants';
import { QueryProvider } from '~/helpers/query';
import { ThemeProvider } from '~/helpers/theme';

(async () => {
  if (!isProduction) {
    const { worker } = await import(
      /* webpackChunkName: "mocks" */ '~/api/mocks'
    );
    await worker.start({
      onUnhandledRequest: 'bypass',
      serviceWorker: {
        options: {
          scope: '/signup',
        },
      },
    });
  }

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
})();
