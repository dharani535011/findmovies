
import React, { useContext, useState } from 'react'
import { Othercontext } from './Otherprovider'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
    const { opensigns, searchos, auths } = useContext(Othercontext)
    const [opensign, setopensign] = opensigns
    const [auth, setauth] = auths
    const [searcho, setsearcho] = searchos
    const [sidebar, setsidebar] = useState(false)
    const navigate=useNavigate()
    // Handle logout
    const handleLogout = () => {
        
        localStorage.removeItem('auth') 
        setauth(false) 
        setsearcho(false)
        if(!auth){
            setopensign("signin")
        }
        setsidebar(false)
        alert("logout successfull")
        navigate("/")
    }

    return (
        <div>
            <div className="movienav">
                <div
                    className="burgerbar"
                    onClick={() => {
                        setopensign(false)
                        setsearcho(false)
                        setsidebar(true)
                    }}
                >
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className="moviehead">
                    <h1>
                        <i className="fa-solid fa-clapperboard" style={{ zIndex: "999" }}></i>
                        <span>Find Movies</span>
                    </h1>
                    <div>
                        <p>
                            <Link
                                to={"/"}
                                onClick={() => {
                                    setsidebar(false)
                                    setopensign(false)
                                    setsearcho(false)
                                }}
                                style={{ all: "unset" }}
                            >
                                Home
                            </Link>
                        </p>
                        {auth?<p>
                            <Link
                                to={"/favmovies"}
                                style={{ all: "unset" }}
                                onClick={() => setsearcho(false)}
                            >
                                Favorite Movies
                            </Link>
                        </p>:<p onClick={()=>{
                                 if(!auth){
                                    setopensign("signin")
                                    setsidebar(false)
                                    return
                                }
                    }}>Favorite Movies</p>}
                    </div>
                </div>
                <div className="moviesearch">
                    <span>
                        <i
                            className="fa-solid fa-magnifying-glass"
                            onClick={() => {
                                if(auth){
                                    setsearcho(!searcho)
                                    
                                }else{
                                    setopensign("signin")
                                }
                                setsidebar(false)
                                // setopensign(false)
                                
                            }}
                        ></i>
                    </span>
                    <p onClick={auth ? handleLogout : () =>{ 
                        setsidebar(false)
                        if(!auth){
                            setopensign("signin")
                        }
                        }}>
                        {auth ? "Logout" : "SignIn/SignUp"}
                    </p>
                </div>
            </div>
            <div className={`sidebar ${sidebar && "open"}`}>
                <div className="crossbar" onClick={() => setsidebar(false)}>
                    <p></p>
                    <p></p>
                </div>
                <div className="sideoptions">
                    <button onClick={auth ? handleLogout : () => { 
                        setsidebar(false)
                        if(!auth){
                            setopensign("signin")
                        }
                        }}>
                        {auth ? "Logout" : "SignIn/SignUp"}
                    </button>
                    <hr />
                    <p>
                        <Link
                            to={"/"}
                            style={{ all: "unset" }}
                            onClick={() => {
                                setopensign(false)
                                setsidebar(false)
                                setsearcho(false)
                            }}
                        >
                            Home
                        </Link>
                    </p>
                   {auth? <p>
                        <Link
                            to={"/favmovies"}
                            onClick={() => {

                                setopensign(false)
                                setsearcho(false)
                            }}
                            style={{ all: "unset" }}
                        >
                            Favorite Movies
                        </Link>
                    </p>:<p onClick={()=>{
                                 if(!auth){
                                    setopensign("signin")
                                    setsidebar(false)
                                    return
                                }
                    }}>Favorite Movies</p>}
                </div>
            </div>
        </div>
    )
}

export default Nav
