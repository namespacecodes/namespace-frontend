"use client"
import React from 'react'
import Name from '../components/Profile/Drawers/Name';
import Header from '../components/Profile/Header';
import SocialsView from './SocialsView';

const Page = ({ params }: { params: { "profile-link": string } })  => {
    console.log(params['profile-link']);
    
  return (
    <div className='flex flex-1 flex-col items-center'>
        <Header/>
        <Name />
        <SocialsView/>
    </div>
  )
}

export default Page