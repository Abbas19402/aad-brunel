import React from 'react'
import ImagesPath from '../constants/ImagesPaths'
import { Link } from 'react-router-dom'
import { LayoutProp } from "../types"

const RegisterLayout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <div className='w-screen min-h-screen overflow-hidden'>
      <div className="h-16 flex justify-between items-center px-5">
        <img alt={ImagesPath.brunelLogo.alt} src={ImagesPath.brunelLogo.source} className='h-4'/>
        <Link to={"/"}>
        <div className="w-10 h-10 rounded-full border border-gray-300 flex justify-center items-center text-xl">
          &#x2715;
        </div>
        </Link>
      </div>
      {children}
    </div>
  )
}

export default RegisterLayout