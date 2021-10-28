const path = require('path');
const resolvePath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    'storybook-preset-craco',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
  ],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/styled': resolvePath('node_modules/@emotion/styled'),
          '@emotion/core': resolvePath('node_modules/@emotion/react'),
          'emotion-theming': resolvePath('node_modules/@emotion/react'),
        },
      },
    };
  },
};
