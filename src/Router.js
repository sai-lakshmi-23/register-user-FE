import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from './pages/Form'
import Registration from './pages/Registration'

const Router = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/register' element={<Registration/>}/>

       </Routes>
    </div>
  )
}

export default Router