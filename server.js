var express = require('express');
var http = require('http');
var socketio = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketio(server);

var HTTP_PORT = process.env.HTTP_PORT || 3000;

app.use(express.static('public'));

io.on('connection', socket=>{
    console.log('User logged: ' + socket.id);
});

server.listen(HTTP_PORT, ()=>{ console.log(`Server is running on port ${HTTP_PORT}`); });