import React from 'react'
import { carouselSlideType } from "../types"
 
const CarouselSlide: React.FC<carouselSlideType> = ({ dataString }) => {
  return (
    <div className={`min-w-80 max-h-52 py-5 flex justify-center items-center `}>
        <span className="text-3xl font-medium">{dataString}</span>
    </div>
  )
}

export default CarouselSlide