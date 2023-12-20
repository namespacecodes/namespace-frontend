import React from 'react'
import SignupComponent from '../../components/Authentication/SignupComponent'
import ImageComponent from '../../components/Authentication/CommonComponent'

const Signup = () => {
  return (
    <div style={{width:"100vw",height:"100vh"}} className='flex flex-row justify-center items-center'>
    <ImageComponent/>
    <SignupComponent/>
    </div>
  )
}

export default Signup