import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Othercontext } from './Otherprovider'
import { Link } from 'react-router-dom'

const Nav = () => {
    const {opensigns,searchos}=useContext(Othercontext)
    const [opensign,setopensign]=opensigns
    const [searcho,setsearcho]=searchos
    const [sidebar,setsidebar]=useState(false)



  return (
    <div>
       <div className='movienav'>
        <div className='burgerbar' onClick={()=>{
            setopensign(false)
            setsearcho(false)
            setsidebar(true)}}>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <div className='moviehead'>
            <h1><i className="fa-solid fa-clapperboard" style={{zIndex:"999"}}></i><span>Find Movies</span></h1>
            <div>
                <p><Link to={"/"} onClick={()=>{
                    setsidebar(false)
                    setopensign(false)
                    setsearcho(false)}} style={{all:"unset"}} >Home</Link></p>
                <p><Link to={"/favmovies"} style={{all:"unset"}} onClick={()=>setsearcho(false)}>Favorite Movies</Link></p>
            </div>
        </div>
        <div className='moviesearch'>
            <span>
            <i className="fa-solid fa-magnifying-glass" onClick={()=>{
                setsidebar(false)
                setopensign(false)
                setsearcho(!searcho)}}></i>
            </span>
            <p onClick={()=>{
                setsearcho(false)
                setopensign("signin")}}>SignIn/SignUp</p>
        </div>
       </div>
       <div className={`sidebar ${sidebar&&"open"}`} >
            <div className='crossbar' onClick={()=>setsidebar(false)} >
                <p></p>
                <p></p>
            </div>
            <div className='sideoptions'>
            <button onClick={()=>{
                setsearcho(false)
                setsidebar(false)
                setopensign("signin")}}>SignIn/SignUp</button>
            <hr />
            <p><Link to={"/"} style={{all:"unset"}} onClick={()=>{
                setopensign(false)
                setsidebar(false)
                setsearcho(false)}}>Home</Link></p>
            <p><Link to={"/favmovies"} onClick={()=>{
                setopensign(false)
                setsearcho(false)}} style={{all:"unset"}}>Favorite Movies</Link></p>
            </div>
       </div>
    </div>
  )
}

export default Nav