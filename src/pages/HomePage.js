import rescueGroupAPI from '../api/rescueGroupAPI';
import theDogAPI from '../api/theDogAPI';
import { useEffect, useState } from 'react';
import AppCarousel from '../components/AppCarousel';


function HomePage() {
  const [adoptees, setAdoptees] = useState([])
  const [doggo, setDoggo] = useState([])
  const [dogFacts, setDogFacts] = useState([])

  const loadAdoptees = async () => {
    const pupper_list = []
    const data = await rescueGroupAPI.fetchAdoptees()
    setAdoptees(data.data)
    if (data){
      for (let i = 0; i < 5; i++){
        const pupper_data = await rescueGroupAPI.fetchDoggo(data.data[i].id)
        pupper_list.push(pupper_data)
      }
    }
    setDoggo(pupper_list)
  }

  // const loadAnimals = async () => {
  //   const data = await theDogAPI.fetchDogFacts()
  //   setDogFacts(data.data)
  // }

  useEffect(() => {
    loadAdoptees()
  }, [])

  // useEffect(() => {
  //   loadAnimals()
  // }, [])

  
  return (
    <div>
      <div>This is the HomePage</div>

      {/* {adoptees != [] ? <img src={adoptees[0].attributes.pictureThumbnailUrl}/> : <div>Image Loading...</div>} */}
      
      {doggo != [] ? <AppCarousel adoptees={doggo}/> : <div>Image Loading...</div>}
      
      {console.log('ADOPTEES:', adoptees)}
      {console.log('DOGGO:', doggo)}  
    </div>
  )
}

export default HomePage