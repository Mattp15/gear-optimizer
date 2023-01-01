import React, { useState } from 'react'

const ToolTip = () => {
  const [title, setTitle] = useState('Name Of Item')
  const [lineOne, setLineOne] = useState('This is some inforation of the Item')
  const [description, setDescription] = useState('This is the description of the Item')
  return (
    <div style={style.toolTip}>
      <img src='#' alt='Tooltip Image' style={style.toolTipImg} />
      <p style={style.title}>{title}</p>
      <p style={style.lineOne}>{lineOne}</p>
      <p style={style.description}>{description}</p>
      <p style={style.description}>{description}</p>
    </div>
  )
}
export default ToolTip

const style = {
  description: {
    paddingLeft: '1.2rem',
    margin: '0.2rem',
  },
  lineOne: {
    paddingLeft: '1.2rem',
    margin: '0.2rem',
  },
  title: {
    paddingLeft: '2rem',
    margin: '1rem',
  },
  toolTip: {
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '20px',
    border: '6px solid black',
    color: 'white',
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '200px',
    justifyContent: 'flex-start',
    width: '400px',
  },
  toolTipImg: {
    border: '1px solid white',
    height: '70px',
    width: '70px',
  },
}
