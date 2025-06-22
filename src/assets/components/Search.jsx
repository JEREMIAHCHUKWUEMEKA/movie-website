import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';
import { fetchMoviesBySearch } from '../Services/tmdb';

const knownGenres = [
  'action', 'comedy', 'horror', 'romantic', 'drama', 'cartoon', 'cyber', 'anime'
];

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    // Navigate to genre if typed directly
    if (knownGenres.includes(value.toLowerCase())) {
      setResults([]);
      navigate(`/genre/${value.toLowerCase()}`);
      return;
    }

    // Otherwise, search for movies
    if (value.length > 2) {
      const movies = await fetchMoviesBySearch(value);
      setResults(movies);
    } else {
      setResults([]);
    }
  };

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
    setQuery('');
    setResults([]);
  };

  return (
    <div className="search-container-a">
      <input
        className="search-input-a"
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a movie or genre..."
      />
      {results.length > 0 && (
        <ul className="search-results">
          {results.map((movie) => (
            <li key={movie.id} onClick={() => handleMovieClick(movie.id)}>
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
