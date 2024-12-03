import React, { useContext } from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Forgetpass from './Components/Forgetpass'
import Moviesdetials from './Pages/Moviesdetials'
import Favmovies from './Pages/Favmovies'
import Loader from './Components/Loader'
import { Othercontext } from './Components/Otherprovider'
const App = () => {

  return (
    <div>
      <Loader/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/forgetpass' element={<Forgetpass/>} />
        <Route path='/moviedetials/:id' element={<Moviesdetials/>} />
        <Route path='/favmovies' element={<Favmovies/>} />
      </Routes>
    </div>
  )
}

export default App

{/* <i className="fa-solid fa-clapperboard"></i> */}
{/* <i className="fa-solid fa-video"></i> */}