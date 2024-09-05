import React from 'react'

const Inputbox = ({name,type,id}) => {
  return (
    <div>
        <label htmlFor={id}>{name}</label>
        <input type="text" id={id} placeholder={`Enter in ${type}`} />
    </div>
  )
}

export default Inputbox