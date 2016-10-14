class Player {
  constructor(){
    this.id = Math.floor(Math.random() * 9999999) + 0  ;
    this.name = "Player #"  +this.id; // Game Name (Defaults to "Open Card Game: 12312" [ID of game])
    this.currentGame = "";
    this.currentConnection = ""
  }

  SetConnction(id){
    if(!id){
      return;
    }

    this.currentConnection = id;
    console.log("[Player"+this.id+"] Updated Connection ID to: " + this.currentConnection );
  }

  SetName(name){
    if(!name){
      return;
    }

    this.name = name;
    console.log("[Player"+this.id+"] Updated Name to: " + this.name);
  }

  JoinGame(id){
    if(!id){
      return;
    }
    this.currentGame = id;
    console.log("[Player"+this.id+"] Joined Game: " + this.currentGame);
  }
}
module.exports = Player;
