import logo from './logo.svg'
import './App.css'
import React, { useState, useEffect } from 'react'
import { Test } from './Components'
import { ClassSelect } from './Components/ClassSelect'
import { Cloth, Leather, Mail, Plate } from './Components/ArmorType'
const accessToken = process.env.REACT_APP_ACCESS_TOKEN
const App = () => {
  const [fetchResponse, setFetchResponse] = useState()
  const [imgState, setImgState] = useState()
  const [itemId, setItemId] = useState(200293)
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
  }

  const [classes, setClasses] = useState(['Select a class ', 'Death Knight', 'Druid', 'Demon Hunter', 'Evoker', 'Mage', 'Monk', 'Hunter', 'Paladin', 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'])
  const [selectedClass, setSelectedClass] = useState()
  const [selectedSpec, setSelectedSpec] = useState(['none', 'none', 'none'])
  const [classSpecs, setClassSpecs] = useState({
    'Death Knight': ['Blood', 'Frost', 'Unholy'],
    Druid: ['Balance', 'Feral', 'Guardian', 'Restoration'],
    'Demon Hunter': ['Havoc', 'Vengeance'],
    Evoker: ['Devastation', 'Preservation'],
    Mage: ['Arcane', 'Fire', 'Frost'],
    Monk: ['Brewmaster', 'Mistweaver', 'Windwalker'],
    Hunter: ['Beast Mastery', 'Marksmanship', 'Survival'],
    Paladin: ['Holy', 'Protection', 'Retribution'],
    Priest: ['Discipline', 'Holy', 'Shadow'],
    Rogue: ['Assassination', 'Outlaw', 'Subtlety'],
    Shaman: ['Elemental', 'Enhancement', 'Restoration'],
    Warlock: ['Affliction', 'Demonology', 'Destruction'],
    Warrior: ['Arms', 'Fury', 'Protection'],
  })
  const [classId, setClassId] = useState({
    'Death Knight': 6,
    Druid: 11,
    'Demon Hunter': 12,
    Evoker: 13,
    Mage: 8,
    Monk: 10,
    Hunter: 3,
    Paladin: 2,
    Priest: 5,
    Rogue: 4,
    Shaman: 7,
    Warlock: 9,
    Warrior: 1,
  })
  const [classMedia, setClassMedia] = useState()
  const [armourType, setArmourType] = useState()
  const handleClassChange = async ({ target }) => {
    const { value } = target
    setSelectedClass(value)
    const mediaResponse = await fetch('https://us.api.blizzard.com/data/wow/media/playable-class/' + classId[value] + '?namespace=static-10.0.2_46479-us&access_token=' + accessToken, {
      method: 'GET',
      header: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    })
    const { assets } = await mediaResponse.json()
    console.log(assets[0].value)
    setClassMedia(assets[0].value)
  }
  const handleSpecChange = ({ target }) => {
    console.log(target)
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <ClassSelect onChange={handleClassChange} classes={classes} />
        {selectedClass ? <ClassSelect onChange={handleSpecChange} classes={classSpecs[selectedClass]} /> : ''} {/* Will likely move this down a level into the child that handles each class*/}
        <button onClick={handleGetItem}>get item by id</button>
        <button onClick={getItemByName}>get item by name</button>
        <Test state={classMedia} />
        <Test state={itemObject} />
        {selectedClass === 'Priest' || selectedClass === 'Mage' || selectedClass === 'Warlock' ? <Cloth /> : ''}
        {selectedClass === 'Druid' || selectedClass === 'Rogue' || selectedClass === 'Deamon Hunter' ? <Leather /> : ''}
        {selectedClass === 'Hunter' || selectedClass === 'Shaman' || selectedClass === 'Evoker' ? <Mail /> : ''}
        {selectedClass === 'Death Knight' || selectedClass === 'Paladin' || selectedClass === 'Warrior' ? <Plate /> : ''}
      </header>
    </div>
  )
}

export default App
