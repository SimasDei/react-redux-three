import React, { Component } from 'react';
import styled from 'styled-components';
import { Poster } from './Movie';

const API = {
  url: 'https://api.themoviedb.org/3/',
  key: 'ab1108ff64d84d869773eb7692b0749f',
  poster_path: 'http://image.tmdb.org/t/p/w154',
  backdrop_path: 'http://image.tmdb.org/t/p/w1280'
};

export class MovieDetails extends Component {
  state = {
    movie: {}
  };

  async componentDidMount() {
    try {
      const result = await fetch(
        `${API.url}movie/${this.props.match.params.id}?api_key=${
          API.key
        }&language=en-US`
      );
      const movie = await result.json();
      this.setState({ movie });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { movie } = this.state;
    const { poster_path, backdrop_path } = API;
    return (
      <MovieWrapper backdrop={`${backdrop_path}${movie.backdrop_path}`}>
        <MovieInfo>
          <Poster
            src={`${poster_path}${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <h2>{movie.title}</h2>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetails;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: #fff;
  text-align: left;
  padding: 2rem 10%;
  display: flex;

  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
