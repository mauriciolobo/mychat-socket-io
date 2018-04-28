var express = require('express');
var http = require('http');
var socketio = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketio(server);

var HTTP_PORT = process.env.HTTP_PORT || 3000;

app.use(express.static('public'));

var users = [];

io.on('connection', socket => {
    console.log('User logged: ' + socket.id);

    socket.on('message', function (data) {
        console.log('MESSAGE: ', data);
        sendMessage(data);
    });

    socket.on('add user', function (data) {
        console.log('ADD USER: ', data);
        data.socketid = socket.id;
        users.push(data);
        sendMessage({
            type: 'update users',
            user: data,
            users
        });
    });

    socket.on('disconnect', function () {
        var idx = users.findIndex(u=>u.socketid == socket.id);        

        if(idx>=0){        
            var l = users[idx];
            users.splice(idx, 1);            
            sendMessage({
                type: 'update users',
                user: null,
                userleave: l,
                users
            });            
        }              

        console.log({
            type: 'USER DISCONNECTED: ',
            users
        });
    });

    function sendMessage(data) {
        console.log('MESSAGE EMIT: ', data);
        io.emit('message', data);
    }
});


server.listen(HTTP_PORT, () => {
    console.log(`Server is running on port ${HTTP_PORT}`);
});