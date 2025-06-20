import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import SkeletonLoading from './SkeletonLoading';
import './MovieRow.css';

const MovieRow = ({ title, movies }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (movies && movies.length > 0) {
      setLoading(false);
    }
  }, [movies]);

  return (
    <section className="movie-row">
      <h2 className="row-title">{title}</h2>
      {loading ? (
        <SkeletonLoading />
      ) : (
        <div className="row-scroll">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
};

export default MovieRow;
