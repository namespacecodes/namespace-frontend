import { poppins_600 } from '@/fonts/poppins'
import { Input } from 'antd'
import React from 'react'

const Price = () => {
  return (
    <div className={`${poppins_600.className} p-6 text-[20px] text-[#000000] m-5 flex-row flex flex-1 justify-between rounded-[25px] w-[80vw] bg-white shadow-lg shadow-slate-400`}>
    <div>Price</div>
    <Input placeholder='minutes' bordered={false} className='text-center' style={{borderBottom:"1px solid black", width:"25vw",borderRadius:0}}/>
</div>
  )
}

export default Price