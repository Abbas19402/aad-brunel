import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ImagesPath from '../constants/ImagesPaths'

const FormSubmissionSuccess: React.FC = () => {
    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
        if (seconds === 0) {
          navigate("/");
          return;
        }
        const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
        return () => clearTimeout(timer);
        
      }, [seconds, navigate]);
    return (
        <div className='w-screen min-h-screen overflow-hidden'>
            <div className="h-16 flex justify-between items-center px-5">
                <img 
                    alt={ImagesPath.brunelLogo.alt} 
                    src={ImagesPath.brunelLogo.source} 
                    className='h-7'
                />
            </div>

            <div className="w-full h-[calc(100vh-4rem)] flex flex-col justify-center items-center gap-y-3 py-10 text-center">
                <img
                    alt={ImagesPath.vectors.success.alt}
                    src={ImagesPath.vectors.success.source}
                    className='h-15 w-15'
                />        
                <img 
                    alt={ImagesPath.styledText.success.alt} 
                    src={ImagesPath.styledText.success.source}
                    className='h-7'
                />
                <p className='text-center font-medium text-[#1C1C1C] text-5xl '>Congratulations</p>
                <p className='text-gray-600 text-2xl'>Your request has been successfully submitted to us. We<br/>will validate your information and reach out to your<br/>shortly with updates</p>
            </div>

            <div className="absolute w-full bottom-0 flex justify-center items-center gap-x-1 my-2">
                <span className="text-lg font-light">Redirecting you to Homepage in </span>
                <strong className='text-lg'>{seconds} Seconds</strong>
            </div>
        </div>
    )
}

export default FormSubmissionSuccess