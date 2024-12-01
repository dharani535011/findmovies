import { createContext, useState } from "react";

export const Othercontext=createContext()
const Contextprovider=({children})=>{
    const [opensign,setopensign]=useState("")
    const [searcho,setsearcho]=useState()
    return(
        <Othercontext.Provider value={{opensigns:[opensign,setopensign]
            ,searchos:[searcho,setsearcho]
        }}>
            {children}
        </Othercontext.Provider>
    )
}
export default Contextprovider