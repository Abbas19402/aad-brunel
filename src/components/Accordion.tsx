import React, { useState } from 'react'

interface AccordionProps {
    question: string,
    answer: string
}

const Accordion: React.FC<AccordionProps> = ({
    question,
    answer
}) => {
    const [isActive, setIsActive] = useState(false);
    const closeAccordion = () => {
        if(isActive) {
            setIsActive(false);
        } 
    }

    const openAccordion = () => {        
        setIsActive(true)
    }

  return (
    <div className="w-full rounded-lg flex flex-col items-start gap-y-2 transition-all duration-300">
        {/* question */}
        <div className="w-full flex flex-row justify-between items-center hover:cursor-pointer" onClick={()=> {
            if(!isActive) openAccordion()
            else closeAccordion()
        }}>
            <span className='text-md text-black'>{question}</span>
            {!isActive ? 
                <div className="p-2 text-xl">+</div> :
                <div className="p-2 text-xl">-</div>
            }
        </div>

        {/* answer */}
        <div className={`w-full transition-all duration-300 ease-in-out overflow-hidden text-gray-700 text-xs ${ !isActive ? 'h-0' : 'h-fit' } mb-2`}>
            {answer}
        </div>
    </div>
  )
}

export default Accordion