'use client'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import React, { useState } from 'react'
import { poppins_600, poppins_namespace } from '@/fonts/poppins'
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';
import { BASEURL, CLIENT_ID } from '@/constants';
import axios from 'axios';
import { Spin } from 'antd';



export default function Home() {
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const cookie = new Cookies()
  return (

    <div className='flex flex-1 flex-col h-screen w-screen py-10 bg-gradient-to-b from-[#360181] via-[#470E9C] to-[#2D0643]'>
      <div className='px-10 h-[25vh] w-screen flex flex-row justify-between'>
        <div className={`${poppins_namespace.className} text-[18px] md:text-[24px] text-[#FFFFFF]`}>namespace.</div>
      </div>
      <div className='flex space-y-[10vh] items-center flex-col justify-center h-[50vh] w-screen '>
      <div className={`${poppins_600.className} text-[45px] md:text-[64px] text-[#FFF]`}>
        <div>Create your own </div>
        <div>influencer space </div>
      </div>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <Spin size='large' spinning={loading} />
        <GoogleLogin
          onSuccess={credentialResponse => {
            setLoading(true)
            console.log(credentialResponse);
            axios.post(`${BASEURL}/googleLogin`, credentialResponse).then((res) => {
              console.log(res.data.status);
              cookie.set('user_id',res.data.user_id,{path:'/'})
              cookie.set('token', res.data.accessToken, { path: '/' })
              setLoading(false)
              router.push('/profile')
            }).catch((err) => {
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
      </GoogleOAuthProvider>
      </div>
    </div>
  )
}
