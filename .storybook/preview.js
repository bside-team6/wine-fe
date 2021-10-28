import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { themeDecorator } from '../src/helpers/storybook';

const isProduction = process.env.NODE_ENV === 'production';

initialize({
  onUnhandledRequest: 'bypass',
  serviceWorker: {
    url: isProduction
      ? '/wine-fe/mockServiceWorker.js'
      : '/mockServiceWorker.js',
  },
});

/** @type {import("@storybook/addons").BaseDecorators } */
export const decorators = [mswDecorator, themeDecorator];

/** @type {import("@storybook/addons").Parameters } */
export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
