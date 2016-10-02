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
      console.log(player);
    }else{
      console.log("Wrong Password");
      player.socket.emit("join failed", {msg: "Wrong Passowrd!"});
    }
  }


}
module.exports = Game;
