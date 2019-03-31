import React from 'react';
import { Link } from 'react-router-dom';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
  <div>
    <h3>{movie.title}</h3>
    <Link to={`/${movie.id}`}>
      <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Link>
    <p>{movie.description}</p>
  </div>
);

export default Movie;
