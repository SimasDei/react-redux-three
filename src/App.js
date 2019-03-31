import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import MoviesList from './Components/MoviesList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={MoviesList} />
            <Route path={'/test'} component={Test} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Test = () => <h1>test</h1>;

export default App;
