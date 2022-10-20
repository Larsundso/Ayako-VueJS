import Express from 'express';
import http from 'http';
import BodyParser from 'body-parser';
import cors from 'cors';
import SlowDown from 'express-slow-down';
import './startupTasks/index.js';

export const app = Express();
export const server = http.createServer(app);
export const JSONParser = BodyParser.json();
export const URLEncodedParser = BodyParser.urlencoded({ extended: false });

const frontendPath = '/root/Bots/Ayako-VueJS/frontend/.output/public/';
const speedLimiter = SlowDown({
  windowMs: 5 * 1000,
  delayAfter: 10,
  delayMs: 1000,
});

server.listen(80);
app.enable('trust proxy');
app.use(Express.static(frontendPath));
app.use(speedLimiter);
app.use(cors());
app.use(
  BodyParser.json({
    limit: '25mb',
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

app.get('/login', (_, res) =>
  res.redirect(
    'https://discord.com/api/oauth2/authorize?client_id=650691698409734151&redirect_uri=https%3A%2F%2Fayakobot.com%2Flogincallback&response_type=token&scope=email%20identify%20guilds.join%20guilds',
  ),
);
app.get('/vdconnect-7b296pt3.php', (_, res) =>
  res.sendFile('/root/Bots/Ayako-VueJS/vdconnect-7b296pt3.php'),
);
app.post('*', JSONParser, (...args) => handleRequest(...args));
app.get('*', (...args) => handleRequest(...args));
