import React, { useContext, useEffect } from 'react'
import Nav from '../Components/Nav'
import Search from '../Components/Search'
import { Othercontext } from '../Components/Otherprovider'

const Favmovies = () => {
    const {favlists}=useContext(Othercontext)
    const [favlist,setfavlist]=favlists
    const handledel=(id)=>{
        const updatedFavList = favlist.filter((val) => val.imdb !== id);
        setfavlist(updatedFavList)
    }

  return (
<>
<Nav/>
<Search/>
<div className='favmain'>
        <div className='favbody'>
            {
                favlist.map((val)=>(
                    <span className='favmovie'>

                    <div>
                        <p>{val.title}</p>
                        <p>{val.year}</p>
                    </div>
                    <div>
                        <img src={val.poster} alt="img" />
                        <p onClick={()=>handledel(val.imdb)}>❤️</p>
                    </div>
                </span>
                ))
            }

            
        </div>
    </div>
</>
  )
}

export default Favmovies