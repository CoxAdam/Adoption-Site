import rescueGroupAPI from '../api/rescueGroupAPI';
import { useEffect, useState } from 'react';
import AppCarousel from '../components/AppCarousel';


function HomePage() {
  const [adoptees, setAdoptees] = useState()

  const loadAdoptees = async () => {
    const data = await rescueGroupAPI.fetchAdoptees()
    setAdoptees(data.data)
  }

  useEffect(() => {
    loadAdoptees()
  }, [])
  
  return (
    <div>
      <div>This is the HomePage</div>

      {/* {adoptees != [] ? <img src={adoptees[0].attributes.pictureThumbnailUrl}/> : <div>Image Loading...</div>} */}
      
      {/* {adoptees ? <AppCarousel adoptees={adoptees}/> : <div>Image Loading...</div>} */}
      
      {/* {console.log('ADOPTEES:', adoptees)}
      {console.log('DOGGO:', doggo)}   */}
    </div>
  )
}

export default HomePage