"use client"
import { poppins_600 } from '@/fonts/poppins'
import React, { useState } from 'react'
import More from '../../../public/images/more.svg'
import Image from 'next/image'
import { CloseOutlined } from '@ant-design/icons'
import { Button, Drawer, Input } from 'antd'

const CreateLink = () => {
  const [drawerOpen, setdrawerOpen] = useState(false)
  const [input,setInput]=useState("")
  const toggleDrawer = () => {
    setdrawerOpen(!drawerOpen)
  }
  
  return (
    <div className={`${poppins_600.className} md:w-[50vw] p-5 text-[20px] text-[#000000] m-5 rounded-[25px] w-[80vw] bg-white shadow-lg shadow-slate-400`}>
    <div className='flex flex-1 justify-between'>
        <div className={`${poppins_600.className} text-[20px]`}>
         CreateLink
        </div>
        <Image alt='more' src={More} onClick={toggleDrawer} />
    </div>
    <Drawer open={drawerOpen} placement='bottom' className='rounded-[20px] ' headerStyle={{ display: "none" }} onClose={toggleDrawer}>
        <div className='flex flex-1 flex-row justify-between items-center'>
          <div className={`${poppins_600.className} text-[32px]`}>
            <div>Your </div>
            <div>Profile Link,</div>
          </div>
          <CloseOutlined onClick={toggleDrawer} style={{ fontSize: 20 }} />
        </div>
        <div className='mt-[10vh] flex flex-1 flex-col space-y-[4vh] justify-between items-center'>
          <Input size='large' className='h-[5vh]' value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder={'www.mynamespace/'} />
          <Button className='bg-[#340181] h-[15vh] text-[#FEFEFE] w-[50vw]'  size='large'>save</Button>
        </div>
      </Drawer>
    </div>
  )
}

export default CreateLink