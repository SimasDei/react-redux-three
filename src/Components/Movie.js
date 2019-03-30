import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Movie extends Component {
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  };

  static defaultProps = {};

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
