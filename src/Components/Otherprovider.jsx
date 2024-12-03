import { createContext, useEffect, useState } from "react";

export const Othercontext=createContext()
const Contextprovider=({children})=>{
    const [opensign,setopensign]=useState("")
    const [searcho,setsearcho]=useState()
    const [loader,setloader]=useState(false)
    const [auth,setauth]=useState(()=>{
        
        return localStorage.getItem("auth")||false
    })
    const [favlist, setfavlist] = useState(() => {
        const savedFavList = localStorage.getItem("favmovies")
        return savedFavList ? JSON.parse(savedFavList) : []
      });

      useEffect(() => {
        localStorage.setItem("favmovies", JSON.stringify(favlist));
      }, [favlist])



    return(
        <Othercontext.Provider value={{opensigns:[opensign,setopensign]
            ,searchos:[searcho,setsearcho],favlists:[favlist,setfavlist],
            auths:[auth,setauth],loaders:[loader,setloader]
        }}>
            {children}
        </Othercontext.Provider>
    )
}
export default Contextprovider