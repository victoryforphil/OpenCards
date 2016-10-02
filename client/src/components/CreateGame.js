import React, { Component } from 'react';

class CreateGame extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      password: "",
      players: {}
    }
  }
  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }
  handlePassChange = (event) => {
    this.setState({password: event.target.value});
  }
  createGame = () => {
    var game = this.state;
    window.socket.emit('create game', game);
  }
  render() {
    return (
      <div className="row">

      <div className="input-field col s4">
        <input placeholder="Name" id="game_name" type="text" className="validate"
          value={this.state.name}
          onChange={this.handleNameChange}/>
      </div>
        <div className="input-field col s4">
          <input placeholder="Password" id="game_pass" type="password" className="validate"
            value={this.state.pass}
            onChange={this.handlePassChange}/>
        </div>
        <div className="input-field col s4">
          <button className="btn waves-effect waves-light green" name="action" onClick={this.createGame}>Create Game</button>
        </div>

      </div>
    );
  }
}

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

export default CreateGame;
