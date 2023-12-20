"use client"
import { poppins_300, poppins_600 } from '@/fonts/poppins'
import React, { useState } from 'react'
import Image from 'next/image'
import More from '../../../public/images/more.svg'
import SkillsDrawer from './SkillsDrawer'
import { useQuery } from '@tanstack/react-query'
import { getUserServices } from '@/queries/profile'

const Description = () => {
  const {data,isPending,isError,}= useQuery({queryKey:["userServices"],queryFn:getUserServices})
  
  const [drawerOpen, setdrawerOpen] = useState(false)
  console.log(data);
  
  if(isPending){
    return <div>Loading...</div>
  }
  if(isError){
    return <div>Error...</div>
  }
  const toggleDrawer = () => {
    setdrawerOpen(!drawerOpen)
  }
  return (
    <div className={`${poppins_600.className} p-6 text-[20px] text-[#000000] m-5 rounded-[25px] w-[80vw] md:w-[30vw] bg-white shadow-lg shadow-slate-400`}>
    <div>
        <div>Description</div>
    </div>
    <div className='flex flex-1 justify-between p-3'>
        <div className={`${poppins_300.className} text-[17px]`}>
        {data?.data[0].description? data.data[0].description:'short brief on what your users can expect on call.'}
        </div>
        <SkillsDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} description={data?.data[0].description} moreInfo={data?.data[0].more_info} service_id={data?.data[0].service_id}/>
        <Image alt='more' src={More} onClick={toggleDrawer}/>
    </div>
    </div>
  )
}

export default Description