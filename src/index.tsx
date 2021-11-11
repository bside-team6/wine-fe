import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { isProduction } from '~/helpers/constants';
import { QueryProvider } from '~/helpers/query';
import { ThemeProvider } from '~/helpers/theme';
import App from './App';

(async () => {
  // TODO: sentry 추가

  if (!isProduction) {
    const { worker } = await import(
      /* webpackChunkName: "mocks" */ '~/api/mocks'
    );
    await worker.start({
      onUnhandledRequest: 'bypass',
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
