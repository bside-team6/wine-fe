import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { themeDecorator } from '../src/helpers/storybook';

initialize({
  onUnhandledRequest: 'bypass',
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
