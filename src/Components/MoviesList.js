import React, { Component } from 'react';
import Movie from './Movie';

const API = {
  url: 'https://api.themoviedb.org/3/',
  key: 'ab1108ff64d84d869773eb7692b0749f'
};

export class MoviesList extends Component {
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
      <div>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MoviesList;
