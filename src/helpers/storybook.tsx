import { Suspense } from 'react';
import { makeDecorator } from '@storybook/addons';
import type { DecoratorFn } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryProvider } from '~/helpers/query';
import { ThemeProvider } from '~/helpers/theme';
import { isAuthenticatedState } from '~/stores/auth';

export const themeDecorator: DecoratorFn = (StoryFn) => (
  <ThemeProvider>{StoryFn()}</ThemeProvider>
);

export const withProvider = makeDecorator({
  name: 'withProvider',
  parameterName: 'provider',
  skipIfNoParametersOrOptions: false,
  wrapper: (storyFn, context, { parameters, options }) => {
    const {
      initialEntries = ['/'],
      path = '/',
      isAuthenticated = false,
    } = parameters || {};

    return (
      <RecoilRoot
        initializeState={({ set }) => {
          set(isAuthenticatedState, isAuthenticated);
        }}
      >
        <QueryProvider>
          <MemoryRouter initialEntries={initialEntries}>
            <Routes>
              <Route path={path} element={storyFn(context)} />
            </Routes>
          </MemoryRouter>
        </QueryProvider>
      </RecoilRoot>
    );
  },
});

export const withLazy = (component: React.ReactNode) => {
  return <Suspense fallback={null}>{component}</Suspense>;
};
