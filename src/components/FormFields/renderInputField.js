import React from 'react'

const renderInputField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-element">
    <label className={`${touched && error && 'error'}`}>
      {label} {touched && error && <span>{error}</span>}
    </label>
    <input {...input} type={type}/>
  </div>
)

export default renderInputField