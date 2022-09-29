import Jobs from 'node-schedule';
import fetch, { Headers } from 'node-fetch';
import DataBase from '../DataBase.js';
import auth from '../auth.json' assert { type: 'json' };

Jobs.scheduleJob('0 0 0 * * *', async () => {
  const res = await DataBase.query(`SELECT * FROM contributers;`).then((r) =>
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

  if (!res) return;

  res.forEach((row, i) => {
    setTimeout(async () => {
      const fetchRes = await fetch(`https://discord.com/api/v10/users/${row.userid}`, {
        method: 'get',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: auth.discordToken,
        }),
      });

      const responseBody = (await fetchRes.json()) as {
        username: string;
        discriminator: string;
        avatar: string;
      };

      await DataBase.query(
        `UPDATE contributers SET username = $1, avatar = $2 WHERE userid = $3;`,
        [
          `${responseBody.username}#${responseBody.discriminator}`,
          `https://cdn.discordapp.com/avatars/534783899331461123/${responseBody.avatar}.${
            responseBody.avatar.startsWith('a_') ? 'gif' : 'png'
          }`,
          row.userid,
        ],
      );
    }, 10000 * i);
  });
});
