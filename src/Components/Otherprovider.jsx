import { createContext, useEffect, useState } from "react";

export const Othercontext=createContext()
const Contextprovider=({children})=>{
    const [opensign,setopensign]=useState("")
    const [searcho,setsearcho]=useState()
    const [favlist, setfavlist] = useState(() => {
        const savedFavList = localStorage.getItem("favmovies")
        return savedFavList ? JSON.parse(savedFavList) : []
      });

      useEffect(() => {
        localStorage.setItem("favmovies", JSON.stringify(favlist));
      }, [favlist])



    return(
        <Othercontext.Provider value={{opensigns:[opensign,setopensign]
            ,searchos:[searcho,setsearcho],favlists:[favlist,setfavlist]
        }}>
            {children}
        </Othercontext.Provider>
    )
}
export default Contextprovider