import React from 'react'
import RegisterLayout from '../layouts/RegisterLayout'
import ImagesPath from '../constants/ImagesPaths'
import Forms from '../components/Forms'

const Register: React.FC = () => {
  return (
    <RegisterLayout>
      <div className='w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center'>
        <div className="w-full flex flex-col justify-center items-center gap-y-2 py-10">
          <img 
            alt={ImagesPath.styledText.registration.alt} 
            src={ImagesPath.styledText.registration.source}
            className='h-7'
          />
          <p className='text-center font-medium text-[#1C1C1C] text-5xl '>Start your success<br/>journey here!</p>
        </div>
        <div className="w-full lg:w-[50vw] h-fit lg:p-10">
          <Forms.Register />
        </div>
      </div>
    </RegisterLayout>
  )
}

export default Register