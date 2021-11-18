import React from 'react';
import ReactDOM from 'react-dom';
import 'intersection-observer';
import { isProduction } from '~/helpers/constants';
import { QueryProvider } from '~/helpers/query';
import { ThemeProvider } from '~/helpers/theme';
import { RecoilProvider } from '~/stores';
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
      <RecoilProvider>
        <QueryProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </QueryProvider>
      </RecoilProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
})();
