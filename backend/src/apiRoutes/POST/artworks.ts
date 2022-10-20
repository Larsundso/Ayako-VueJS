import type Express from 'express';
import fetch from 'node-fetch';
import axios from 'axios';
import fs from 'fs';
import auth from '../../auth.json' assert { type: 'json' };
import DataBase from '../../DataBase.js';

export default async (req: Express.Request, res: Express.Response) => {
  const token = req.headers.authorization;
  if (!token || token === 'undefined') {
    res.sendStatus(401);
    return;
  }

  const link = req.headers.link as string | undefined;
  if (!link) {
    res.sendStatus(400);
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

  const fileEnd = link.split('.')[link.split('.').length - 1];
  const image = await fetch(link);
  const fileName = `${Date.now()}.${fileEnd}`;

  image.body?.pipe(fs.createWriteStream(`/root/Bots/Ayako-VueJS/CDN/Ayako_Artwork/${fileName}`));

  DataBase.query(
    `INSERT INTO artworks (userid, created, url, type, verified) VALUES ($1, $2, $3, $4, $5);`,
    [userData.id, Date.now(), fileName, 'full', false],
  );

  const embed = {
    type: 'rich',
    title: 'New Artwork Submitted',
    image: {
      url: `https://cdn.ayakobot.com/Ayako_Artwork/${fileName}`,
    },
  };

  axios.post(auth.artworksWebhook, {
    embeds: [embed],
  });
};
