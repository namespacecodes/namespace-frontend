'use client'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import Link from 'next/link'
import React, { Suspense, useState } from 'react'
import Divider from './Divider';
import {  CLIENT_ID,BASEURL } from '@/constants';
import axios from 'axios';
import {Spin} from 'antd'
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';
const LoginComponent = () => {
  const [loading,setLoading] = useState(false)

  const router = useRouter()
  const cookie = new Cookies()
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <Spin size='large' spinning={loading}/>
      <div className='flex flex-col justify-between items-center w-4/12 h-5/6'>
        <div className='flex flex-col items-center justify-between flex-1 pt-20 pb-10'>
          <div className='text-3xl color-black'>Sign in to NameSpace</div>
          <GoogleLogin
            onSuccess={credentialResponse => {
              setLoading(true)
              console.log(credentialResponse);
              axios.post(`${BASEURL}/googleLogin`,credentialResponse).then((res)=>{
                console.log(res.data.status);
                cookie.set('token',res.data.accessToken,{path:'/'})
                setLoading(false)
                router.push('/profile')
              }).catch((err)=>{
                setLoading(false)
                console.log(err);
              })
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            shape='pill'
            context='signin'
            text='continue_with'
            width="20vw"
            />
          <Divider/>
        </div>
        <div className='flex flex-col items-center justify-between flex-1 w-full h-1/2'>
        <input placeholder='Email' className='border-solid border-2 focus:border-slate-600 border-gray-200 bg-[#f4f2f2] rounded-full px-3 py-2 w-8/12 color-black placeholder:text-[#313030]'></input>
        <input placeholder='Password' type='password' className='border-solid border-2 focus:border-slate-600 border-gray-200 bg-[#f4f2f2] rounded-full px-3 py-2 w-8/12 color-black placeholder:text-[#313030]'></input>

          <button className='bg-[#f6f44d] rounded-full px-6 py-2'>Log in</button>
          <div className='text-[#b4a9a9]'>No account?<Link href={"/signup"} className='text-[#3c64be] pl-1'>Create One</Link></div>
        </div>
      </div>
    </GoogleOAuthProvider>
      // </Spin>
  )
}

export default LoginComponent