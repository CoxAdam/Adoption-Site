import { Carousel, CarouselItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import rescueGroupAPI from '../api/rescueGroupAPI';
import { useEffect, useState } from 'react';

function AppCarousel(props) {
  const doggos = props.adoptees

  return (
    <Carousel interval={5000}>
      {doggos.map((doggo, index) => {
        return (
          <CarouselItem key={index}>
            <img src={doggo.included[8].attributes.large.url} className='large-image'/>
            <Carousel.Caption>
              <h1>{doggo.data[0].attributes.name}</h1>
            </Carousel.Caption>
          </CarouselItem>
        )
      })}
    </Carousel>
  )
}

export default AppCarousel