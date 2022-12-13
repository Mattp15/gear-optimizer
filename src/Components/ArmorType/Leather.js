import React, { useState } from 'react'

const Leather = () => {
  const [chest, setChest] = useState(["Brawler's Earthen Curiass", "Valdrakken Protector's Turncoat"])
  const [chestObjects, setChestObjects] = useState([])
  const [feet, setFeet] = useState(['Galvanic Gaiters', "Ice-Climber's Cleats"])
  const [feetObjects, setFeetObjects] = useState([])
  const [hands, setHands] = useState(['Treacherous Totem Wraps'])
  const [handsObjects, setHandsObjects] = useState([])
  const [head, setHead] = useState(['Windborne Hatsuburi'])
  const [headObjects, setHeadObjects] = useState([])
  const [legs, setLegs] = useState(['Loathsome Thunderhosen'])
  const [legsObjects, setLegsObjects] = useState([])
  const [shoulders, setShoulders] = useState(['Twisted Loam Spaulders'])
  const [shouldersObjects, setShouldersObjects] = useState([])
  const [waist, setWaist] = useState(['Fused Shale Waistband'])
  const [waistObjects, setWaistObjects] = useState([])
  const [wrist, setWrist] = useState(["Loyal Flametender's Bracers"])
  const [wristObjects, setWristObjects] = useState([])
  return <h1> I am leather</h1>
}
export default Leather
