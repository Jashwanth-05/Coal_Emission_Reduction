import React from 'react'

const Selectbox = ({name, arr=[],handleSelect }) => {
  return (
    <div>
          <label htmlFor={name}>{name}: </label>
          <select id={name} onChange={handleSelect}>
            {arr.map((item,index)=>(<option key={index} value={item}>{item}</option>))}
        </select>
    </div>
  )
}

export default Selectbox