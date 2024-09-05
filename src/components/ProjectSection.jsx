// src/components/ProjectSection.jsx
import React, { useState } from 'react';
import SearchBox from './SearchBox';
import './ProjectSection.css';

function ProjectSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="project-section">
      <div className="project-header">
        <SearchBox onSearch={handleSearch} />
        <button className="add-icon">+</button>
      </div>
      <h3>ProjectSection</h3>
      {/* You can filter and display projects based on searchTerm */}
    </div>
  );
}

export default ProjectSection;
