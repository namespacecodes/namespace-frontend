'use client'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import Link from 'next/link'
import React from 'react'
import Divider from './Divider';
import { CLIENT_ID } from '@/constants';

const SignupComponent = () => {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>

      <div className='flex flex-col justify-between items-center w-4/12 h-5/6 bg-purple'>
      <div className='flex flex-col items-center justify-between flex-1 pt-20 pb-10'>
          <div className='text-3xl color-black'>Create Account</div>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            shape='pill'
            // theme='filled_blue'
            context='signin'
            text='continue_with'
            width="20vw"
          />
          <Divider/>
        </div>
        <div className='flex flex-col items-center justify-between flex-1 w-full h-1/2'>
          <input placeholder='Email' className='border-solid border-2 focus:border-slate-600 border-gray-200 bg-[#f4f2f2] rounded-full px-3 py-2 w-8/12 color-black placeholder:text-[#313030]'></input>
          <input placeholder='Password' className='border-solid border-2 focus:border-slate-600 border-gray-200 bg-[#f4f2f2] rounded-full px-3 py-2 w-8/12 color-black placeholder:text-[#313030]'></input>
          <input placeholder='Confirm Password' className='border-solid border-2 focus:border-slate-600 border-gray-200 bg-[#f4f2f2] rounded-full px-3 py-2 w-8/12 color-black placeholder:text-[#313030]'></input>
          <button className='bg-[#f6f44d] rounded-full px-6 py-2'>Sign up</button>
          <div className='text-[#b4a9a9]'>Already have an account?<Link href={"/"} className='text-[#3c64be] pl-1'>Log in</Link></div>
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}

export default SignupComponent