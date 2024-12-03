import React, { useContext, useState } from 'react'
import { Othercontext } from './Otherprovider'
import axios from 'axios'

const Sign = () => {
    const {opensigns,auths,loaders}=useContext(Othercontext)
    // const {}=useContext(Othercontext)
    const [loader,setloader]=loaders
    const [opensign,setopensign]=opensigns
    const [auth,setauth]=auths
    const [data,setdata]=useState({
      name:"",
      mail:"",
      password:""
    })
    const handlesubmit=async()=>{
           try {
            setloader(true)
            if(opensign=="signin"){
              const res=await axios.post("https://findmoviesbe.onrender.com/users/login",{mail:data.mail,password:data.password},{
                withCredentials:true
              })
              if(res.data.token){
                localStorage.setItem("auth",res.data.token)
                setauth(true)
              }
              alert(res.data.message)

            }
            if(opensign=="signup"){
              const res=await axios.post("https://findmoviesbe.onrender.com/users/signup",{mail:data.mail,password:data.password,name:data.name},{
                withCredentials:true
              })
              if(res.data.message){
                alert(res.data.message)
              }
            }
            if(opensign=="forgetpass"){
              const res=await axios.post("https://findmoviesbe.onrender.com/users/changepass",{mail:data.mail},{
                withCredentials:true
              })
              if(res.data.message){
                alert(res.data.message)
              }
            }
            
           } catch (error) {
            console.log(error.message)
           }finally{
            setdata({
              name:"",
              mail:"",
              password:""
            })
            setopensign("")
            setloader(false)
          }
    }
    const handleinput = (e) => {
      const { name, value } = e.target
      setdata((prev) => ({
        ...prev,
        [name]: value,  
      }));
    }
  return (
    <div className={`sign ${(opensign === "signin" || opensign === "signup" || opensign === "forgetpass"
    )?"signopen":"sclose"}`} >
        <div className='signbody'>
            <div className='crossbar signb' style={{color:"blue"}} onClick={()=>setopensign("")}>
                <p></p>
                <p></p>
            </div>
           <div className='signin'>
               {opensign=="signup"&&<input type="text" placeholder='Name' name='name' value={data.name} onChange={handleinput}/>}
               <input type="text" placeholder='Email' value={data.mail} name='mail' onChange={handleinput}/>
               {(opensign=="signin"||opensign=="signup")&&<input type="text" name='password' placeholder='Password' value={data.password} onChange={handleinput}/>}
               <button onClick={handlesubmit}>{opensign=="signup"?"SignUP":opensign=="signin"?"SignIn":"submit"}</button>
               <p onClick={()=>setopensign(opensign === "signup" ? "signin" : "signup")}>{opensign=="signup"?"SignIn":"SignUp"}</p>
               {opensign!=="forgetpass"&&<p style={{color:"blue",cursor:"pointer"}} onClick={()=>setopensign("forgetpass")}>forget password?</p>}
           </div>
        </div>
    </div>
  )
}

export default Sign