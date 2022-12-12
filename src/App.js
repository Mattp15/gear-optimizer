import logo from './logo.svg'
import './App.css'
import React, { useState, useEffect } from 'react'
import { Test } from './Components'
const accessToken = process.env.REACT_APP_ACCESS_TOKEN
const App = () => {
  const [fetchResponse, setFetchResponse] = useState()
  const [imgState, setImgState] = useState()
  const [itemId, setItemId] = useState()
  const [itemName, setItemName] = useState("Primal Scion's Twinblade")
  const [itemObject, setItemObject] = useState()

  const handleGetItem = async () => {
    const response = await fetch('https://us.api.blizzard.com/data/wow/item/' + itemId + '?namespace=static-us&locale=en_US&access_token=' + accessToken, {
      method: 'GET',
      headers: {
        'Content-Type': 'applicatoin/json;charset=UTF-8',
      },
    })
    const res = await response.json()
    console.log(res)
  }

  const getItemByName = async () => {
    const response = await fetch('https://us.api.blizzard.com/data/wow/search/item?namespace=static-us&name.en_US=Twinblade&orderby=id&_page=1&access_token=' + accessToken, {
      method: 'GET',
      header: {
        'Content-Type': 'application/json;charset+UTF-8',
      },
    })
    const res = await response.json()
    const searchWord = itemName.split(' ').shift()
    const dirtyObjectArray = res.results.map((x) => {
      if (x.data.name.en_US === itemName) {
        return x.data
      }
    })
    const foundItemObject = dirtyObjectArray.filter((fil) => fil)
    setItemObject(foundItemObject[0])
    setItemId(foundItemObject[0].id)
    const mediaResponse = await fetch('https://us.api.blizzard.com/data/wow/media/item/' + foundItemObject[0].id + '?namespace=static-10.0.2_46479-us&access_token=' + accessToken, {
      method: 'GET',
      header: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    })
    const mediaRes = await mediaResponse.json()
    setImgState(mediaRes.assets[0].value)
    console.log(mediaRes.assets[0].value)
  }
  const getMedia = async () => {
    const response = await fetch('https://us.api.blizzard.com/data/wow/media/item/' + itemId + '?namespace=static-10.0.2_46479-us&access_token=' + accessToken, {
      method: 'GET',
      header: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    })
    const res = await response.json()
    setImgState(res.assets[0].value)
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={handleGetItem}>get item by id</button>
        <button onClick={getItemByName}>get item by name</button>
        <button onClick={getMedia}>Get media</button>
        <Test state={imgState} />
        <Test state={itemObject} />
      </header>
    </div>
  )
}

export default App
