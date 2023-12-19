import { poppins_700 } from '@/fonts/poppins'
import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <div className='bg-[#340181] h-[13vh] p-5 w-[100vw]'>
       <div className={`${poppins_700.className} text-[#FEFEFE] text-[18px]`}>namespace.</div>
    </div>
  )
}

export default Header