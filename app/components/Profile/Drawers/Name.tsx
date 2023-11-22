"use client"
import { poppins_500, poppins_600 } from '@/fonts/poppins'
import Image from 'next/image'
import React, { useState } from 'react'
import ProfilePic from '../../../../public/images/profilepic.jpeg'
import { Button, Drawer, Input } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
const Name = () => {
  const [drawerOpen, setdrawerOpen] = useState(false)
  const toggleDrawer = () => {
    setdrawerOpen(!drawerOpen)
  }
  return (
    <div className={`${poppins_500.className} text-[24px] text-center mt-[2vh]`}>
      <Image src={ProfilePic} className='rounded-full' alt='Profile Picture' />
      <div onClick={toggleDrawer}>William George</div>
      <Drawer open={drawerOpen} placement='bottom' className='rounded-[20px] ' headerStyle={{ display: "none" }} onClose={toggleDrawer}>
        <div className='flex flex-1 flex-row justify-between items-center'>
          <div className={`${poppins_600.className} text-[24px]`}>
            <div>Your </div>
            <div>Name,</div>
          </div>
          <CloseOutlined onClick={toggleDrawer} style={{ fontSize: 20 }} />
        </div>
        <div className='mt-[10vh] flex flex-1 flex-col space-y-[4vh] justify-between items-center'>
          <Input size='large' className='h-[5vh]' placeholder='name' />
          <Button className='bg-[#340181] h-[15vh] text-[#FEFEFE] w-[50vw]' size='large'>save</Button>
        </div>
      </Drawer>
    </div>
  )
}

export default Name