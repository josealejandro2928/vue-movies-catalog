import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/discover/movie';
const IMAGE_URL = 'http://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';

async function getMovies(params = { page: 1 }) {
  const response = await axios.get(API_URL, {
    params: {
      ...params,
      api_key: '4c8bc95958dd9c067669abb351d5bd28',
    },
  });
  let { data } = response;
  data.results = data.results.map(element => {
    element.image = `${IMAGE_URL}${element.poster_path}`;
    element.rating = element.vote_average;
    return element;
  });
  return data;
}
async function searchMovies(params = { page: 1 }) {
  const response = await axios.get(SEARCH_URL, {
    params: {
      ...params,
      api_key: '4c8bc95958dd9c067669abb351d5bd28',
    },
  });
  let { data } = response;
  data.results = data.results.map(element => {
    element.image = `${IMAGE_URL}${element.poster_path}`;
    element.rating = element.vote_average;
    return element;
  });
  return data;
}

export default { getMovies, searchMovies };
