import React from 'react'
import { Link } from 'react-router-dom'
import { StyledButton } from "../types"

const Button: React.FC<StyledButton> = ({ 
    isLink = false,     
    linkPath = "", 
    title,
    theme = "primary"
}) => {
  return (
    isLink ? <Link to={linkPath}>
        <div className={`my-5 min-w-36 h-12 hover:cursor-pointer ${ theme === "primary" ? "border-transparent" : "border-gray-300" } border rounded-full flex justify-center items-center whitespace-nowrap text-sm font-medium tracking-wide transition-all duration-300 ${
            theme === "primary" ? "bg-primary hover:bg-primary_hover text-white" : "bg-secondary hover:bg-secondary_hover"
        }`}>{title}</div>
    </Link> :
    <div className={`my-5 min-w-36 h-12 hover:cursor-pointer ${ theme === "primary" ? "border-transparent" : "border-gray-300" } border rounded-full flex justify-center items-center whitespace-nowrap text-sm font-medium tracking-wide transition-all duration-300 ${
        theme === "primary" ? "bg-primary hover:bg-primary_hover text-white" : "bg-secondary hover:bg-secondary_hover"
    }`}>{title}</div>
  )
}

export default Button