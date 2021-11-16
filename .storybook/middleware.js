const { createProxyMiddleware } = require('http-proxy-middleware');

// setupProxy.js와 동일한 proxy 설정
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.wineasy.kr',
      changeOrigin: true,
    }),
  );
};
