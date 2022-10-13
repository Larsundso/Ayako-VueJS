import * as SocketIO from 'socket.io';
import auth from './auth.json' assert { type: 'json' };
import { server } from './server.js';
import DataBase from './DataBase.js';

export const willisIOClientIDs: string[] = [];
export const topGGIOClientIDs: string[] = [];
export const userFetchIOClientIDs: string[] = [];

export const io = new SocketIO.Server(server);

io.on('connection', (client) => {
  switch (client.handshake.auth.reason) {
    case 'willis_dashboard': {
      willisIOClientIDs.push(client.id);
      removeListener('willis', client);
      break;
    }
    case 'top_gg_votes': {
      if (client.handshake.auth.code !== auth.socketToken) return;
      topGGIOClientIDs.push(client.id);
      removeListener('topgg', client);
      break;
    }
    case 'userfetching': {
      if (client.handshake.auth.code !== auth.socketToken) return;
      userFetchIOClientIDs.push(client.id);
      handleEvent('userfetching', client);
      removeListener('userfetching', client);
      break;
    }
    default: {
      break;
    }
  }
});

const removeListener = (type: 'willis' | 'topgg' | 'userfetching', client: SocketIO.Socket) => {
  client.on('disconnect', () => {
    switch (type) {
      case 'willis': {
        willisIOClientIDs.splice(willisIOClientIDs.indexOf(client.id), 1);
        break;
      }
      case 'topgg': {
        topGGIOClientIDs.splice(topGGIOClientIDs.indexOf(client.id), 1);
        break;
      }
      case 'userfetching': {
        userFetchIOClientIDs.splice(userFetchIOClientIDs.indexOf(client.id), 1);
        break;
      }
      default: {
        break;
      }
    }
  });
};

const handleEvent = (type: 'userfetching', client: SocketIO.Socket) => {
  switch (type) {
    case 'userfetching': {
      client.on(
        'USERS_FETCHED',
        (users: { id: string; discriminator: string; username: string; avatar: string }[]) => {
          users.forEach((u, i) => {
            setTimeout(() => {
              if (!u) return;

              DataBase.query(
                `UPDATE ayakousers SET username = $1, avatar = $2, lastfetch = $3 WHERE userid = $4;`,
                [
                  `${u?.username || 'Deleted User'}#${u?.discriminator || '0000'}`,
                  u?.avatar
                    ? `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.${
                        u.avatar?.startsWith('a_') ? 'gif' : 'png'
                      }`
                    : 'https://cdn.discordapp.com/embed/avatars/1.png',
                  Date.now(),
                  u.id,
                ],
              );
            }, i * 100);

            setTimeout(() => {
              DataBase.query(
                `UPDATE ayakousers SET username = $1, avatar = $2, lastfetch = $3 WHERE username IS NULL;`,
                ['Deleted User', 'https://cdn.discordapp.com/embed/avatars/1.png', Date.now()],
              );
            }, users.length * 100);
          });
        },
      );
      break;
    }
    default: {
      break;
    }
  }
};
