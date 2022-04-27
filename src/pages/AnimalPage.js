import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import rescueGroupAPI from '../api/rescueGroupAPI';


function AnimalPage() {
  const [animals, setAnimals] = useState()

  const params = useParams()

  const loadAnimals = async () => {
    const data = await rescueGroupAPI.fetchAnimals(params.species, params.limit, params.postal_code)
    setAnimals(data.data)
  }

  useEffect(() => {
    loadAnimals()
  }, [])

  const dog_list = []
  if (animals) {
    let temp_list =[]
    for (let i = 0; i < animals.length; i++){
      temp_list.push(animals[i])
      if ((i + 1) % 3 === 0 || i === animals.length - 1){
        dog_list.push(temp_list)
        temp_list = []
      }
    }
  }

  return (
    <div>
      <br/>
      <h1>Available Animals</h1>
      <h4>{params.postal_code != '0' ? `Postal Code: ${params.postal_code}` : ""}</h4>
      {dog_list !== [] ? dog_list.map((doggo, index) => {
        return (
          <div className="flex" key={index}>
            <div className="box"><img src={doggo[0].attributes.pictureThumbnailUrl} placeholder='No Image'/>
            <h3><Link className='animalLink' to={`/doggo/${doggo[0].id}`}>{doggo[0].attributes.name.includes(' ') ? doggo[0].attributes.name.substring(0, doggo[0].attributes.name.indexOf(' ')) : doggo[0].attributes.name}</Link></h3>
            <div>{doggo[0].attributes.ageGroup}</div>
            <div>{doggo[0].attributes.breedPrimary}{doggo[0].attributes.breedSecondary ? ` / ${doggo[0].attributes.breedSecondary}` : ""}</div>
            <div></div>
            </div>
            {doggo[1] ? <div className="box"><img src={doggo[1].attributes.pictureThumbnailUrl} placeholder='No Image'/>
            <h3><Link className='animalLink' to={`/doggo/${doggo[1].id}`}>{doggo[1].attributes.name.includes(' ') ? doggo[1].attributes.name.substring(0, doggo[1].attributes.name.indexOf(' ')) : doggo[1].attributes.name}</Link></h3>
            <div>{doggo[1].attributes.ageGroup}</div>
            <div>{doggo[1].attributes.breedPrimary}{doggo[1].attributes.breedSecondary ? ` / ${doggo[1].attributes.breedSecondary}` : ""}</div>
            <div></div>
            </div> : ""}
            {doggo[2] ? <div className="box"><img src={doggo[2].attributes.pictureThumbnailUrl} placeholder='No Image'/>
            <h3><Link className='animalLink' to={`/doggo/${doggo[2].id}`}>{doggo[2].attributes.name.includes(' ') ? doggo[2].attributes.name.substring(0, doggo[2].attributes.name.indexOf(' ')) : doggo[2].attributes.name}</Link></h3>
            <div>{doggo[2].attributes.ageGroup}</div>
            <div>{doggo[2].attributes.breedPrimary}{doggo[2].attributes.breedSecondary ? ` / ${doggo[2].attributes.breedSecondary}` : ""}</div>
            <div></div>
            </div> : ""}
          </div>
        )
      }) : <h5>Page Loading...</h5>}
    </div>

  )
}

export default AnimalPage