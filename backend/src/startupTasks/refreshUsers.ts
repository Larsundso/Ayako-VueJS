// import Jobs from 'node-schedule';
import DataBase from '../DataBase.js';
import { io, userFetchIOClientIDs } from '../socketIOHandler.js';

// Jobs.scheduleJob('0 30 * * * *', async () => {

setTimeout(async () => {
  const res = await DataBase.query(`SELECT * FROM ayakousers;`);

  if (res?.rows) {
    userFetchIOClientIDs.forEach((id) => {
      io.to(id).emit('USER_FETCH', res.rows);
    });
  }
}, 2000);
// });
