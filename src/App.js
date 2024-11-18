import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://dummyapi.online/api/movies');
        console.log("API Response:", response.data); // Debugging API data
        setMovies(response.data);
        setFilteredMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const handleSearch = () => {
    console.log("Search Query:", searchQuery); // Debugging search input
    const results = movies.filter((movie) =>
      (movie.title?.toLowerCase() || '').includes(searchQuery.toLowerCase())
    );
    console.log("Filtered Results:", results); // Debugging filtered results
    setFilteredMovies(results);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Movie Database</h1>
      <SearchBar setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <MovieList movies={filteredMovies} />
      )}
    </div>
  );
}

export default App;
