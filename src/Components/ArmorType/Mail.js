import React, { useState } from 'react'

const Mail = () => {
  const [chest, setChest] = useState(["Embar's Ashen Hauberk"])
  const [chestObjects, setChestObjects] = useState([])
  const [feet, setFeet] = useState(['Daring Chasm-Leapers'])
  const [feetObjects, setFeetObjects] = useState([])
  const [hands, setHands] = useState(['Calamitous Shockguards'])
  const [handsObjects, setHandsObjects] = useState([])
  const [head, setHead] = useState(["Eranog's Adorned Sallet"])
  const [headObjects, setHeadObjects] = useState([])
  const [legs, setLegs] = useState(['Tassets of the Tarasek Legion'])
  const [legsObjects, setLegsObjects] = useState([])
  const [shoulders, setShoulders] = useState(['Faultline Mantle', 'Frozen Claw Mantle'])
  const [shouldersObjects, setShouldersObjects] = useState([])
  const [waist, setWaist] = useState(["Lavamancer's Ceremonial Waistguard", 'Unnatural Dripstone Cinch'])
  const [waistObjects, setWaistObjects] = useState([])
  const [wrist, setWrist] = useState(['Surging-Song Conductors'])
  const [wristObjects, setWristObjects] = useState([])
  return <h1>I am Mail</h1>
}
export default Mail
