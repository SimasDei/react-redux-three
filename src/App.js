import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import './App.css';

import Header from './Components/Header';
import MoviesList from './Components/MoviesList';
import MovieDetails from './Components/MovieDetails';


class App extends Component {
  render() {
    return (
      <Provider store={}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={MoviesList} />
            <Route path={'/:id'} component={MovieDetails} />
          </Switch>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
