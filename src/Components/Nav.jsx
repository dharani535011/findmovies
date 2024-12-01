import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Othercontext } from './Otherprovider'

const Nav = () => {
    const {opensigns}=useContext(Othercontext)
    const [opensign,setopensign]=opensigns
    const [sidebar,setsidebar]=useState(false)
    const fetchdata=async()=>{
        try {
            const res = await axios.get("http://www.omdbapi.com/", {
                params: {
                    s: "scream", 
                    apikey: "84a91855",
                },
            })
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
         fetchdata()
    },[])


  return (
    <div>
       <div className='movienav'>
        <div className='burgerbar' onClick={()=>setsidebar(true)}>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <div className='moviehead'>
            <h1><i className="fa-solid fa-clapperboard"></i><span>Find Movies</span></h1>
            <div>
                <p>Home</p>
                <p>Favorite Movies</p>
            </div>
        </div>
        <div className='moviesearch'>
            <span>
            <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <p onClick={()=>setopensign("signin")}>SignIn/SignUp</p>
        </div>
       </div>
       <div className={`sidebar ${sidebar&&"open"}`} >
            <div className='crossbar' onClick={()=>setsidebar(false)} >
                <p></p>
                <p></p>
            </div>
            <div className='sideoptions'>
            <button onClick={()=>{
                setsidebar(false)
                setopensign("signin")}}>SignIn/SignUp</button>
            <hr />
            <p>Home</p>
            <p>Favorite Movies</p>
            </div>
       </div>
    </div>
  )
}

export default Nav