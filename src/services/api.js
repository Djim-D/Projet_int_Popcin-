import axios from 'axios';

const API_KEY = 'b002a80aba1383f7aba4dbf7b519530b';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMoviesByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: category,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data from TMDB', error);
    return [];
  }
};

const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies from TMDB', error);
    return [];
  }
};

const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: {
        api_key: API_KEY,
        language: 'fr-FR',
      },
    });
    return response.data.genres;
  } catch (error) {
    console.error('Error fetching categories from TMDB', error);
    return [];
  }
};

const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: 'fr-FR',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details from TMDB', error);
    return null;
  }
};

const fetchMovieCast = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
        language: 'fr-FR',
      },
    });
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching movie cast from TMDB', error);
    return [];
  }
};

const fetchMovieTrailer = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/videos`, {
      params: {
        api_key: API_KEY,
        language: 'fr-FR',
      },
    });
    return response.data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
  } catch (error) {
    console.error('Error fetching movie trailer from TMDB', error);
    return null;
  }
};

const fetchActorDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/person/${id}`, {
      params: {
        api_key: API_KEY,
        language: 'fr-FR',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching actor details from TMDB', error);
    return null;
  }
};

const fetchActorMovies = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/person/${id}/movie_credits`, {
      params: {
        api_key: API_KEY,
        language: 'fr-FR',
      },
    });
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching actor movies from TMDB', error);
    return [];
  }
};

const fetchSearchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        language: 'fr-FR',
        query,
      },
    });
    if(response === null){
      console.log('bahh cest vide');
    }
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies from TMDB', error);
    return [];
  }
};

export {
  fetchMoviesByCategory,
  fetchPopularMovies,
  fetchCategories,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieTrailer,
  fetchActorDetails,
  fetchActorMovies,
  fetchSearchMovies, 
};
