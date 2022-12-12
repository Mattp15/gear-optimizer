import logo from './logo.svg'
import './App.css'
import React, { useState, useEffect } from 'react'
import { Test } from './Components'
const accessToken = process.env.REACT_APP_ACCESS_TOKEN
const App = () => {
  const [fetchResponse, setFetchResponse] = useState()
  const [imgState, setImgState] = useState()

  const handleGetItem = async () => {
    const response = await fetch('https://us.api.blizzard.com/data/wow/item/200293?namespace=static-us&locale=en_US&access_token=' + accessToken, {
      method: 'GET',
      headers: {
        'Content-Type': 'applicatoin/json;charset=UTF-8',
      },
    })
    const res = await response.json()
    console.log(res)
  }

  const getItemByName = async () => {}
  const getMedia = async () => {
    const response = await fetch('https://us.api.blizzard.com/data/wow/media/item/200293?namespace=static-10.0.2_46479-us&access_token=' + accessToken, {
      method: 'GET',
      header: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    })
    const res = await response.json()
    setImgState(res.assets[0].value)
    console.log(res.assets)
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={handleGetItem}>get item by id</button>
        <button onClick={getItemByName}>get item by name</button>
        <button onClick={getMedia}>Get media</button>
        <Test state={imgState} />
      </header>
    </div>
  )
}

export default App
