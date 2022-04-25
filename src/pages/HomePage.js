import rescueGroupAPI from '../api/rescueGroupAPI';
import { useEffect, useState } from 'react';
import AppCarousel from '../components/AppCarousel';


function HomePage() {
  const [adoptees, setAdoptees] = useState(null)

  const loadAdoptees = async () => {
    const data = await rescueGroupAPI.fetchAdoptees()
    setAdoptees(data.data)
  }

  useEffect(() => {
    loadAdoptees()
  }, [])
  
  return (
    <div className='homepage'>
      
      {adoptees ? <AppCarousel adoptees={adoptees}/> : <div>Image Loading...</div>}
      
    </div>
  )
}

export default HomePage