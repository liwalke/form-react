import React from 'react'
import "./formInput.css"

function FormInput({ label, errorMessage, ...restProps }) {
  return (
    <div className='formInput'>
        <label>{label}</label>
        <input
            {...restProps}
        />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput