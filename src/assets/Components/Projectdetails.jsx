import React from 'react'
import { useState } from 'react';
import Selectbox from './Selectbox';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Projectdetails = ({Activityhandler,goToActivity}) => {
    
    const Coal={name:"Type of Coal",choice:["Anthracite","Bituminous","Sub-Bituminous","Lignite"]};
    const Method={name:"Mining Method",choice:["Surface Mining","Underground Mining"]};
    
    const [Choice,SetChoice]=useState(["Strip Mining","Open-pit Mining","Highwall Mining"]);
    const [Option,SetOption]=useState("");
    const [Activity,SetActivity]=useState("");

    useEffect(() => {
        switch (Option) {
          case "Surface Mining":
            SetChoice(["Strip Mining", "Open-pit Mining", "Highwall Mining"]);
            break;
          case "Underground Mining":
            SetChoice(["Board and Pillar Mining", "Longwall Mining", "Room and Pillar Mining"]);
            break;
        }
      }, [Option]);


    // const Activitypasser= ()=>{
        
    // };

    const handleSelect=(event,isThird) =>{
        const opt=event.target.value;
        SetOption(opt);
        if(isThird){
            SetActivity(opt);
            Activityhandler(Activity);
        }
    }

  return (
    <div className='form-container'>
        <Selectbox name={Coal.name} arr={Coal.choice} />
        <Selectbox name={Method.name} arr={Method.choice} handleSelect={(e) => handleSelect(e, false)} />
        <Selectbox name="Type of Mining" arr={Choice} handleSelect={(e) => handleSelect(e, true)} />
        <button onClick={goToActivity}>Next</button>
    </div>
  )
}

export default Projectdetails