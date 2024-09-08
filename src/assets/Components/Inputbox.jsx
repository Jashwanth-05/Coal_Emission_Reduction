import React from 'react'
import "../Styles/Inputbox.css"

const Inputbox = ({name,type,id}) => {
  return (
    <div className="inputbox-container">
        <label htmlFor={id}>{name}</label>
        <input type={type} id={id}/>
    </div>
  )
}

export default Inputbox