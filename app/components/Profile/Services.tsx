"use client"
import { poppins_300, poppins_600 } from '@/fonts/poppins'
import React, { useState } from 'react'
import More from '../../../public/images/more.svg'
import Image from 'next/image'
import ServicesDrawer from './Services/ServicesDrawer'
const Services = () => {
  const [drawerOpen, setdrawerOpen] = useState(false)
  const toggleDrawer = () => {
    setdrawerOpen(!drawerOpen)
  }
  return (
    <div className={`${poppins_600.className} p-5 text-[20px] text-[#000000] m-5 rounded-[25px] w-[80vw] bg-white shadow-lg shadow-slate-400`}>
    <div>
        <div>Services</div>
    </div>
    <div className='flex flex-1 justify-center space-x-[16vh]'>
        <div className={`${poppins_300.className} text-[17px]`}>
          1:1 Video Call
        </div>
        <ServicesDrawer toggleDrawer={toggleDrawer} drawerOpen={drawerOpen}/>
        <Image alt='more' src={More} onClick={toggleDrawer} />
    </div>
    </div>
  )
}

export default Services