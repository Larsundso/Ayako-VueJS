import type Express from 'express';
import fetch from 'node-fetch';
import fs from 'fs';
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

  const fileUrl = fs.writeFileSync(
    `/root/Bots/Ayako-VueJS/CDN/Ayako_Artwork/${Date.now()}`,
    await req.body.buffer(),
  );

  DataBase.query(
    `INSERT INTO artworks (userid, created, url, type, verified) VALUES ($1, $2, $3, $4, $5);`,
    [userData.id, Date.now(), fileUrl, 'full', false],
  );
};
