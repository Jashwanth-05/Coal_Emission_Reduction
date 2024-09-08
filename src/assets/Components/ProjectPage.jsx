import React from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import ProjectNavBar from './ProjectNavBar'
import Projectdescription from './Projectdescription'
import Projectdetails from './Projectdetails'
import Activities from './Activities'
import { useState } from 'react';
import { useEffect } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "../Styles/ProjectPage.css"
import axios from 'axios';
import ProjectSummary from './ProjectSummary';

const ProjectPage = () => {

  const [projectCount, setProjectCount] = useState(null); 
  const [error, setError] = useState(null); 
  const [projectsum,setprojectsum]=useState();

  const handleproject = (id) => {
    setprojectsum(id);
  }
  const fetchProjectCount = async () => {
    try {
      const response = await axios.get('http://localhost:5004/api/Projects/count');
      setProjectCount(response.data); 
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchProjectCount();
  }, []);

  return (
      <div className="project-page-container">
        <ProjectNavBar handleproject={handleproject}/>
        <div className="main-content">
          <div className='newproject'>
          {projectCount === 0 && <h1>Add New Project <AddCircleOutlineIcon className="MuiSvgIcon-root"/></h1>}
          </div>
          <div className='oldproject'>
          {projectCount !== null && !projectsum && <h1>Select Projects to Show Summary</h1>}
          {projectCount >0 && projectsum && <ProjectSummary projectsum={projectsum} />}
          </div>
        </div>
        
        
        
      </div>
  )
}

export default ProjectPage