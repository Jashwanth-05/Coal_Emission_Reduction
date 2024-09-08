import React from 'react'
import "../Styles/Home.css";
const Home = ({goToProjects}) => {
  return (
    <div className="home-container">
        <h1>Introduction to Our App</h1>
        <p>A web application specifically designed for Indian coal mines to quantify their carbon footprint and explore pathways to carbon neutrality.</p>
        <button onClick={goToProjects}>Get Started</button>
    </div>
  )
}

export default Home