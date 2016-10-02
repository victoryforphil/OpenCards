import React, { Component } from 'react';

class JoinGame extends Component {
  render() {
    return (
      <div className="row"> 
        <div className="input-field col s3">
          <input placeholder="Game Code" id="game_code" type="text" className="validate"/>
        </div>
        <div className="input-field col s4">
          <input placeholder="Password" id="game_pass" type="password" className="validate"/>
        </div>
        <div className="input-field col s1d">
          <button className="btn waves-effect waves-light green" name="action">Join Game</button>
        </div>

      </div>
    );
  }
}

export default JoinGame;
