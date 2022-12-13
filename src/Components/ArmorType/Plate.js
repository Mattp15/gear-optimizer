import React, { useState } from 'react'
const Plate = () => {
  const [feet, setFeet] = useState([])
  const [feetObjects, setFeetObjects] = useState([])
  const [chest, setChest] = useState([])
  const [chestObjects, setChestObjects] = useState([])
  const [hands, setHands] = useState([])
  const [handsObjects, setHandsObjects] = useState([])
  const [head, setHead] = useState([])
  const [headObjects, setHeadObjects] = useState([])
  const [legs, setLegs] = useState([])
  const [legsObjects, setLegsObjects] = useState([])
  const [waist, setWaist] = useState([])
  const [waistObjects, setWaistObjects] = useState([])
  const [wrist, setWrist] = useState([])
  const [wristObjects, setWristObjects] = useState([])
  const [shoulders, setShoulders] = useState([])
  const [shouldersObjects, setShouldersObjects] = useState([])
  return <h1>I am plate</h1>
}
export default Plate
