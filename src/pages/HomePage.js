import rescueGroupAPI from '../api/rescueGroupAPI';
import { useEffect, useState } from 'react';
import AppCarousel from '../components/AppCarousel';
import arrow from '../up-arrow.png';


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
      <br/>
      <h3>Available for Adoption!<img className='arrow' src={arrow}/></h3>
      <br/>
      <br/>
      <h1>Welcome to Adopt Don't Shop!</h1>
      
    </div>
  )
}

export default HomePage