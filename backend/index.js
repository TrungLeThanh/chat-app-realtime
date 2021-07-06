const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const router = require('./router');

const {addUser, removeUser, getUser, getUsersInRoom} = require('./users.js');

const app = express();
const server = http.createServer(app);
const io = socketio(server);


app.use(router);

io.on('connection', (socket) => {
    socket.on('join', ({name, room}, calback) => {
        const { error, user } = addUser({ id: socket.id, name, room});

        if(error){
            return calback(error);
        }

        socket.join(user.room);

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
        // to all clients in the current namespace except the sender
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

        calback();

    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });

        callback();
    });

    socket.on('disconnect', () =>{
        console.log("Disconnect!!!");
    });
});

server.listen(process.env.PORT || 5000, () => console.log('Sever has started'));
