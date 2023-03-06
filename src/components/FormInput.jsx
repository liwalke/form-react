import React, { useState } from 'react'
import "./formInput.css"

function FormInput({ label, errorMessage, ...restProps }) {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className='formInput'>
      <label>{label}</label>
      <input
        {...restProps} 
        onBlur={handleFocus}
        onFocus={() =>
          restProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput