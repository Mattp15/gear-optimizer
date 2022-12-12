import React, { useEffect } from 'react'

const Test = ({ state }) => {
  useEffect(() => {
    console.log(typeof state)
  }, [])
  if (typeof state == 'string') {
    return (
      <div>
        <img src={state} alt='idk' />
      </div>
    )
  }
  if (typeof state === 'object') {
    return (
      <div>
        <ul>
          <li key='00'></li>
          <li key='01'></li>
          <li key='02'></li>
          <li key='03'></li>
          <li key='04'></li>
          <li key='05'></li>
          <li key='06'></li>
        </ul>
      </div>
    )
  }
}
export default Test
