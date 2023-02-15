import React from 'react'
import Carousel from 'react-elastic-carousel'
import Items from './Items'

const Slider = () => {
  return (
    <>
      <Carousel>
        {Items.map((element)=>{
          return (
            <div key={element.id}>
              <img src={element.url} alt="Slider-Img"/>
            </div>
          )
        })}
      </Carousel>
    </>
  )
}

export default Slider