import React, { useState } from 'react'

const Cloth = () => {
  const [chest, setChest] = useState(["Compressed Cultist's Frock"])
  const [chestObjects, setChestObjects] = useState([])
  const [feet, setFeet] = useState(['Sandals of the Wild Sovereign'])
  const [feetObjects, setFeetObjects] = useState([])
  const [hands, setHands] = useState(["Eggtender's Safety Mitts"])
  const [handsObjects, setHandsObjects] = useState([])
  const [head, setHead] = useState(["Councilor's Terrormask"])
  const [headObjects, setHeadObjects] = useState([])
  const [legs, setLegs] = useState(["Flametender's Legwraps"])
  const [legsObjects, setLegsObjects] = useState([])
  const [shoulders, setShoulders] = useState(['Ascended Squallspires'])
  const [shouldersObjects, setShouldersObjects] = useState([])
  const [waist, setWaist] = useState(["Magatha's Spiritual Sash"])
  const [waistObjects, setWaistObjects] = useState([])
  const [wrist, setWrist] = useState(['Chilled Silken Restraints'])
  const [wristObjects, setWristObjects] = useState([])
  return <h1>I am cloth</h1>
}
export default Cloth
