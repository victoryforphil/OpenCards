import React, { Component } from 'react';

class JoinGame extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: "",
      password: ""
    }
  }
  handleIdChange = (event) => {
    this.setState({id: event.target.value});
  }
  handlePassChange = (event) => {
    this.setState({password: event.target.value});
  }
  joinGame = () => {
    var game = this.state;
    window.socket.emit('join game', game);
  }
  render() {
    return (
      <div className="row">
        <div className="input-field col s3">
          <input placeholder="Game Code" id="game_code" type="text" className="validate"
          value={this.state.id}
          onChange={this.handleIdChange}/>
        </div>
        <div className="input-field col s4">
          <input placeholder="Password" id="game_pass" type="password" className="validate"
          value={this.state.password}
          onChange={this.handlePassChange}/>
        </div>
        <div className="input-field col s1d">
          <button className="btn waves-effect waves-light green" name="action"  onClick={this.joinGame}>Join Game</button>
        </div>

      </div>
    );
  }
}

export default JoinGame;
