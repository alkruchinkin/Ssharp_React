const { createProxyMiddleware } = require('http-proxy-middleware');
const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:59667';

  // Здесь определяются контексты, для которых этот прокси будет активен. То есть запрос с реакта будет перенаправлен на localhost 
const context =  [
  "/weatherforecast",
  "/datatasks",
  "/postmodel",  
];
//Эта функция создает и конфигурирует прокси с использованием
module.exports = function(app) {
  const appProxy = createProxyMiddleware(context, {
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  });

  app.use(appProxy);
};
