import React from 'react'
import ImagesPath from '../constants/ImagesPaths'
import Button from './Button'

const Header: React.FC = () => {
  return (
    <div className="w-full h-20 p-2">
      <div className="w-full h-full border rounded-full overflow-hidden p-2 flex flex-row justify-between items-center">
        {/* Logo */}
        <div className="relative px-2">
          <img alt={ImagesPath.brunelLogo.alt} src={ImagesPath.brunelLogo.source} className='h-4'/>
        </div>
        {/* Nav links */}
        <div className="flex flex-row items-center gap-x-2">
          <Button
            title="Get Projects"
            theme='secondary'
            isLink={true}
            linkPath="/register"
          />
          <Button
            title="Onboard Talent"
          />
        </div>
      </div>
    </div>
  )
}

export default Header