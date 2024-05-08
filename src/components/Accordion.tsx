import React, { useState } from 'react'
import { AccordionProps } from "../types"

const Accordion: React.FC<AccordionProps> = ({
    question,
    answer
}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="w-full rounded-lg flex flex-col items-start gap-y-2 transition-all duration-300">
            {/* question */}
            <div className="w-full flex flex-row justify-between items-center hover:cursor-pointer" onClick={()=> {
                if(!isActive) setIsActive(true)
                else if(isActive) setIsActive(false)
            }}>
                <span className='text-md text-black'>{question}</span>
                <div className="p-2 text-xl">{!isActive ? "+" : "-"}</div>
            </div>

            {/* answer */}
            <div className={`w-full transition-all duration-300 ease-in-out overflow-hidden text-gray-700 text-xs ${ !isActive ? 'h-0' : 'h-20' } mb-2`}>
                {answer}
            </div>
        </div>
    )
}

export default Accordion