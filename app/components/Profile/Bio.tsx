"use client"
import { poppins_300, poppins_600 } from '@/fonts/poppins'
import React, { useState } from 'react'
import More from '../../../public/images/more.svg'
import Image from 'next/image'
import BioDrawer from './Drawers/BioDrawer'
import { useQuery } from '@tanstack/react-query'
import { getUserDetails } from '@/queries/profile'

const Bio = () => {
  const [drawerOpen, setdrawerOpen] = useState(false)
  const toggleDrawer = () => {
    setdrawerOpen(!drawerOpen)
  }
  const userInfo= useQuery({queryKey:["userInfo"],queryFn:getUserDetails})
  const data=userInfo.data?.data
  if(userInfo.isPending){
    return <div>Loading...</div>
  }
  return (
    <div className={`${poppins_600.className} p-5 text-[20px] text-[#000000] m-5 rounded-[25px] w-[80vw] bg-white shadow-lg shadow-slate-400`}>
    <div>
        <div>Bio</div>
    </div>
    <BioDrawer bio={data?.bio} more={data?.more_info} drawerOpen={drawerOpen} toggleDrawer={toggleDrawer}/>
    <div className='flex flex-1 justify-between'>
        <div className={`${poppins_300.className} text-[17px]`}>
        {data?.bio? data.bio:"Add Bio"}
        </div>
        <Image alt='more' src={More} onClick={toggleDrawer} />
    </div>
    </div>
  )
}

export default Bio