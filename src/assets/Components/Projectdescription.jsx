import React from 'react'
import Inputbox from './Inputbox';
const Projectdescription = () => {
    const arr=[{name:"Project Name",type:"text"},{name:"Description",type:"text"},{name:"Location",type:"text"},{name:"StartDate",type:"Date"},{name:"End Date",type:"Date"},{name:"Project Owner",type:"type"}];
  return (
    <div>
        <form action="">
        {arr.map((item,index)=>(<Inputbox key={index} name={item.name} type={item.type} />))}
        </form>
    </div>
  )
}

export default Projectdescription