import React, { Component } from 'react';
import JoinGame from "./JoinGame"
import CreateGame from "./CreateGame"
class PageHome extends Component {
  render() {
    return (
      <div className="row ">
        <div className="card col 12 row">
          <div className="input-field col s12">
            <input placeholder="Player Name" id="player_name" type="text" className="validate"/>
          </div>
        </div>
        <div className="card col s12 row">
          <JoinGame/>
        </div>
        <div className="card col s12 row">
          <CreateGame/>
        </div>

      </div>
    );
  }
}

export default PageHome;
