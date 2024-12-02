import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Othercontext } from '../Components/Otherprovider'

const Moviesdetials = () => {
    const {id}=useParams()
    const [data,setdata]=useState("")
    const {favlists}=useContext(Othercontext)
    const [favlist,setfavlist]=favlists
    // const [fav,setfav]=useState({})
    const [heart,setheart]=useState(false)
    const fetchdata=async()=>{
        try {
            const res=await axios.get( `http://www.omdbapi.com/?i=${id}&apikey=${"84a91855"}`)
            setdata(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchdata()

    },[id])
    const handlefav=()=>{
        const existingMovie = favlist.find((val) => val.imdb === data.imdbID);
       
        if (existingMovie) {
            const res=favlist.filter((val)=>val.imdb!==data.imdbID)
            setfavlist(res)
            setheart(false)
        }else{
            const newFavorite = {
                title: data.Title,
                imdb: data.imdbID,
                year: data.Year,
                poster: data.Poster,
              };
            setfavlist((pre)=>[...pre,newFavorite])
            setheart(true)
        }
    }
    // console.log(favlist)
    useEffect(() => {
        
        const isFavorite = favlist.some((val) => val.imdb === data.imdbID);
        setheart(isFavorite);
      }, [data, favlist])


    console.log(favlist)
  return (
<>

<div className='moviemain'>
        <div className='moviebody'>
              <div className='movieimg'>
                <img src={data.Poster} alt="img" />
              </div>
              <div className='moviedetials'>

                <h1>{data.Title}</h1>
                <p>Actors : {data.Actors}</p>
                <p>Director : {data.Director}</p>
                <p>Genre : {data.Genre}</p>
                
                <div className='moviehour'>
                    <span><p>{data.Year}</p>.<p>{data.Type}</p>.<p>{data.Runtime}</p></span>
                    <span><p className='imdb'>IMdb</p>:<p>{data.imdbRating}</p></span>
                </div>
                
                <p className='moviesum'>{data.Plot}</p>
              
                <span className='moviebutton'>
                <button>▶️ Watch Now</button>
                <button onClick={handlefav}>{heart?"❤️":"🤍"} Add to Favorite</button>
              </span>
              </div>



        </div>
    </div>
</>
  )
}

export default Moviesdetials

