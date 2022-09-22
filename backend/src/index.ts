import Express from 'express';
import http from 'http';

const app = Express();
const server = http.createServer(app);

server.listen(80);

app.get('*', async (req: Express.Request, res: Express.Response) => {
  if (!req.headers || !req.headers.host) {
    serveFile(res);
    return;
  }

  const subDomain = req.headers.host.split(/\./g)[0].toLowerCase();
  const param = req.path.split(/\//g)[1].toLowerCase();

  switch (true) {
    case param === 'api':
    case subDomain === 'api': {
      (await import('./routers/api.js')).default(req, res);
      return;
    }
    case param === 'cdn':
    case subDomain === 'cdn': {
      (await import('./routers/cdn.js')).default(req, res);
      return;
    }
    default: {
      serveFile(res);
    }
  }
});

// eslint-disable-next-line no-console
console.log('Website Started');

const serveFile = (res: Express.Response) => {
  res.contentType('text/html');
  res.sendFile('/root/Bots/ayako-vuejs/viteFrontend/dist/index.html');
};
