"use client"
import { poppins_300 } from '@/fonts/poppins'
import React, { useState } from 'react'
import {DownOutlined,UpOutlined} from '@ant-design/icons'
import { Button } from 'antd'
const BioCard = ({data}:any) => {
    const [moreInfoVisible,setMoreInfoVisible]= useState(false)
    const toggleMoreInfo = ()=>{
        setMoreInfoVisible(!moreInfoVisible)
    }
  return (
    <div className={`${poppins_300.className} md:w-[50vw] bg-white shadow-lg rounded-[10px] flex-col text-[14px] md:text-[16px] shadow-slate-400 flex flex-1 items-center px-[8vw] pt-[6vh] pb-[2vh] w-[85vw] mt-[5vh]`}>
        <div className='mb-[2vh]'>
            {data?.bio}
            {/* 🔥 Dapper Dreamer 🕶️| Mastering the art of suave. Unleash your inner gentleman with curated style tips. */}
        </div>
        <div style={{display:moreInfoVisible?"inline":"none"}}>
            {data?.more_info}
            {/* 👉 Assisting aspiring fashionistas in kickstarting their careers 💼 🔧 Providing industry insights, career guidance, and mentorship 🤝 📈 Helping turn passion into a thriving career in fashion */}
{/* 👕 From runway to resume, comprehensive support is just a click away! 💻 Online courses, workshops, and personalized advice available */}
        </div>
        <Button icon={moreInfoVisible?<UpOutlined style={{color:"#F6014E"}} />:<DownOutlined style={{color:"#F6014E"}} />} type='link' onClick={toggleMoreInfo}/>
    </div>
  )
}

export default BioCard