import { Carousel, CarouselItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import rescueGroupAPI from '../api/rescueGroupAPI';
import { useEffect, useState } from 'react';

function AppCarousel(props) {
  const [doggos, setDoggos] = useState(null)

  const loadDoggos = async () => {
    const pupper_list = []
    if (props.adoptees !== []){
      console.log("PROPS:", props.adoptees)
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

  const pic_list = []

  if(doggos){
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
  }
  console.log("PIC LIST:", pic_list)
  console.log(doggos)


  return(
    <div className='carouselbox'>
      <Carousel interval={5000} variant='light'>
        {
          pic_list.map((pic, index) => {
            const dog_name = doggos[index].data[0].attributes.name
            return (
              <CarouselItem key={index}>
                <img src={pic} className='large-image'/>
                <Carousel.Caption>
                  <Link to={`/doggo/${doggos[index].data[0].id}`}>
                    <h2 className='link'>{dog_name.includes(' ') ? dog_name.substring(0, dog_name.indexOf(' ')) : dog_name}</h2>
                  </Link>
                </Carousel.Caption>
              </CarouselItem>
            )
          })
        }
      </Carousel>
    </div>
    
  )
}

export default AppCarousel