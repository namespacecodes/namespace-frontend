import React from 'react'
import Header from '../components/Profile/Header'
import Socials from '../components/Profile/Socials'
import Bio from '../components/Profile/Bio'
import Services from '../components/Profile/Services'
import Name from '../components/Profile/Drawers/Name'

const Page = () => {
  return (
    <div className='flex flex-1 flex-col items-center'>
        <Header/>
        <Name/>
        <Socials/>
        <Bio/>
        <Services/>
    </div>
  )
}

export default Page