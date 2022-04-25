import { useParams } from 'react-router-dom'

function DoggoPage(){

  const params = useParams()

  return (
    <div>
      This is the DoggoPage
    </div>
  )
}

export default DoggoPage