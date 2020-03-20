import React from 'react'

const renderGenderField = ({ label, meta: { touched, error } }) => (
  <div className="title-middle">
    <label className={`${touched && error && 'error'}`}>
      {label} {touched && error && <span>{error}</span>}
    </label>
  </div>
)

export default renderGenderField