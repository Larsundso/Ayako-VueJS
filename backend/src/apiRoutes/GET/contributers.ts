import type Express from 'express';
import DataBase from '../../DataBase.js';

export default async (_req: Express.Request, res: Express.Response) => {
  const dbRes = await DataBase.query(`SELECT * FROM contributers;`).then((r) =>
    r
      ? (r.rows as {
          userid: string;
          username: string;
          avatar: string;
          socials: string[] | null;
          roles: string[] | null;
          type: string[] | null;
        }[])
      : null,
  );

  res.json(dbRes);
};
