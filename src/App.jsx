import React from 'react'
import Navbar from './assets/Components/Navbar'
import Home from './assets/Components/Home'
import ProjectPage from './assets/Components/ProjectPage'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Projectdetails from './assets/Components/Projectdetails';
import Activities from './assets/Components/Activities';
import Projectdescription from './assets/Components/Projectdescription';
import { useState } from 'react';
import "./assets/Styles/App.css"

const App = () => {

  return (
    <Router>
      <div>
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  );
};

const AppRoutes = () => {
  const navigate = useNavigate();
  const [Activity,SetActivity]=useState("");

  const goToProjects = () => {
    navigate('/project');
  };

  const Activityhandler=(choice)=>{
    SetActivity(choice);
  };

  const goToActivity = () => {
      navigate('/activities');
    }; 


  return (
    <Routes>
      <Route path="/" element={<Home goToProjects={goToProjects} />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/details" element={<Projectdetails Activityhandler={Activityhandler} goToActivity={goToActivity} />} />
      <Route path="/description" element={<Projectdescription />} />
    </Routes>
  );
};


export default App
