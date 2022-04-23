import rescueGroupAPI from '../api/rescueGroupAPI';
import theDogAPI from '../api/theDogAPI';
import { useEffect, useState } from 'react';


function HomePage() {
  const [dogFacts, setDogFacts] = useState([])
  const [dogBreeds, setDogBreeds] = useState([])

  const loadAnimals = async () => {
    const data = await theDogAPI.fetchDogFacts()
    setDogFacts(data.data)
  }

  const loadBreeds = async () => {
    const data = await rescueGroupAPI.fetchBreeds()
    setDogBreeds(data)
  }

  useEffect(() => {
    loadBreeds()
  }, [])

  useEffect(() => {
    loadAnimals()
  }, [])

  
  return (
    <div>
      <div>This is the HomePage</div>
      {
        dogFacts[0] ? <img src={dogFacts[0].url} className='med-image'/> : <div>Image Loading...</div>
      }
      {console.log(dogBreeds)}
      {console.log('dogFacts', dogFacts)}
    </div>
  )
}

export default HomePage


