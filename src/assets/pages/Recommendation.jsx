import React, { useEffect, useState } from 'react';
import './Recommendation.css';
import MovieCard from '../components/MovieCard';
import { fetchMoviesByGenre } from '../Services/tmdb';

const Recommendation = () => {
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const watchedGenres = JSON.parse(localStorage.getItem('watchedGenres')) || [28, 35]; 
    const genreId = watchedGenres[Math.floor(Math.random() * watchedGenres.length)];

    fetchMoviesByGenre(genreId).then(data => {
      setRecommended(data.results); 
    });
  }, []);

  return (
    <div className="recommendation-page">
      <h1 className="recommendation-title">Recommended For You</h1>
      <div className="recommendation-grid">
        {recommended.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
