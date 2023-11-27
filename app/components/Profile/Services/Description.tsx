"use client"
import { poppins_300, poppins_600 } from '@/fonts/poppins'
import React, { useState } from 'react'
import Image from 'next/image'
import More from '../../../../public/images/more.svg'
import SkillsDrawer from './SkillsDrawer'

const Description = ({header,content}:any) => {
  const [drawerOpen, setdrawerOpen] = useState(false)
  const toggleDrawer = () => {
    setdrawerOpen(!drawerOpen)
  }
  return (
    <div className={`${poppins_600.className} p-6 text-[20px] text-[#000000] m-5 rounded-[25px] w-[80vw] bg-white shadow-lg shadow-slate-400`}>
    <div>
        <div>Description</div>
    </div>
    <div className='flex flex-1 justify-end p-3'>
        <div className={`${poppins_300.className} text-[17px]`}>
        short brief on what your users can expect on call.
        </div>
        <SkillsDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer}/>
        <Image alt='more' src={More} onClick={toggleDrawer}/>
    </div>
    </div>
  )
}

export default Description