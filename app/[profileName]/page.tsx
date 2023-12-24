"use client"
import React, { use, useEffect, useState } from 'react'
import Name from './Name';
import Header from '../../components/Profile/Header';
import SocialsView from './SocialsView';
import { useQuery } from '@tanstack/react-query';
import { getProfile } from '@/queries/profile';
import axios from 'axios';
import { BASEURL, HEADERS } from '@/constants';
import BioCard from './BioCard';
import ServicesCard from './ServicesCard';
import { notFound } from 'next/navigation';


const Page = ({ params }: { params: { "profileName": string } })  => {
    const [profile,setProfile]= useState(params.profileName)
    useEffect(()=>{
      setProfile(params.profileName)
    },[params.profileName])
    const {data,isPending,isSuccess,isError,error}= useQuery({queryKey:["userProfile",{profileName:profile}],queryFn:getProfile,refetchOnWindowFocus: false,})
    if(isError){
        notFound()
    }
    if(isPending) return <div>Loading...</div>
    if(isSuccess && data) console.log(data?.data?.name);
    
  return (
    <div className='flex flex-1 flex-col items-center'>
        <Header/>
        <div className='mb-[25vh]'>
        <Name data={data?.user_data}/>
        </div>
        <SocialsView data={data?.socialmedia_data}/>
        <BioCard data={data?.user_data}/>
        <ServicesCard data={data?.service_data}/>
    </div>
  )
}

export default Page