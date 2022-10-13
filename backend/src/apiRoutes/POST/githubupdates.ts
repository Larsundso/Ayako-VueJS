import type Express from 'express';
import axios from 'axios';
import crypto from 'crypto';
import auth from '../../auth.json' assert { type: 'json' };
import type GitHub from '../../Typings/GitHub';

export default async (req: Express.Request, res: Express.Response) => {
  const sig = Buffer.from(req.get('X-Hub-Signature-256') || '', 'utf8');
  const hmac = crypto.createHmac('sha256', auth.cryptoSecret);
  const digest = Buffer.from(
    `sha256=${hmac.update((req as unknown as { rawBody: never }).rawBody).digest('hex')}`,
    'utf8',
  );

  if (sig.length !== digest.length || !crypto.timingSafeEqual(digest, sig)) {
    res.sendStatus(401);
    return;
  }

  res.sendStatus(200);

  const body = req.body as GitHub.POST;
  if (!body.commits?.length) return;

  const embed = {
    type: 'rich',
    title: `GitHub Commit to \`${body.ref}\``,
    author: {
      name: body.sender.login,
      icon_url: body.sender.avatar_url,
      url: body.sender.url,
    },
    description: `${body.commits.length} new commit${
      body.commits.length === 1 ? '' : 's'
    } pushed to ${body.repository.name}\n`,
    color: 3092790,
  };

  body.commits.forEach((c) => {
    embed.description += `\n [View Changes](${c.url}) \`${c.message}\`\n`;
    if (c.added.length) {
      embed.description += `<:Created:987168536747204648> \`${c.added
        .map((a) => (a.startsWith('src/') ? a.replace('src', '') : ''))
        .join('`\n<:Created:987168536747204648> `')}\`\n`;
    }
    if (c.modified.length) {
      embed.description += `<:updated:987168534490652702> \`${c.modified
        .map((a) => (a.startsWith('src/') ? a.replace('src', '') : ''))
        .join('`\n<:updated:987168534490652702> `')}\`\n`;
    }
    if (c.removed.length) {
      embed.description += `<:Deleted:987168535274983505> \`${c.removed
        .map((a) => (a.startsWith('src/') ? a.replace('src', '') : ''))
        .join('`\n<:Deleted:987168535274983505> `')}\`\n`;
    }
  });

  auth.webhooks.forEach((w) => {
    axios.post(w, {
      embeds: [embed],
    });
  });
};
