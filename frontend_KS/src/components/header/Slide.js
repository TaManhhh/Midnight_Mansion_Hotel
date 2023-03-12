import React, { useState } from 'react'
import SliderContent from './SliderContent'
import imageSlider from './imageSlider'
import Arrow from './Arrow'
import "./slider.css"
const len=imageSlider.length -1;
function Slide(props) {
    const [activeIndex,setActiveIndex]=useState(0);
  return (
    <div className='slider-container'>
        <SliderContent activeIndex={activeIndex} imageSlider={imageSlider}/>
        <Arrow prevSlide={()=>setActiveIndex(activeIndex <1?len :activeIndex-1)}
                nextSlide={()=>setActiveIndex(activeIndex ===len?0 :activeIndex+1)}
        />
    </div>
  )
}

export default Slide
