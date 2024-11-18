import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="card h-100">
      <img
        src={movie.image || 'https://via.placeholder.com/300'}
        className="card-img-top"
        alt={movie.title || 'No Image Available'}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title || 'Untitled Movie'}</h5>
        <p className="card-text">{movie.description || 'No description available.'}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Release Year: {movie.year || 'Unknown'}</small>
      </div>
    </div>
  );
};

export default MovieCard;
