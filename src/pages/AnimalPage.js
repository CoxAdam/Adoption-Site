import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  // console.log("ANIMALS:", animals)

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

  // console.log("DOG LIST:", dog_list)

  return (
    <div>
      AnimalPage
      {dog_list !== [] ? dog_list.map((doggo, index) => {
        return (
          <div className="flex" key={index}>
            <div className="box"><img src={doggo[0].attributes.pictureThumbnailUrl}/></div>
            {doggo[1] ? <div className="box"><img src={doggo[1].attributes.pictureThumbnailUrl}/></div> : ""}
            {doggo [2] ? <div className="box"><img src={doggo[2].attributes.pictureThumbnailUrl}/></div> : ""}
          </div>
        )
      }) : <h5>Page Loading...</h5>}
      {/* {new_lista.map((array, index) => {
        return (
          <div className="flex" key={index}>
            <div className="box">{array[0]}</div>
            {array[1] ? <div className="box">{array[1]}</div> : ""}
            {array[2] ? <div className="box">{array[2]}</div> : ""}
          </div>
        )
      })} */}
    </div>

  )
}

export default AnimalPage