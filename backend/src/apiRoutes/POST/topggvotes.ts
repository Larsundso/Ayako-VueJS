import type Express from 'express';
import { io, topGGIOClientIDs } from '../../socketIOHandler.js';

export default async (req: Express.Request, res: Express.Response) => {
  if (!req.body) {
    req.body = { authorization: req.headers.authorization };
  } else {
    req.body.authorization = req.headers.authorization;
  }

  topGGIOClientIDs.forEach((id) => {
    io.to(id).emit('TOP_GG', req.body);
  });

  res.sendStatus(200);
};
