import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import './App.css';

import Header from './Components/Header';
import MoviesList from './Components/MoviesList';
import MovieDetails from './Components/MovieDetails';
import Toggle from './Components/Toggle';

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Toggle />
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
