import React from 'react'
import Header from '../components/Profile/Header'
import Socials from '../components/Profile/Socials'
import Bio from '../components/Profile/Bio'
import Services from '../components/Profile/Services'
import Name from '../components/Profile/Drawers/Name'
import { useQuery } from '@tanstack/react-query'
import { getUserDetails, getUserServices, getUserSocialMedia } from '../../queries/profile'

const Page = () => {
  // const socialmediaInfo= useQuery({queryKey:["userSocialMedia"],queryFn:getUserSocialMedia})
  return (
    <div className='flex flex-1 flex-col items-center'>
        <Header/>
        <Name />
        <Socials/>
        <Bio/>
        <Services/>
    </div>
  )
}

export default Page