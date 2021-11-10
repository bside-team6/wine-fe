import type { DecoratorFn } from '@storybook/react';
import {
  MemoryRouter,
  MemoryRouterProps,
  Route,
  RouteProps,
  Routes,
} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryProvider } from '~/helpers/query';
import { ThemeProvider } from '~/helpers/theme';

export const themeDecorator: DecoratorFn = (StoryFn) => (
  <ThemeProvider>{StoryFn()}</ThemeProvider>
);

interface ProviderDecoratorProps {
  initialEntries: MemoryRouterProps['initialEntries'];
  path: RouteProps['path'];
}

export const providerDecorator: (
  props?: ProviderDecoratorProps,
) => DecoratorFn = (props) => (StoryFn) => {
  const { initialEntries = ['/'], path = '/' } = props || {};
  return (
    <RecoilRoot>
      <QueryProvider>
        <MemoryRouter initialEntries={initialEntries}>
          <Routes>
            <Route path={path} element={StoryFn()} />
          </Routes>
        </MemoryRouter>
      </QueryProvider>
    </RecoilRoot>
  );
};
