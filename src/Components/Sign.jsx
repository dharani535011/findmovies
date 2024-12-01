import React, { useContext } from 'react'
import { Othercontext } from './Otherprovider'

const Sign = () => {
    const {opensigns}=useContext(Othercontext)
    const [opensign,setopensign]=opensigns
  return (
    <div className={`sign ${(opensign === "signin" || opensign === "signup" || opensign === "forgetpass"
    )?"signopen":"sclose"}`} >
        <div className='signbody'>
            <div className='crossbar signb' style={{color:"blue"}} onClick={()=>setopensign("")}>
                <p></p>
                <p></p>
            </div>
           <div className='signin'>
               {opensign=="signup"&&<input type="text" placeholder='Name' />}
               <input type="text" placeholder='Email'/>
               {(opensign=="signin"||opensign=="signup")&&<input type="text" placeholder='Password'/>}
               <button>{opensign=="signup"?"SignUP":opensign=="signin"?"SignIn":"submit"}</button>
               <p onClick={()=>setopensign(opensign === "signup" ? "signin" : "signup")}>{opensign=="signup"?"SignIn":"SignUp"}</p>
               {opensign!=="forgetpass"&&<p style={{color:"blue",cursor:"pointer"}} onClick={()=>setopensign("forgetpass")}>forget password?</p>}
           </div>
        </div>
    </div>
  )
}

export default Sign