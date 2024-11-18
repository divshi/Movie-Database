import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="row">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div className="col-md-4 mb-3" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))
      ) : (
        <p>No movies match your search.</p>
      )}
    </div>
  );
};

export default MovieList;
