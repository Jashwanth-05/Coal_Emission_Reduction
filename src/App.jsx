// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import ProjectSection from './components/ProjectSection';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="header">
        <span className="new-project-tag">New Project Page</span>
        <Navbar />
      </div>
      <div className="content">
        <ProjectSection />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
