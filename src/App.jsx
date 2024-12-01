import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App

{/* <i className="fa-solid fa-clapperboard"></i> */}
{/* <i className="fa-solid fa-video"></i> */}