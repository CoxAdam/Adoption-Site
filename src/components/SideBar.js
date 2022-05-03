import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams} from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import rescueGroupAPI from '../api/rescueGroupAPI';
import theDogAPI from '../api/theDogAPI';

function SideBar() {
  const [postalCode, setPostalCode] = useState(0)
  const [species, setSpecies] = useState()
  const [animalList, setAnimalList] = useState([])
  const [breedInfo, setBreedInfo] = useState()

  const params = useParams()
  const navigate = useNavigate()

  const loadAnimalList = async () => {
    const data = await rescueGroupAPI.fetchAnimalList()
    setAnimalList(data.data)
  }

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

  const getBreedInfo = async () => {
    const temp_list = []
    const data = await theDogAPI.fetchDogFacts()
    if (data) {
      for (let i = 0; i < data.length; i++){
        temp_list.push(data[i].name)
      }
    }
    setBreedInfo(temp_list)
  }
  useEffect(() => {
    getBreedInfo()
  }, [species])

  const handleBreed = (breed_name) => {
    navigate(`/breed/${breed_name}`)
    window.location.reload(false)
  }

  const handleSpecies = (animal) => {
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
        <br/>
        <Dropdown className='dropdown'>
          <Dropdown.Toggle variant='secondary'>
            Breed Info
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {breedInfo ? breedInfo.map((name, index) => {
              return (
                <Dropdown.Item onClick={() => {handleBreed(name)}} key={ index }>{name}</Dropdown.Item>
              )
            }) : ""}
          </Dropdown.Menu>
        </Dropdown>
      </ul>
    </div>
  )
}

export default SideBar