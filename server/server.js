var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Game = require('./Game.js');
var Games = [];
var Players = [];

//Sockt listens for connection event. (new client connected)
io.on('connection', function(socket){
  // Creates Player Class and assigned the socket to it
  var newPlayer = {
    name: "",
    socket: socket
  };

  //Adds the player to the global player list
  Players.push(newPlayer);

  //Socket Listen for Create Game event
  //Data should look like this:
  /*
    {
      name : "Game Name",
      password: "Game Password"
    }
  */
  newPlayer.socket.on('create game', function (data) {
    //Creates new game class and adds it to list (See Game.js)
    var newGame = new Game(newPlayer,data.name,data.password);
    Games.push(newGame);
    console.log("[Server] New Game: " + newGame.id + "-" + newGame.name);
  });

  //Socket Listen for Join Game event
  //Data should look like this:
  /*
    {
      id : "Game ID",
      password: "Game Password"
    }
  */
  newPlayer.socket.on('join game', function (data) {

    //Gets the game via ID and joins with the player
    GetGame(data.id).PlayerJoin(data, newPlayer);

  });

});

//Gets the game from the Games List via Id
function GetGame(id){
  var found = {};
  for (var i = 0; i < Games.length; i++) {
    if(Games[i].id == id){
      found = Games[i]
    }
  }
  return found;
}
//Starts HTTP Server on 3001
http.listen(3001, function(){
  console.log('listening on *:3001');
});
