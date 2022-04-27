import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import rescueGroupAPI from '../api/rescueGroupAPI';
import { Carousel, CarouselItem } from 'react-bootstrap';

function DoggoPage(){
  const [doggo, setDoggo] = useState()
  const [orgURL, setOrgURL] = useState()

  const params = useParams()

  const loadDoggo = async () => {
    const data = await rescueGroupAPI.fetchDoggo(params.doggo_id)
    setDoggo(data)
  }

  useEffect(() => {
    loadDoggo()
  }, [])

  
  const loadOrg = async () => {
    const data = await rescueGroupAPI.fetchOrg(doggo.data[0].relationships.orgs.data[0].id)
    console.log("DATA:", data)
    setOrgURL(data.data[0].attributes.url)
  }

  useEffect(() => {
    if (doggo) {loadOrg()}
  })

  const loadInfo = () => {
    if (doggo){
      let doggo_name = doggo.data[0].attributes.name
      let doggo_data = doggo.data[0].attributes
      if (doggo_name.includes(' ')){
        doggo_name = doggo_name.substring(0, doggo_name.indexOf(' '))
      }
      console.log("DOGGO:", doggo)

      return (
      <div className='doggoinfo'>
        <h1>{doggo_name}</h1>
        <div>{doggo ? doggo_data.breedPrimary : ""}{doggo_data.breedSecondary ? ` / ${doggo_data.breedSecondary}` : <div></div>}</div>
        <div className='linebreak'></div>
        {doggo_data.ageGroup ? `${doggo_data.ageGroup}` : ""} {doggo_data.ageString ? `: ${doggo_data.ageString}` : ""}{doggo_data.sex ? ` / ${doggo_data.sex}` : ""} {doggo_data.sizeGroup ? ` / ${doggo_data.sizeGroup}` : ""} {doggo_data.sizePotential ? ` / ${doggo_data.sizePotential}: ${doggo_data.sizeUOM}` : ""}
        <div className='linebreak'></div>
        <h3>About {doggo_name}</h3>        
        {doggo_data.activityLevel ? <div>
        <h5>Activity Level</h5>
        <div>{doggo_data.activityLevel}</div><br/></div> : ""}
        {doggo_data.groomingNeeds ? <div> 
        <h5>Grooming Needs</h5>
        <div>{doggo_data.groomingNeeds}</div><br/></div> : ""}
        <h5>Is Ok Around:</h5>
        <div>{doggo_data.adultSexesOk ? doggo_data.adultSexesOk == "All" ? "Men and Women" : doggo_data.adultSexesOk : ""}{doggo_data.isKidsOk ? '|Children' : ""}{doggo_data.isDogsOk ?'|Dogs' : ""}{doggo_data.isCatsOk ?  '|Cats' : ""}</div>
        <br/>
        <h5>Is House Trained:</h5>
        <div>{doggo_data.isHousetrained ? "Yes" : "No"}</div>
        <br/>
        <h5>Shelter / Organization Url</h5>
        <a href={orgURL}>{orgURL}</a>
        <div className='linebreak'></div>
        <br/>
        <h3>Description</h3>
        <div>{doggo_data.isSpecialNeeds ? "Special Needs" : ""}</div>
        <br/>
        <div>{doggo_data.descriptionText}</div>
        <br/>
      </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }

  return (
    <div>
      <div className='carouselbox'>
        <Carousel variant='light'>
          {
            doggo ? doggo.included.map((pic, index) => {
              if (pic.type === "pictures"){
                return (
                  <CarouselItem key={index}>
                    <img src={pic.attributes.original.url} className='large-image'/>
                  </CarouselItem>
                )
              }
            }) : <div>Image Loading...</div>
          }
        </Carousel>
      </div>
      <br/>
      <br/>
      {loadInfo()}
      <br/>
      <br/>
    </div>
  )
}

export default DoggoPage