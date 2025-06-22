import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';


export const fetchMoviesByGenre = async (genreId, page = 1) => {
  const res = await axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      with_genres: genreId,
      page: page,
    },
  });
  return res.data;
};

export const fetchPopularMovies = async () => {
  const res = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
    },
  });
  return res.data.results;
};

export const fetchMovieDetails = async (id) => {
  const res = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
      append_to_response: 'videos',
    },
  });
  return res.data;
};

export const fetchMoviesBySearch = async (query) => {
  const res = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query
    },
  });
  return res.data.results;
};
