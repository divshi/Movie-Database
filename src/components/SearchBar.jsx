import React from 'react';

const SearchBar = ({ setSearchQuery, handleSearch }) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value); // Update search query
  };

  return (
    <div className="mb-4 d-flex">
      <input
        type="text"
        placeholder="Search movies..."
        className="form-control me-2"
        onChange={handleInputChange}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
