// src/components/SearchBox.jsx
import React from 'react';
import './SearchBox.css';

function SearchBox({ onSearch }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search Projects..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
