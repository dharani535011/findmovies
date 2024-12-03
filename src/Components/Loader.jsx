import React, { useContext } from 'react'
import { Othercontext } from './Otherprovider'

const Loader = () => {
    const {loaders}=useContext(Othercontext)
    const [loader,setloader]=loaders
  return (
    <div className='loadermain' style={{display:loader?"flex":"none"}}>
        <div className='loaderbody'>

        </div>
    </div>
  )
}

export default Loader