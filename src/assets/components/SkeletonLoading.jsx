import React from 'react';
import './SkeletonLoading.css';

const SkeletonLoading = ({ count = 5 }) => {
  return (
    <div className="skeleton-row">
      {[...Array(count)].map((_, idx) => (
        <div className="skeleton-card" key={idx}>
          <div className="skeleton-poster"></div>
          <div className="skeleton-text"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoading;
