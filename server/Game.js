class Game {
  constructor(host, name, password){
    this.id = Math.floor(Math.random() * 9999999) + 0  ;
    this.host = host;
    this.name = name;
    this.password = password;
    this.players = [];
    this.currentBlackCard = {}
    this.currentWhiteCards = [];

    this.players.push(host)
  }

  PlayerJoin(joinPacket, player){
    if(joinPacket.password == this.password){
      this.players.push(player);
      console.log("[Game-"+this.id+"] Player Joined: " + player.name);
      console.log("[Game-"+this.id+"] Players: " + this.players.length);
    }else{
      console.log("[Game-"+this.id+"] Wrong Password: " + player.name);;
      player.socket.emit("join failed", {msg: "Wrong Passowrd!"});
    }
  }


}
module.exports = Game;
