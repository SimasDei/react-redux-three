import React, { Component } from 'react';

const API = {
  url: 'https://api.themoviedb.org/3/',
  key: 'ab1108ff64d84d869773eb7692b0749f'
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
    return (
      <div>
        <h2>{movie.title}</h2>
        <h3>{movie.release_date}</h3>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetails;
