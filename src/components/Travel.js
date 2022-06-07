import React from 'react'
import pin from '../img/pin.png'



function Travel(props) {  
  const countryToUpperCase = props.travel.location
  .toUpperCase()
  .split('')
  .join(' ');

  return (
    <>
      <div className='travel'>      
          <img src={props.travel.imageUrl} alt={props.travel.title} className='travel__img' />
          <div className='travel__container'>
              <div className='travel__cords'>
                <img src={pin} />
                <span>{countryToUpperCase}</span>
                <a href={props.travel.googleMapsUrl} >View on google maps</a>
              </div>
              <h1 className='travel__lacation'>{props.travel.title}</h1>
              <h4 className='travel__date'>{props.travel.startDate}- {props.travel.endDate}</h4>
              <p className='travel_description'>{props.travel.description}</p>
          </div>      
      </div>
    </>    
  )
}

export default Travel