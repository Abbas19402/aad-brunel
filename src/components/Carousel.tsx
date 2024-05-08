import React, { useEffect, useState } from 'react'
import CarouselSlide from './CarouselSlide'
import { CarouselType } from "../types"

const Carousel: React.FC<CarouselType> = ({ data, autoplay }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(() => {
                setActiveSlide((prevIndex) => {
                    if (prevIndex < data.length - 1) {
                        return prevIndex + 1;
                    } else {
                        return 0;
                    }
                });
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [data.length, autoplay]);

    return (
        <div className='flex flex-col items-center lg:items-start gap-y-5 my-5'>
            {/* Slides */}
            <div className="max-w-80 h-52 overflow-y-hidden">
                <div className="flex max-h-52 items-center gap-x-5 overflow-x-visible ">
                    <CarouselSlide 
                        dataString={data[activeSlide]?.dataString}
                    />
                </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-start items-center gap-x-2">
                {data.map((_, index) => (
                    <div
                        key={index+1}
                        className={`hover:cursor-pointer w-3 h-3 transition-all duration-1000 ${activeSlide === index? "bg-green-500" : "bg-secondary_hover"} rounded-full`}
                        onClick={() => setActiveSlide(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Carousel