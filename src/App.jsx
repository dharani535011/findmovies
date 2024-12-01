import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Forgetpass from './Components/Forgetpass'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/forgetpass' element={<Forgetpass/>} />
      </Routes>
    </div>
  )
}

export default App

{/* <i className="fa-solid fa-clapperboard"></i> */}
{/* <i className="fa-solid fa-video"></i> */}