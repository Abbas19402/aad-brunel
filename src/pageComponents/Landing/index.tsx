import React from 'react'
import Accordion from '../../components/Accordion'
import RootLayout from '../../layouts/RootLayout'

import ImagesPath from '../../constants/ImagesPaths'
import FAQs from '../../constants/faq'

import BannerCarousel from './BannerCorousel'

const Landing: React.FC = () => {
  return (
    <RootLayout>
      {/* Hero-Success */}
      <div className="w-full flex flex-col justify-center items-center gap-y-2 py-10">
        <img 
          alt={ImagesPath.styledText.success.alt} 
          src={ImagesPath.styledText.success.source}
          className='h-7'
        />
        <p className='text-center font-medium text-[#1C1C1C] text-5xl '>Every success journey<br/>We've encountered.</p>
      </div>

      {/* Hero Banner-Corousel */}
      <BannerCarousel />

      {/* FAQ */}
      <div className="relative h-full w-full p-10">
        <div className="w-full h-full flex flex-col lg:flex-row justify-between bg-[#E8EEE7] lg:min-h-[30rem] rounded-[3rem] py-7 px-10">
          {/* Vector section */}
          <div className="flex flex-col justify-start w-full lg:w-[50%]">
            <div className="relative flex flex-col items-center lg:items-start gap-[2px] lg:top-[40px] lg:left-[55px] my-10">
              <img 
                alt={ImagesPath.styledText.mind.alt} 
                src={ImagesPath.styledText.mind.source}   
                className='h-6'
              />
              <span className="text-4xl font-medium">Ask Questions</span>
            </div>
            <img 
              alt={ImagesPath.vectors.faqUnion.alt} 
              src={ImagesPath.vectors.faqUnion.source}
              className='absolute h-72 bottom-10 left-10'
            />
          </div>

          {/* Accordions */}
          <div className="z-50 lg:z-0 flex flex-col min-h-full justify-center items-center w-full lg:w-[50%] lg:px-10 gap-y-2">
            {FAQs.map((item,index) => (
              <div className='w-full'>
                <Accordion
                  key={`${item.answer.split(" ")[0]}${index+item.answer.length}`}
                  question={item.question}
                  answer={item.answer}
                />
                {index !== FAQs.length-1? <div className='bg-neutral-300 h-0.5 w-full rounded-full'/> : <div></div> }
              </div>
            ))}
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export default Landing