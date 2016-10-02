class Game {
  constructor(host, name, password){
    this.id = 0;
    this.host = host;
    this.name = name || "Game Name";
    this.password = password;
    this.players = [];
    this.currentBlackCard = {}
    this.currentWhiteCards = [];

    this.players.push(host)
  }

  PlayerJoin(joinPacket, player){
    if(joinPacket.password == this.password){
      this.players.push(players);
    }else{
      player.socket.emit("join failed", {msg: "Wrong Passowrd!"});
    }
  }


}
module.exports = Game;
