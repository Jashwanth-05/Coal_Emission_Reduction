import React from 'react'
import Navbar from './assets/Components/Navbar'
import Home from './assets/Components/Home'
import Projectdescription from './assets/Components/Projectdescription'
import Projectdetails from './assets/Components/Projectdetails'
import { useState } from 'react';
import { useEffect } from 'react';
import Activities from './assets/Components/Activities';

const App = () => {
  const [Activity,SetActivity]=useState("");

  const Activityhandler=(choice)=>{
    SetActivity(choice);
  };
  return (
    <div>
      <Navbar />
      <Home />
      <Projectdescription />
      <Projectdetails Activityhandler={Activityhandler}/>
      <Activities choice={Activity}/>
    </div>
  )
}

export default App
