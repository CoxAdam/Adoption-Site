import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import rescueGroupAPI from '../api/rescueGroupAPI';

function DoggoPage(){
  const [doggo, setDoggo] = useState()

  const params = useParams()

  const loadDoggo = async () => {
    const data = await rescueGroupAPI.fetchDoggo(params.doggo_id)
    setDoggo(data)
  }

  useEffect(() => {
    loadDoggo()
  }, [])

  if (doggo){
    console.log("DOGGO:", doggo)
  }

  return (
    <div>
      
    </div>
  )
}

export default DoggoPage