import Express from 'express';
import http from 'http';
import BodyParser from 'body-parser';

export const app = Express();
export const server = http.createServer(app);
export const JSONParser = BodyParser.json();
export const URLEncodedParser = BodyParser.urlencoded({ extended: false });
const frontendPath = '/root/Bots/Ayako-VueJS/frontend/dist/index.html';

server.listen(80);

const handleRequest = async (
  req: Express.Request,
  res: Express.Response,
  _: unknown,
  sendFrontend: boolean,
) => {
  const sendReponse = () => {
    if (sendFrontend) res.sendFile(frontendPath);
    else res.sendStatus(400);
  };

  if (!req.headers || !req.headers.host) {
    sendReponse();
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
      sendReponse();
    }
  }
};

app.post('*', JSONParser, (...args) => handleRequest(...args, false));

app.get('*', (...args) => handleRequest(...args, true));
