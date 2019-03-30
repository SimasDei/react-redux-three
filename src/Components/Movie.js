import React, { Component } from 'react';

export class Movie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
      </div>
    );
  }
}

export default Movie;
