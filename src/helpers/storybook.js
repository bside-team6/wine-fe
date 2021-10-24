import { MemoryRouter, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryProvider } from 'helpers/query';
import { ThemeProvider } from 'helpers/theme';

export const themeDecorator = (StoryFn) => (
  <ThemeProvider>{StoryFn()}</ThemeProvider>
);

export const providerDecorator = (props) => (StoryFn) => {
  const { initialEntries = ['/'], path = '/' } = props || {};
  return (
    <RecoilRoot>
      <QueryProvider>
        <MemoryRouter initialEntries={initialEntries}>
          <Route path={path}>{StoryFn()}</Route>
        </MemoryRouter>
      </QueryProvider>
    </RecoilRoot>
  );
};
