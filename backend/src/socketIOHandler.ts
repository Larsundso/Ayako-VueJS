import * as SocketIO from 'socket.io';
import auth from './auth.json' assert { type: 'json' };
import { server } from './server.js';

export const willisIOClientIDs: string[] = [];
export const topGGIOClientIDs: string[] = [];

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
    default: {
      break;
    }
  }
});

const removeListener = (type: 'willis' | 'topgg', client: SocketIO.Socket) => {
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
      default: {
        break;
      }
    }
  });
};
