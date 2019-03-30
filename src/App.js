import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Movie from './Components/Movie';

const API = {
  url: 'https://api.themoviedb.org/3/',
  key: 'ab1108ff64d84d869773eb7692b0749f'
};

class App extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    try {
      const result = await fetch(
        `${API.url}discover/movie?api_key=${
          API.key
        }&language=en-US&sort_by=popularity.desc&page=1`
      );
      const movies = await result.json();
      this.setState({ movies: movies.results });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img className="App-logo" src={logo} alt="logo" />
          </header>
          <Route path={'/test'} component={Test} />
          {movies.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </Router>
    );
  }
}

const Test = () => <h1>test</h1>;

export default App;
