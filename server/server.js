var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const RequestHandler = require('./Handlers/RequestHandler.js');
const PlayerHandler = require('./Handlers/PlayerHandler.js');
var Game = require('./Classes/Game.js');
var Player = require('./Classes/Player.js');
var State = require('./Classes/State.js')


var Connections = [];

io.on('connection', function(socket) {

    console.log("[Server] New Connection: " + socket.id);
    Connections.push(socket);

    var newPlayer = new Player();
    newPlayer.SetConnction(socket.id);
    State.Players.push(newPlayer);

    var SocketState = {
      gameState: State,
      connections: Connections,
      socket: socket,
      player: newPlayer
    };

    socket.on("player", function(data){
      PlayerHandler.HandleEvent(SocketState,data)
    });

});
//Starts HTTP Server on 3001
http.listen(7777, function() {
    console.log('listening on *:7777');
});
