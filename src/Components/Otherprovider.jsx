import { createContext, useState } from "react";

export const Othercontext=createContext()
const Contextprovider=({children})=>{
    const [opensign,setopensign]=useState("signin")
    return(
        <Othercontext.Provider value={{opensigns:[opensign,setopensign]}}>
            {children}
        </Othercontext.Provider>
    )
}
export default Contextprovider