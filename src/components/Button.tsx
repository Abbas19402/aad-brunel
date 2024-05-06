import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

enum Theme {
    PRIMARY,SECONDARY
}

interface StyledButton {
    isLink?: boolean,
    linkPath?: string,
    title: string,
    primary?: boolean,
    secondary?: boolean,
    theme?: Theme
    customStyle?: string
}

const Button: React.FC<StyledButton> = ({ 
    isLink = false, 
    linkPath = "", 
    title, 
    primary = false, 
    secondary = false, 
    customStyle = ""
}) => {
    const [ error, setError ] = useState({
        status: false,
        message: ""
    })
    useEffect(() => {
        if(primary === secondary) {
            setError({
                status: true,
                message: "Either Primary theme or Secondary theme can be set to true!!"
            })
        } else if(primary !== secondary) {
            setError({
                status: false,
                message: ""
            })
        }
    }, [primary,secondary])
  return (
    isLink ? <Link to={linkPath}>
        <div className={`min-w-36 h-12 hover:cursor-pointer ${ primary ? "border-transparent" : "border-gray-300" } border rounded-full flex justify-center items-center whitespace-nowrap text-sm font-medium tracking-wide transition-all duration-300 ${
            primary ? "bg-primary hover:bg-primary_hover text-white" :
            secondary ? "bg-secondary hover:bg-secondary_hover" : customStyle
        }`}>{error.status ? <span className='text-red-500'>{error.message}</span> : title}</div>
    </Link> :
    <div className={`min-w-36 h-12 hover:cursor-pointer ${ primary ? "border-transparent" : "border-gray-300" } border rounded-full flex justify-center items-center whitespace-nowrap text-sm font-medium tracking-wide transition-all duration-300 ${
        primary ? "bg-primary hover:bg-primary_hover text-white" :
        secondary ? "bg-secondary hover:bg-secondary_hover" : customStyle
    }`}>{error.status ? <span className='text-red-500'>{error.message}</span> : title}</div>
  )
}

export default Button