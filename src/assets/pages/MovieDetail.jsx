import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetail.css';
import VideoPlayer from '../components/VideoPlayer';
import { fetchMovieDetails } from '../Services/tmdb';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchMovieDetails(id)
      .then(data => {
        setMovie(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch movie details:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="movie-detail">
        <div className="skeleton-title shimmer"></div>
        <div className="skeleton-video shimmer"></div>
        <div className="skeleton-overview shimmer"></div>
        <div className="skeleton-overview shimmer"></div>
        <div className="skeleton-overview shimmer short"></div>
      </div>
    );
  }

  if (!movie) {
    return <div className="movie-detail text-danger">Movie not found.</div>;
  }

  const trailer = movie.videos?.results?.find(v => v.type === 'Trailer');

  return (
    <div className="movie-detail">
      <h1 className="detail-title">{movie.title}</h1>
      {trailer && <VideoPlayer videoKey={trailer.key} />}
      <p className="overview">{movie.overview}</p>
    </div>
  );
};

export default MovieDetail;
