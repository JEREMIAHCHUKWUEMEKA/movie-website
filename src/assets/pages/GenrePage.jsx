import React, { useEffect, useState } from 'react';
import './GenrePage.css';
import { useParams } from 'react-router-dom';
import genreMap from '../utils/genreMap';
import MovieCard from '../components/MovieCard';
import { fetchMoviesByGenre } from '../Services/tmdb';

const GenrePage = () => {
  const { genreName } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const genreId = genreMap[genreName?.toLowerCase()];

  useEffect(() => {
    if (genreId) {
      fetchMoviesByGenre(genreId, page).then((data) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
      });
    }
  }, [genreName, page]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  // Determine current batch (groups of 5 pages)
  const currentBatch = Math.ceil(page / 5);
  const startPage = (currentBatch - 1) * 5 + 1;
  const endPage = Math.min(startPage + 4, totalPages);

  return (
    <div className="genre-page">
      <h1 className="genre-title">{genreName} Movies</h1>

      <div className="genre-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div className="pagination-controls">
        {startPage > 1 && (
          <button className="page-btn" onClick={() => setPage(startPage - 1)}>
            ← Prev
          </button>
        )}

        {[...Array(endPage - startPage + 1)].map((_, i) => {
          const pageNum = startPage + i;
          return (
            <button
              key={pageNum}
              className={`page-btn ${page === pageNum ? 'active' : ''}`}
              onClick={() => setPage(pageNum)}
            >
              {pageNum}
            </button>
          );
        })}

        {endPage < totalPages && (
          <button className="page-btn" onClick={() => setPage(endPage + 1)}>
            Next →
          </button>
        )}
      </div>
    </div>
  );
};

export default GenrePage;
