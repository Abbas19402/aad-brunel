import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Landing from '../pageComponents/Landing'
import Register from "../pageComponents/Register"

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Landing/> }/>
        <Route path="/register" element={ <Register/> }/>
      </Routes>
    </Router>
  )
}

export default AppRoutes