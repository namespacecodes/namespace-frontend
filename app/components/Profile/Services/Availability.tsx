"use client"
import { poppins_600 } from '@/fonts/poppins'
import React, { useState } from 'react'
import Image from 'next/image'
import More from '../../../../public/images/more.svg'
import AvailabilityDrawer from '../Drawers/AvailabilityDrawer'

const Availability = () => {
  const [drawerOpen, setdrawerOpen] = useState(false)
  const toggleDrawer = () => {
    setdrawerOpen(!drawerOpen)
  }
  return (
    <div className={`${poppins_600.className} p-6 text-[20px] text-[#000000] m-5 flex-row flex flex-1 justify-between rounded-[25px] w-[80vw] md:w-[30vw] bg-white shadow-lg shadow-slate-400`}>
        <div>Availability</div>
        <AvailabilityDrawer toggleDrawer={toggleDrawer} drawerOpen={drawerOpen}/>
        <Image alt='more' src={More} onClick={toggleDrawer}/>
    </div>
  )
}

export default Availability