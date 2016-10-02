import React, { Component } from 'react';

class AppTemplate extends Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default AppTemplate;
