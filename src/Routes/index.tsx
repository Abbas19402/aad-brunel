import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Landing from '../pageComponents/Landing'
import Register from "../pageComponents/Register"
import FormSubmissionSuccess from '../pageComponents/FormSubmissionSuccess'

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Landing/> }/>
        <Route path="/register" element={ <Register/> }/>
        <Route path="/success" element={ <FormSubmissionSuccess/> }/>
      </Routes>
    </Router>
  )
}

export default AppRoutes