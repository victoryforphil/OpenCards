var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Game = require('./Game.js');
var Games = [];
var Players = [];

io.on('connection', function(socket){
  var newPlayer = {
    name: "",
    socket: socket
  };
  newPlayer.socket.on('create game', function (data) {
    var newGame = new Game(newPlayer,data.name,data.password);
    Games.push(newGame);
    console.log(Games);
  });

  Players.push(newPlayer);
    console.log(Players);
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});
