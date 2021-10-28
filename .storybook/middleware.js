const { createProxyMiddleware } = require('http-proxy-middleware');

// setupProxy.js와 동일한 proxy 설정
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target:
        'http://ec2-54-180-133-23.ap-northeast-2.compute.amazonaws.com:8081',
      changeOrigin: true,
    }),
  );
};
