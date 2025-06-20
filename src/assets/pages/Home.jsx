import React, { useEffect, useState } from 'react';
import MovieRow from '../components/MovieRow';
import { fetchMoviesByGenre } from '../Services/tmdb';
import genreMap from '../utils/genreMap';

const Home = () => {
  const [moviesByGenre, setMoviesByGenre] = useState({});

  useEffect(() => {
    const fetchAllGenres = async () => {
      const genreMovies = {};

      for (const [name, id] of Object.entries(genreMap)) {
        try {
          const data = await fetchMoviesByGenre(id); 
          genreMovies[name] = data.results; 
        } catch (err) {
          console.error(`Failed to fetch ${name}`, err);
        }
      }

      setMoviesByGenre(genreMovies);
    };

    fetchAllGenres();
  }, []);

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', padding: '1rem' }}>
      {Object.entries(moviesByGenre).map(([genre, movies]) => (
        <MovieRow key={genre} title={genre} movies={movies} />
      ))}
    </div>
  );
};

export default Home;
