const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/rc/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
      // pathRewrite: {
      //   '^/rc/api': '/api', 
      // },
    })
  );
};
