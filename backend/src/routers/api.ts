import fs from 'fs';
import type Express from 'express';

const importBasePath = './src/apiRoutes';
const accessBasePath = '../apiRoutes/';

export default async (req: Express.Request, res: Express.Response) => {
  try {
    fs.accessSync(
      `${accessBasePath}${req.method.toUpperCase()}${req.path.split(/\?+/)[0]}.js`,
      fs.constants.R_OK | fs.constants.W_OK,
    );
    const imported = (
      await import(`${importBasePath}${req.method.toUpperCase()}${req.path.split(/\?+/)[0]}.js`)
    ).default;

    imported(req, res);
  } catch (e) {
    res.sendStatus(404);
  }
};
