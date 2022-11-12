import type Express from 'express';
import DataBase from '../../../DataBase.js';

export default async (_req: Express.Request, res: Express.Response) => {
  const dbRes = await DataBase.query(`SELECT * FROM giveaways WHERE ended = false;`).then(
    (r) => r.rows[0],
  );

  if (!dbRes) {
    res.json(null);
    return;
  }

  const participants: { discordid: string; twitchid: string; tickets: number }[] = [];

  (
    await Promise.all(
      dbRes.participants.map((p: string) =>
        DataBase.query(`SELECT * FROM users WHERE discordid = $1;`, [p]),
      ),
    )
  ).forEach((r) => {
    participants.push(r.rows[0]);
  });

  const sortedParticipants: { twitchid: string; discordid: string; tickets: number }[] = [];
  participants.forEach((p) => {
    const participant = sortedParticipants.find((p2) => p2.twitchid === p.twitchid);
    if (participant) {
      participant.tickets += 1;
    } else {
      p.tickets = 1;
      sortedParticipants.push(p);
    }
  });

  dbRes.participants = sortedParticipants;

  res.json(dbRes);
};
