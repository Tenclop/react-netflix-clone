const requestMovies = {
  fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY_V3}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY_V3}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY_V3}&with_genres=28`,
  fetchAdventureMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY_V3}&with_genres=12`,
  fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY_V3}&with_genres=35`,
  fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY_V3}&with_genres=10749`,
  fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY_V3}&with_genres=27`,
  fetchSFMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY_V3}&with_genres=878`,
};

export default requestMovies;
