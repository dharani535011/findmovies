
// import axios from "axios"
// import React, { useContext, useEffect, useState } from "react"
// import { Othercontext } from "./Otherprovider"
// import { Link } from "react-router-dom"

// const Search = () => {
//     const {searchos}=useContext(Othercontext)
//     const [searcho,setsearcho]=searchos
//     const [search, setSearch] = useState("") // Corrected to camelCase
//     const [datas, setDatas] = useState([])

//     const fetchdata = async () => {
//         try {
//             const res = await axios.get("https://www.omdbapi.com/", {
//                 params: {
//                     s: search,
//                     apikey: "84a91855",
//                 },
//             })

//             if (res.data.Response === "True") {
//                 setDatas(res.data.Search)
//             } else {
//                 setDatas([]) // Clear the list if no results are found
//             }
//         } catch (error) {
//             console.error("Error fetching data:", error)
//         }
//     }

//     useEffect(() => {
//         const delayDebounce = setTimeout(() => {
//             if (search.trim()) fetchdata() // Prevent empty or whitespace search
//         }, 500)

//         return () => clearTimeout(delayDebounce)
//     }, [search])
// // console.log(datas)
//     return (
//         <div className={`searchmain ${searcho&&"searchopen"}`} >
//             <div className="searchbody">
//                 <div className="searchin">
//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                     />
//                 </div>
//                 <div className="searchlist">
//                     {datas.length > 0 ? (
//                         datas.map((val) => (
//                             <Link key={val.imdbID} to={`/moviedetials/${val.imdbID}`} style={{all:"unset"}}>
//                             <span className="movies" >
//                                 <div className="mded">
//                                     <p>{val?.Title || "No Title Available"}</p>
//                                     <p>{val?.Year || "N/A"}</p>
//                                 </div>
//                                 <img
//                                 className="searchi"
//                                     src={val?.Poster !== "N/A" ? val.Poster : "placeholder.jpg"}
//                                     alt="Movie Poster"
//                                 />
//                             </span></Link>
//                         ))
//                     ) : (
//                         search && <p style={{marginLeft:"15px"}}>No results found</p> // Show message if search is not empty
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Search



import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { Othercontext } from "./Otherprovider"
import { Link } from "react-router-dom"

const Search = () => {
    const {searchos}=useContext(Othercontext)
    const [searcho,setsearcho]=searchos
    const [search, setSearch] = useState("")
    const [datas, setDatas] = useState([])
    const [history,sethistory]=useState(()=>{
        const res=localStorage.getItem("history")
        return res?JSON.parse(res):[]
    })
    const fetchdata = async () => {
        try {
            const res = await axios.get("https://www.omdbapi.com/", {
                params: {
                    s: search,
                    apikey: "84a91855",
                },
            })

            if (res.data.Response === "True") {
                setDatas(res.data.Search)
            } else {
                setDatas([]) 
            }
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }
    useEffect(()=>{
        const res = history.reduce((acc, curr) => {
            if (!acc.some((item) => item.title === curr.title)) {
                acc.push(curr)
            }
            return acc
        }, [])
        localStorage.setItem("history",JSON.stringify(res))
      },[history])

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (search.trim()) fetchdata()
        }, 500)

        return () => clearTimeout(delayDebounce)
    }, [search])
// console.log(datas)
const handlehistroy=(i)=>{
    sethistory((pre) => (Array.isArray(pre) ? [...pre, {title:i}] : [{title:i}]))
}
// console.log(history)
    return (
        <div className={`searchmain ${searcho&&"searchopen"}`} >
            <div className="searchbody">
                <div className="searchin">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="searchlist">
                    {datas.length > 0 ? (
                        datas.map((val) => (
                            <Link key={val.imdbID} onClick={()=>handlehistroy(val.Title)} to={`/moviedetials/${val.imdbID}`} style={{all:"unset",width:"100%",display:"flex",justifyContent:"center"}}>
                            <span className="movies" >
                                <div className="mded">
                                    <p>{val?.Title || "No Title Available"}</p>
                                    <p>{val?.Year || "N/A"}</p>
                                </div>
                                <img
                                className="searchi"
                                    src={val?.Poster !== "N/A" ? val.Poster : "placeholder.jpg"}
                                    alt="Movie Poster"
                                />
                            </span></Link>
                        ))
                    ) : (
                        // search && <p style={{marginLeft:"15px"}}>No results found</p> 
                        history.map((val) => (
                            <span className="movies" style={{height:"30px"}}  key={val.imdbID} onClick={()=>setSearch(val.title)}>
                                <div className="mded">
                                    <p>{val?.title || "No Title Available"}</p>
                                </div>
                            </span>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Search
