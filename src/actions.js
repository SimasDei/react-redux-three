export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';
export const GET_MOVIES = 'GET_MOVIES';
const API = {
  url: 'https://api.themoviedb.org/3/',
  key: 'ab1108ff64d84d869773eb7692b0749f'
};
export function toggleMessage() {
  return {
    type: 'TOGGLE_MESSAGE'
  };
}

export function getMovies() {
  return async function(dispatch) {
    const result = await fetch(
      `${API.url}discover/movie?api_key=${
        API.key
      }&language=en-US&sort_by=popularity.desc&page=2`
    );
    const movies = await result.json();
    return dispatch({
      type: 'GET_MOVIES',
      data: movies.results
    });
  };
}
