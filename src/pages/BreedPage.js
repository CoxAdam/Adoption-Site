import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import theDogAPI from '../api/theDogAPI';


function BreedPage(){
  const [breedInfo, setBreedInfo] = useState()

  const params = useParams()

  const loadBreedInfo = async () => {
    const data = await theDogAPI.fetchDogFacts()
    if(data){
      console.log("iamhere")
      for (let i = 0; i< data.length; i ++){
        if (data[i].name == params.breed_name){
          setBreedInfo(data[i])
          console.log(breedInfo, 'iamalsohere')
        }
      }
    }
  }

  if (breedInfo){
    console.log("BREED INFO:", breedInfo)
  }
  

  useEffect(() => {
    loadBreedInfo()
  }, [])

  return (
    <div>
      <br/>
      <div className="doggoinfo">
        <div className="doggoheader">
          {breedInfo ? <div><h1>{ breedInfo.name }</h1><img src={ breedInfo.image.url } className='doggopic'/>
          <br/>
          <br/>
          <h4>Breed Group: {breedInfo.breed_group}</h4>
          <h4>Bred For: {breedInfo.bred_for}</h4>
          <h4>Typical Life Span: {breedInfo.life_span}</h4>
          <h4>Origin: {breedInfo.origin}</h4>
          <h4>Temperament:</h4><h5>{breedInfo.temperament}</h5>
          <br/>
          <h5>Weight: {breedInfo.weight.imperial}lbs</h5>
          <h5>Height: {breedInfo.height.imperial}in.</h5>
          <br/>
          </div> : <div>Image Loading...</div>} 
        </div>
      </div>
    </div>
  )
}

export default BreedPage