const WebSocket = require('ws');
require('dotenv').config()
redisHelper = require('./services/redisHelper');

var PORT = process.env.PORT;
const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    redisHelper.setKey('Key - ' + message, message).then((response) => {
      console.log('random number was saved',response)
    }).catch((error) => {
      console.log('error', error)
    });
    console.log('received: %s', message);
  });
  ws.send('Socket Server was initialized');
});