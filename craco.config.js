const CracoAlias = require('craco-alias');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  babel: {
    presets: [
      [
        '@babel/preset-react',
        { runtime: 'automatic', importSource: '@emotion/react' },
      ],
    ],
    plugins: ['@emotion'],
  },
  webpack: {
    plugins: {
      add: [
        process.env.NODE_ENV === 'production' &&
          process.env.ANALYZE === 'TRUE' &&
          new BundleAnalyzerPlugin({
            defaultSizes: 'gzip',
            openAnalyzer: true,
          }),
      ].filter(Boolean),
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.extend.json',
      },
    },
  ],
};
