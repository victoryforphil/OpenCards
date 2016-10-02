import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Link, browserHistory,IndexRoute  } from 'react-router'
import AppTemplate from "./components/AppTemplate"
import PageHome from './components/PageHome'
import PageGame from './components/PageGame'
class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="App container">
        <Router history={browserHistory}>
          <Route path="/" component={AppTemplate}>
            <Route path="game/:gameId" component={PageGame}/>
             <IndexRoute component={PageHome} />

          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
