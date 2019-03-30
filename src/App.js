import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Components/Movie';

const movies = [
  {
    id: 1,
    title: 'Star Wars'
  },
  {
    id: 2,
    title: 'Spider Man'
  },
  {
    id: 3,
    title: 'Seven'
  }
];

const API = {
  url: 'https://api.themoviedb.org/3/',
  key: 'ab1108ff64d84d869773eb7692b0749f'
};

class App extends Component {
  async componentDidMount() {
    try {
      const result = await fetch(
        `${API.url}discover/movie?api_key=${
          API.key
        }&language=en-US&sort_by=popularity.desc&page=1`
      );
      const movies = await result.json();
      console.log(movies);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={logo} alt="logo" />
        </header>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

export default App;
