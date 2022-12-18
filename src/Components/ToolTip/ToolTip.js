import React from 'react'

const ToolTip = () => {
  return <div style={style.toolTip}></div>
}
export default ToolTip

const style = {
  toolTip: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '20px',
    border: '6px solid black',
    height: '400px',
    width: '600px',
  },
}
