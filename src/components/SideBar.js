import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams} from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import rescueGroupAPI from '../api/rescueGroupAPI';

function SideBar() {
  const [postalCode, setPostalCode] = useState(0)
  const [species, setSpecies] = useState()
  const [animalList, setAnimalList] = useState([])
  console.log("SPECIES:", species)

  const params = useParams()
  const navigate = useNavigate()
  console.log("PARAMS:", params)

  const loadAnimalList = async () => {
    const data = await rescueGroupAPI.fetchAnimalList()
    setAnimalList(data.data)
  }

  console.log("ANIMAL LIST:", animalList)

  useEffect(() => {
    loadAnimalList()
  }, [])

  const animalNames = []
  const displayAnimals = () => {
    for (let i = 0; i < animalList.length; i++){
      animalNames.push(animalList[i].attributes.plural)
    }
    return (
      animalNames
    )
  }
  displayAnimals()

  const handleSpecies = (animal) => {
    console.log("ANIMAL:", animal)
    console.log('species changed')
    setSpecies(animal)
    navigate(`/animals/${animal}/25/${postalCode}`)
    window.location.reload(false)
  }

  const handlePostalCode = (evt) => {
    evt.preventDefault()

    const postalcode = evt.target.elements['postalcode'].value

    setPostalCode(postalcode)
    // navigate(`/animals/${species}/25/${postalcode}`)
  }


  return (
    <div className="sidebar">
      <h4 className="title">Find an Animal</h4>
      <ul className="list">
        <div onClick={() => { handleSpecies('dogs') }} className="row">Dogs</div>
        <div onClick={() => { handleSpecies('cats') }} className="row">Cats</div>
        <Dropdown className='dropdown'>
          <Dropdown.Toggle variant='secondary'>
            Other Animals
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {animalNames.map((name, index) => {
              return (<Dropdown.Item onClick={() => { handleSpecies(name.toLowerCase()) }} key={index}>{name}</Dropdown.Item>)
            })}
          </Dropdown.Menu>
        </Dropdown>
        <form onSubmit={ handlePostalCode }>
          <input className='sidebar_input' type='text' name='postalcode' placeholder='Enter Zip Code then pick Animal'></input>
          <button type='submit'>Submit</button>
        </form>
      </ul>
    </div>
  )
}

export default SideBar