import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className='p-10 w-screen'>
      <div className="w-full h-36 bg-[#F5F5F5] rounded-[3rem] flex flex-col lg:flex-row justify-center lg:justify-between  lg:items-center gap-y-5 px-[60px] text-sm">
        <span>&copy; Talup 2023. All rights reserved</span>
        <div className="flex flex-col lg:flex-row items-start lg:items-center font-light underline gap-x-[40px] gap-y-3">
          <span className='hover:cursor-pointer hover:text-sky-700'>Terms & Condition</span>
          <span className='hover:cursor-pointer hover:text-sky-700'>Privacy Policy</span>
        </div>
      </div>
    </div>
  )
}

export default Footer