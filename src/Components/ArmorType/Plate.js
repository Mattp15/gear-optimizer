import React, { useState } from 'react'
const Plate = () => {
  const [chest, setChest] = useState(["Dathea's Cyclonic Cage"])
  const [chestObjects, setChestObjects] = useState([])
  const [feet, setFeet] = useState(["Kurog's Thunderhooves"])
  const [feetObjects, setFeetObjects] = useState([])
  const [hands, setHands] = useState(['Diamond-Etched Gauntlets'])
  const [handsObjects, setHandsObjects] = useState([])
  const [head, setHead] = useState(['Gaze of teh Living Quarry', 'Greathelm of Horned Fury'])
  const [headObjects, setHeadObjects] = useState([])
  const [legs, setLegs] = useState(["Opalfang's Earthbound Legguards"])
  const [legsObjects, setLegsObjects] = useState([])
  const [shoulders, setShoulders] = useState(['Scaldrons of Molten Might'])
  const [shouldersObjects, setShouldersObjects] = useState([])
  const [waist, setWaist] = useState(["Matriarch's Opulent Girdle", "Primaalist Warden's Bracers"])
  const [waistObjects, setWaistObjects] = useState([])
  const [wrist, setWrist] = useState(['Shackles of Titanic Failure'])
  const [wristObjects, setWristObjects] = useState([])
  return <h1>I am plate</h1>
}
export default Plate
