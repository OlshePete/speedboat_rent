const { createProxyMiddleware } = require('http-proxy-middleware');
debugger
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://127.0.0.1:5000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api', 
      },
    })
  );
  console.log("@",app);
};
