import React from 'react'

const Forgetpass = () => {
  return (
    <div className='forgetpassh'>
       <div className='signbody'>
            <div className='signin'>
                <h1 style={{fontSize:"25px"}}>Change Your Password</h1>
         <input type="text" placeholder='OTP'/>
         <input type="text" placeholder='New Password'/>
         <button>Submit</button>
            </div>
       </div>
    </div>
  )
}

export default Forgetpass