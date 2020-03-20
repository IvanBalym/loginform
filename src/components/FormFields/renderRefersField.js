import React from 'react'
const sources = ['From Friend', 'Google', 'Redit', 'Other']

const renderRefersField = ({ input, label }) => (
  <div className="form-element">
    <label className="title-middle">{label}</label>
    <select {...input}>
      <option value="">...</option>
      {sources.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
  </div>
)

export default renderRefersField