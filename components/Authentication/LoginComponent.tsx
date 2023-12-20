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
import { poppins_600 } from '@/fonts/poppins';
const LoginComponent = () => {
  const [loading,setLoading] = useState(false)

  const router = useRouter()
  const cookie = new Cookies()
  return (
        <div className='flex flex-1 flex-col items-center justify-center'>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <Spin size='large' spinning={loading}/>
          <GoogleLogin
            onSuccess={credentialResponse => {
              setLoading(true)
              console.log(credentialResponse);
              axios.post(`${BASEURL}/googleLogin`,credentialResponse).then((res)=>{
                console.log(res.data.status);
                cookie.set('token',res.data.accessToken,{path:'/'})
                cookie.set('user_id',res.data.user_id,{path:'/'})
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
    </GoogleOAuthProvider>
            </div>
      // </Spin>
  )
}

export default LoginComponent