import logo from './logo.svg'
import './App.css'
import React, { useState, useEffect } from 'react'
import { Test } from './Components/temp'
const accessToken = process.env.REACT_APP_ACCESS_TOKEN
const App = () => {
  const [fetchResponse, setFetchResponse] = useState()

  const handleClick = async () => {
    const response = await fetch('https://us.api.blizzard.com/data/wow/item/200293?namespace=static-us&locale=en_US&access_token=' + accessToken, {
      method: 'GET',
      headers: {
        'Content-Type': 'applicatoin/json;charset=UTF-8',
      },
    })
    const res = await response.json()
    console.log(res)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <button value='click' onClick={handleClick}>
          Click
        </button>
      </header>
    </div>
  )
}

export default App
