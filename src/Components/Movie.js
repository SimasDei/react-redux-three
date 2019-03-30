import React from 'react';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
  <div>
    <h3>{movie.title}</h3>
    <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    <p>{movie.description}</p>
  </div>
);

export default Movie;
