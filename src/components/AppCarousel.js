import { Carousel, CarouselItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import rescueGroupAPI from '../api/rescueGroupAPI';
import { useEffect, useState } from 'react';

function AppCarousel(props) {
  const [doggos, setDoggos] = useState()
  const [picList, setPicList] = useState(doggos ? true : false)

  const loadDoggos = async () => {
    const pupper_list = []
    if (props.adoptees !== []){
      for (let i = 0; i < 5; i++){
        const num = Math.floor(Math.random() * props.adoptees.length)
        const pupper_data = await rescueGroupAPI.fetchDoggo(props.adoptees[num].id)
        pupper_list.push(pupper_data)
      }
    }
    setDoggos(pupper_list)
  }

  useEffect(() => {
    if (props.adoptees){
      loadDoggos()
    }
  }, [])

  if(doggos){
    const pic_list = []
    for (let i = 0; i < doggos.length; i++){
      if (doggos[i].included){
        for (let x = 0; x < doggos[i].included.length; x++){
          if (doggos[i].included[x].type){
            if (doggos[i].included[x].type === "pictures"){
              pic_list.push(doggos[i].included[x].attributes.original.url)
              break
            }
          }
        }
      }
    }
    setPicList(pic_list)
  }
  console.log(doggos)


  return(
    <Carousel interval={5000} variant='dark'>
      <CarouselItem>
        {/* {
          picList ? picList.map((pic, index) => {
            <img src={pic} key={index}/>
          }) : <div>Image Loading...</div>
        } */}
      </CarouselItem>
    </Carousel>

  )
}

export default AppCarousel