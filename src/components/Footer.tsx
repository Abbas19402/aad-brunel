import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className='p-10 w-screen'>
      <div className="w-full h-36 bg-[#F5F5F5] rounded-[3rem] flex justify-between items-center px-[60px] text-sm">
        <span>&copy; Talup 2023. All rights reserved</span>
        <div className="flex items-center font-light underline gap-x-[40px]">
          <span className='hover:cursor-pointer hover:text-sky-700'>Terms & Condition</span>
          <span className='hover:cursor-pointer hover:text-sky-700'>Privacy Policy</span>
        </div>
      </div>
    </div>
  )
}

export default Footer