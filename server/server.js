var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('create game', function (data) {
    console.log(data);
  });
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});
