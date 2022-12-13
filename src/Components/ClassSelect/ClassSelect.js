import React from 'react'

const ClassSelect = ({ onChange, classes }) => {
  return (
    <div>
      <label>
        <select onChange={onChange}>
          {classes.map((x) => {
            return <option value={x}>{x}</option>
          })}
        </select>
      </label>
    </div>
  )
}
export default ClassSelect
