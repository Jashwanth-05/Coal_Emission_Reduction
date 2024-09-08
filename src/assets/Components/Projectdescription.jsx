import React from 'react'
import Inputbox from './Inputbox';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Projectdescription = () => {
  const navigate = useNavigate();

  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    startDate: '',
    endDate: '',
    projectOwner: ''
  });

  // State for error handling
  const [error, setError] = useState(null);

  // Array to define input fields
  const arr = [
    { name: "Project Name", type: "text", key: "name" },
    { name: "Description", type: "text", key: "description" },
    { name: "Location", type: "text", key: "location" },
    { name: "StartDate", type: "date", key: "startDate" },
    { name: "End Date", type: "date", key: "endDate" },
    { name: "Project Owner", type: "text", key: "projectOwner" }
  ];

  // Handle input change
  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    });
  };

  // Validate form data
  const validateFormData = () => {
    // Add your validation logic here, e.g., required fields, date format
    return formData.name && formData.description && formData.location && formData.startDate && formData.endDate && formData.projectOwner;
  };

  // Handle form submission
  const goToDetails = async () => {
    if (!validateFormData()) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5004/api/Projects', {
        projectId: 0, // Assuming the API auto-generates the ID
        ...formData
      });

      // If the API call is successful, navigate to the details page
      if (response.status === 200 || response.status === 201) {
        navigate('/details');
      }
    } catch (error) {
      console.error('Error creating project:', error);
      setError('Failed to create project. Please check the form data and try again.');
    }
  }; 

  return (
    <div className="form-container">
        <form action="">
        {arr.map((item,index)=>(<Inputbox key={index} name={item.name} type={item.type} onChange={(e) => handleInputChange(item.key, e.target.value)} />))}
        </form>
        <button onClick={goToDetails}>Continue</button>
    </div>
  )
}

export default Projectdescription