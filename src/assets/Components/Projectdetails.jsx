import React from 'react'
import { useState } from 'react';
import Selectbox from './Selectbox';

const Projectdetails = () => {
    const Coal={name:"Type of Coal",choice:["Anthracite","Bituminous","Sub-Bituminous","Lignite"]};
    const Method={name:"Mining Method",choice:["Surface Mining","Underground Mining"]};
    const [Choice,SetChoice]=useState(["Strip Mining","Open-pit Mining","Highwall Mining"]);
    const [Option,SetOption]=useState("");
    
    const handleSelect=(event) =>{
        const opt=event.target.value;
        SetOption(opt);

        switch(opt){
            case "Surface Mining":
                SetChoice(["Strip Mining","Open-pit Mining","Highwall Mining"]);
                break;
            case "Underground Mining":
                SetChoice(["Board and Pillar Mining","Longwall Mining","Room and Pillar Mining"]);
                break;
        }
    }
  return (
    <div>
        <Selectbox name={Coal.name} arr={Coal.choice} />
        <Selectbox name={Method.name} arr={Method.choice} handleSelect={handleSelect} />
        <Selectbox name="Mining Method" arr={Choice}/>
        <button>Next</button>
    </div>
  )
}

export default Projectdetails