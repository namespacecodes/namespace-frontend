import React from 'react'
import Header from '../components/Profile/Header'
import Socials from '../components/Profile/Socials'
import Bio from '../components/Profile/Bio'
import Services from '../components/Profile/Services'
import Name from '../components/Profile/Drawers/Name'
import { useQuery } from '@tanstack/react-query'
import { getUserDetails, getUserServices, getUserSocialMedia } from '../../queries/profile'
import CreateLink from '../components/Profile/CreateLink'

const Page = () => {
  // const socialmediaInfo= useQuery({queryKey:["userSocialMedia"],queryFn:getUserSocialMedia})
  return (
    <div className='flex flex-1 flex-col items-center'>
        <Header/>
        <div className='mb-[20vh] md:mb-[25vh]'>
        <Name />
        </div>
        <Socials/>
        <Bio/>
        <Services/>
        <CreateLink/>
        {/* </div> */}
    </div>
  )
}

export default Page