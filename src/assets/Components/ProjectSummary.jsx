import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectSummary = ({projectsum}) => {
    const [project, setProject] = useState(null);
  const [fuelConsumption, setFuelConsumption] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch project details by ID
  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5004/api/projects/${projectsum}`); // Replace with your actual API URL
        setProject(response.data);
      } catch (err) {
        console.error('Error fetching project details:', err);
        setError('Failed to fetch project details');
      }
    };

    const fetchFuelConsumption = async () => {
      try {
        const response = await axios.get(`http://localhost:5004/api/Projects/fuel-consumption/${projectsum}`); // Replace with your actual API URL
        setFuelConsumption(response.data);
      } catch (err) {
        console.error('Error fetching fuel consumption data:', err);
        setError('Failed to fetch fuel consumption data');
      }
    };

    if (projectsum) {
      fetchProjectDetails();
      fetchFuelConsumption();
      setLoading(false);
    }
  }, [projectsum]);

  return (
    <div>
      <header>
        <h1>Project Summary</h1>
      </header>
      <main>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && project ? (
          <div className="project-details">
            <h2>{project.name}</h2>
            <p><strong>Description:</strong> {project.description}</p>
            <div className="fuel-consumption">
                <br/>
              <h3>Fuel Consumption Details</h3>
              {fuelConsumption.length > 0 ? (
                <ul>
                  {fuelConsumption.map((fuel, index) => (
                    <div key={index}>
                     <p> <strong>Fuel Type:</strong> {fuel.fuelEnergyType}</p>
                      <p><strong>Total Consumption:</strong> {fuel.totalConsumption}</p>
                      </div>
                  ))}
                </ul>
              ) : (
                <p>No fuel consumption data available for this project.</p>
              )}
            </div>
          </div>
        ) : (
          !loading && <p>No project data available.</p>
        )}
      </main>
    </div>
  );
};

export default ProjectSummary