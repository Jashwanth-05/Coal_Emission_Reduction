// src/components/MainContent.jsx
import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <div className="main-content">
      <h1>Title</h1>
      <div className="add-project">
        <p>Add new Project</p>
        <button className="add-button">+</button>
      </div>
    </div>
  );
}

export default MainContent;
