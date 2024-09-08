import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "../Styles/ProjectNavBar.css"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProjectNavBar = ({handleproject}) => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const change =()=> {
    navigate('/description');
  }
  const changetosummary =(id)=> {
    handleproject(id);
  }
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5004/api/Projects/all'); // Replace with your actual API URL
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError('Failed to fetch projects');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  return (
    <div className="sidebar-container">
        <header className="sidebar-header">
        <input type="text" id='ProjectSearch' placeholder='Search Projects'/>
        <span onClick={change}><AddCircleOutlineIcon /></span>
        </header>
        <main className="sidebar-main">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {projects.length > 0 ? (
          <ul>
            {projects.map(project => (
              <li key={project.projectId} onClick={() => changetosummary(project.projectId)}>
                {project.name}
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>No projects available</p>
        )}
        </main>
    </div>
  )
}

export default ProjectNavBar