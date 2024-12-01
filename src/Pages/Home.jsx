import React from 'react'
import Nav from '../Components/Nav'
import Sign from '../Components/Sign'
import Background from '../Components/Background'
import Search from '../Components/Search'

const Home = () => {
  return (
    <div>
        <Nav/>
        <Search/>
        <Background/>
        <Sign/>
    </div>
  )
}

export default Home