import React, { useState } from 'react'
import Selectbox from './Selectbox';
import { useEffect } from 'react';
import Inputbox from './Inputbox';

const Activities = ({choice}) => {
    const [CurAct,SetCurAct]=useState([]);
    const [selectedActivity, setSelectedActivity] = useState('');
    const [equipment, setEquipment] = useState([]);
    const [fueltype,setFueltype]=useState("");

const Handlefueltype = (event)=> {
    setFueltype(event.target.value);
}

const stripMiningActivities = [
    "Overburden Casting",
    "Coal Extraction",
    "Transportation",
    "Reclamation",
    "Electricity Use"
  ];
  
  const openPitMiningActivities = [
    "Overburden Casting",
    "Coal Extraction",
    "Transportation",
    "Reclamation",
    "Electricity Use"
  ];

  const highwallMiningActivities = [
    "Overburden Casting",
    "Coal Extraction",
    "Transportation",
    "Reclamation",
    "Electricity Use"
  ];
  
  const bordAndPillarActivities = [
    "Development",
    "Coal Extraction",
    "Processing and Transportation",
    "Reclamation",
    "Electricity Use"
  ];
  
  const longwallMiningActivities = [
    "Development",
    "Coal Extraction",
    "Processing and Transportation",
    "Reclamation",
    "Electricity Use"
  ];
  
  const continuousMinerActivities = [
    "Development",
    "Coal Extraction",
    "Processing and Transportation",
    "Reclamation",
    "Electricity Use"
  ];


  const stripMiningEquipment = {
    "Overburden Casting": ["Draglines", "Shovels", "Excavators"],
    "Coal Extraction": ["Drilling Equipment", "Blasting Equipment"],
    "Transportation": ["Crushers", "Screeners", "Transport Trucks"],
    "Reclamation": ["Bulldozers", "Grader", "Seeders"],
    "Electricity Use": ["Generators", "Transformers", "Wiring"]
  };
  
  const openPitMiningEquipment = {
    "Overburden Casting": ["Draglines", "Shovels", "Excavators"],
    "Coal Extraction": ["Drilling Equipment", "Blasting Equipment"],
    "Transportation": ["Crushers", "Screeners", "Transport Trucks"],
    "Reclamation": ["Bulldozers", "Grader", "Seeders"],
    "Electricity Use": ["Generators", "Transformers", "Wiring"]
  };
  
  const highwallMiningEquipment = {
    "Overburden Casting": ["Draglines", "Shovels", "Excavators"],
    "Coal Extraction": ["Augers", "Continuous Miners"],
    "Transportation": ["Crushers", "Screeners", "Transport Trucks"],
    "Reclamation": ["Bulldozers", "Grader", "Seeders"],
    "Electricity Use": ["Generators", "Transformers", "Wiring"]
  };
  
  const bordAndPillarEquipment = {
    "Development": ["Drifts", "Roadheaders", "Boring Machines"],
    "Coal Extraction": ["Continuous Miners", "Roof Bolters"],
    "Processing and Transportation": ["Shuttle Cars", "Conveyors", "Crushers", "Screeners"],
    "Reclamation": ["Backfillers", "Reclaimers", "Seeders"],
    "Electricity Use": ["Generators", "Transformers", "Wiring"]
  };
  
  const longwallMiningEquipment = {
    "Development": ["Drifts", "Gate Road Headers", "Longwall Equipment"],
    "Coal Extraction": ["Shearers", "Roof Supports"],
    "Processing and Transportation": ["Shuttle Cars", "Conveyors", "Crushers", "Screeners"],
    "Reclamation": ["Backfillers", "Reclaimers", "Seeders"],
    "Electricity Use": ["Generators", "Transformers", "Wiring"]
  };
  
  const continuousMinerEquipment = {
    "Development": ["Drifts", "Main Entries", "Room Development Equipment"],
    "Coal Extraction": ["Continuous Miners"],
    "Processing and Transportation": ["Shuttle Cars", "Conveyors", "Crushers", "Screeners"],
    "Reclamation": ["Backfillers", "Reclaimers", "Seeders"],
    "Electricity Use": ["Generators", "Transformers", "Wiring"]
  };

  const energyTypes = [
  "Diesel",
  "Electricity",
  "Gasoline",
  "Natural Gas (LNG)",
  "Propane (LPG)"
];

  const CoalInputs =["Consumption Rates","Production Rates"];
  
  useEffect(() => {
    switch(fueltype){
          case "Diesel":
              setFueltype("liter");
              break;
          case "Electricity":
              setFueltype("kWh");
              break;
          case "Gasoline":
              setFueltype("liter");
              break;
          case "Natural Gas (LNG)":
              setFueltype("m³");
              break;
          case "Propane (LPG)":
              setFueltype("m³");
              break;
    }
  }, [fueltype]);

  useEffect(() => {
  switch(choice){
        case "Strip Mining":
            SetCurAct(stripMiningActivities);
            break;
        case "Open-pit Mining":
            SetCurAct(openPitMiningActivities);
            break;
        case "Highwall Mining":
            SetCurAct(highwallMiningActivities);
            break;
        case "Board and Pillar Mining":
            SetCurAct(bordAndPillarActivities);
            break;
        case "Longwall Mining":
            SetCurAct(longwallMiningActivities);
            break;
        case "Room and Pillar Mining":
            SetCurAct(continuousMinerActivities);
            break;
  }
}, [choice]);

useEffect(() => {
    let equipmentList = [];
    switch (choice) {
        case "Strip Mining":
            equipmentList = stripMiningEquipment[selectedActivity] || [];
            break;
        case "Open-pit Mining":
            equipmentList = openPitMiningEquipment[selectedActivity] || [];
            break;
        case "Highwall Mining":
            equipmentList = highwallMiningEquipment[selectedActivity] || [];
            break;
        case "Bord and Pillar Mining":
            equipmentList = bordAndPillarEquipment[selectedActivity] || [];
            break;
        case "Longwall Mining":
            equipmentList = longwallMiningEquipment[selectedActivity] || [];
            break;
        case "Continuous Miner Method":
            equipmentList = continuousMinerEquipment[selectedActivity] || [];
            break;
        default:
            equipmentList = [];
    }
    setEquipment(equipmentList);
}, [selectedActivity, choice]);

  return (
    <div>
        <label htmlFor="Activitybar">Activities</label>
        <select
                id="activity-select"
                value={selectedActivity}
                defaultValue=""
                onClick={(e)=> setSelectedActivity(e.target.value)}
                onChange={(e) => setSelectedActivity(e.target.value)}
            >
              <option value="" disabled>Select Activity</option>
                {CurAct.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
                    <label htmlFor="equipment-select">Equipment</label>
                    <select id="equipment-select" defaultValue="">
                    <option value="" disabled>Select Equipment</option>
                        {equipment.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
            <label htmlFor="Fuel_energy">Fuel/Energy Type</label>
            <select  id="Fuel_energy" defaultValue="" onClick={Handlefueltype}>
            <option value="" disabled>Select Fuel/Energy Type</option>
            {energyTypes.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
            </select>
            {CoalInputs.map((item, index) => (
                            <Inputbox name={item} key={index} type={fueltype}/>
            ))}
            <button>Submit</button>
      </div>
  )
}

export default Activities