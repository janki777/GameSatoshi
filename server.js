const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public')); // يجب أن يشير إلى مجلد فيه index.html

io.on('connection', socket => {
  console.log('User connected');
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
