'use strict'
const io = require('socket.io-client');
const socket = io.connect('https://diagramador-production-5b9b.up.railway.app:9090');
console.log('socket cargado...');
// console.log(socket['id']);
// console.log(socket);

module.exports =  {
    io,
    socket,
};