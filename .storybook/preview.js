import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from '../src/helpers/theme';

/** @type {import("@storybook/addons").BaseDecorators } */
export const decorators = [
  (StoryFn) => <ThemeProvider>{StoryFn()}</ThemeProvider>,
];

/** @type {import("@storybook/addons").Parameters } */
export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
