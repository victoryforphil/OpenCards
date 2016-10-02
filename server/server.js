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
    console.log(data);
    var newGame = new Game(newPlayer,data.name,data.password);
    Games.push(newGame);
    console.log(Games);
  });

  newPlayer.socket.on('join game', function (data) {
    console.log(data);
    console.log("joining Game: ");
    GetGame(data.id).PlayerJoin(data, newPlayer);

  });

  Players.push(newPlayer);
    console.log(Players);
});

function GetGame(id){
  var found = {};
  for (var i = 0; i < Games.length; i++) {
    if(Games[i].id == id){
      found = Games[i]
    }
  }
  return found;
}

http.listen(3001, function(){
  console.log('listening on *:3001');
});
