import { useEffect, useState } from 'react';
import rescueGroupAPI from '../api/rescueGroupAPI';

function Test(){
  const [dogData, setDogData] = useState()

  const loadDogData = async () => {
    const data = await rescueGroupAPI.fetchTest()
    setDogData(data)
  }

  useEffect(() => {
    loadDogData()
  }, [])

  console.log(dogData)

  return (
    <div>TESTING</div>
  )
}

export default Test