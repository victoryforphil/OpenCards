import React, { Component } from 'react';

class PageGame extends Component {

  render() {
    return (
      <div className="row ">
        <h1>{this.props.params.gameId}</h1>

      </div>
    );
  }
}

export default PageGame;
