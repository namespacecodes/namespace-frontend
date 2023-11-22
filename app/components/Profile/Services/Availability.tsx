import { poppins_600 } from '@/fonts/poppins'
import React from 'react'
import Image from 'next/image'
import More from '../../../../public/images/more.svg'

const Availability = () => {
  return (
    <div className={`${poppins_600.className} p-6 text-[20px] text-[#000000] m-5 flex-row flex flex-1 justify-between rounded-[25px] w-[80vw] bg-white shadow-lg shadow-slate-400`}>
        <div>Availability</div>
        <Image alt='more' src={More}/>
    </div>
  )
}

export default Availability