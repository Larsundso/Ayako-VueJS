import type Express from 'express';
import fetch from 'node-fetch';
import DataBase from '../../DataBase.js';

export default async (req: Express.Request, res: Express.Response) => {
  const token = req.headers.authorization;
  if (!token || token === 'undefined') {
    res.sendStatus(401);
    return;
  }

  const dRes = await fetch('https://discord.com/api/users/@me', {
    method: 'GET',
    headers: { authorization: `Bearer ${token}` },
  });

  if (!dRes.body) {
    res.sendStatus(401);
    return;
  }

  const userData = (await dRes.json()) as {
    id: string;
    username: string;
    discriminator: string;
    email: string;
    avatar: string;
  };

  if (!userData.id) {
    res.sendStatus(401);
    return;
  }

  res.sendStatus(200);

  DataBase.query(
    `INSERT INTO ayakousers (userid, username, avatar, lastfetch, email) VALUES ($1, $2, $3, $4, $5) 
  ON CONFLICT (userid) DO 
  UPDATE SET username = $2, avatar = $3, lastfetch = $4, email = $5;`,
    [
      userData.id,
      `${userData.username}#${userData.discriminator}`,
      `${
        userData.avatar
          ? `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}${
              userData.avatar?.startsWith('a_') ? '.gif' : '.png'
            }`
          : 'https://cdn.discordapp.com/embed/avatars/1.png'
      }`,
      Date.now(),
      userData.email,
    ],
  );
};
