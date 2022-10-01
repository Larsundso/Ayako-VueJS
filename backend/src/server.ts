import Express from 'express';
import http from 'http';
import BodyParser from 'body-parser';
import cors from 'cors';
import './startupTasks/index.js';

export const app = Express();
export const server = http.createServer(app);
export const JSONParser = BodyParser.json();
export const URLEncodedParser = BodyParser.urlencoded({ extended: false });
const frontendPath = '/root/Bots/Ayako-VueJS/frontend/.output/public/';

server.listen(80);
app.use(Express.static(frontendPath));
app.use(cors());
app.use(
  BodyParser.json({
    verify: (req, _, buf, encoding) => {
      if (buf && buf.length) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        req.rawBody = buf.toString(encoding || 'utf8');
      }
    },
  }),
);

const handleRequest = async (
  req: Express.Request,
  res: Express.Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: Express.NextFunction,
) => {
  if (!req.headers || !req.headers.host) {
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
      res.sendStatus(404);
    }
  }
};

app.post('*', JSONParser, (...args) => handleRequest(...args));

app.get('*', (...args) => handleRequest(...args));
