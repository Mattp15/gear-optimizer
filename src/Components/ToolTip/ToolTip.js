import React, { useState } from 'react'

const ToolTip = () => {
  const [title, setTitle] = useState('Name Of Item')
  const [lineOne, setLineOne] = useState('This is some inforation of the Item')
  const [description, setDescription] = useState('This is the description of the Item')
  return <div style={style.toolTip}></div>
}
export default ToolTip

const style = {
  toolTip: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '20px',
    border: '6px solid black',
    color: 'white',
    height: '400px',
    width: '600px',
  },
}
