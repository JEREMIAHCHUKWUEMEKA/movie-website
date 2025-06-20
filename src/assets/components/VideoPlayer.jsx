import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ videoKey }) => {
  return (
    <div className="video-player">
      <iframe
        src={`https://www.youtube.com/embed/${videoKey}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Movie Trailer"
        className="video-frame"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;