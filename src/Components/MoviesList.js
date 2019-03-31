import React, { Component } from 'react';
import styled from 'styled-components';
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
      <MovieGrid>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
