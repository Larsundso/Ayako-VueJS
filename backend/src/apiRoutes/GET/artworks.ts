import type Express from 'express';
import DataBase from '../../DataBase.js';
import type DataBaseTypings from '../../Typings/DataBaseTypings';

const baseURL = 'https://cdn.ayakobot.com/Ayako_Artwork/';

const getDBRes = (users?: string[] | string, types?: string[] | string) => {
  switch (true) {
    case typeof users === 'string':
    case Array.isArray(users): {
      return (
        !types?.length
          ? DataBase.query(
              `SELECT * FROM artworks WHERE userid = ANY ($1) ORDER BY created DESC;`,
              [Array.isArray(users) ? users : [users]],
            )
          : DataBase.query(
              `SELECT * FROM artworks WHERE userid = ANY ($1) AND type = ANY ($2) ORDER BY created DESC;`,
              [Array.isArray(users) ? users : [users], Array.isArray(types) ? types : [types]],
            )
      ).then((r) => (r ? (r.rows as DataBaseTypings.artworks[]) : null));
    }
    default: {
      return (
        !types?.length
          ? DataBase.query(`SELECT * FROM artworks ORDER BY created DESC;`)
          : DataBase.query(`SELECT * FROM artworks WHERE type = ANY ($1) ORDER BY created DESC;`, [
              Array.isArray(types) ? types : [types],
            ])
      ).then((r) => (r ? (r.rows as DataBaseTypings.artworks[]) : null));
    }
  }
};

export default async (req: Express.Request, res: Express.Response) => {
  const queries = req.query;
  const dbRes = await getDBRes(
    queries.users as string[] | string,
    queries.types as string[] | string,
  );

  if (!dbRes) {
    res.json([]);
    return;
  }

  const userRes = await DataBase.query(`SELECT * FROM ayakousers WHERE userid = ANY ($1);`, [
    dbRes.map((r) => r.userid),
  ]).then((r) => (r ? (r.rows as DataBaseTypings.ayakousers[]) : null));

  dbRes.forEach((r) => {
    const userRow = userRes?.find((u) => u.userid === r.userid);
    r.user = userRow;
  });

  dbRes.forEach((o) => {
    o.url = `${baseURL}${o.url}`;
  });

  res.json(dbRes);
};
