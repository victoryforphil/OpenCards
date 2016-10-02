class Game {
  constructor(host, name, password){
    this.id = Math.floor(Math.random() * 9999999) + 0  ;
    this.host = host; //Player who created it
    this.name = name || "Open Card Game: " + id; // Game Name (Defaults to "Open Card Game: 12312" [ID of game])
    this.password = password; // Password of game
    this.players = []; // Players Joined
    this.currentBlackCard = {} // Current Black card displayed
    this.currentWhiteCards = []; // Current White cards displayed

    this.players.push(host) // Adds host to player list
  }
  //Player Joins Rookm
  PlayerJoin(joinPacket, player){
    //Checks is player enter correct passowrd
    if(joinPacket.password == this.password){
      //If so add the player to the list
      this.players.push(player);
      console.log("[Game-"+this.id+"] Player Joined: " + player.name);
      console.log("[Game-"+this.id+"] Players: " + this.players.length);
    }else{
      //Else send failed event
      console.log("[Game-"+this.id+"] Wrong Password: " + player.name);;
      player.socket.emit("join failed", {msg: "Wrong Passowrd!"});
    }
  }


}
module.exports = Game;
