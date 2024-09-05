import React from 'react'

const Inputbox = ({name,type,id}) => {
  return (
    <div>
        <label htmlFor={id}>{name}</label>
        <input type={type} id={id}/>
    </div>
  )
}

export default Inputbox