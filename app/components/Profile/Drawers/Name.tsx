"use client"
import { poppins_500, poppins_600 } from '@/fonts/poppins'
import Image from 'next/image'
import React, { useState } from 'react'
import ProfilePic from '../../../../public/images/profilepic.jpeg'
import { Button, Drawer, Input } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import PictureDrawer from './PictureDrawer'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { updateUser } from '@/mutations/profile'
import { getUserDetails } from '@/queries/profile'
const Name = () => {
  const queryClient= useQueryClient()
  const updateUserMutation= useMutation({
    mutationFn:({name}:any)=>{
      return updateUser({name})},
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['userInfo']})
    }
  })
  const [input,setInput]=useState("")
  const [drawerOpen, setdrawerOpen] = useState(false)
  const toggleDrawer = () => {
    setdrawerOpen(!drawerOpen)
  }
  const [picDrawer,setPicDrawer]= useState(false)
  const togglePicDrawer = () => {
    setPicDrawer(!picDrawer)
  }
  const userInfo= useQuery({queryKey:["userInfo"],queryFn:getUserDetails})
  const data:any=userInfo?.data?.data
  if(userInfo.isPending) return <div>Loading...</div>
  return (
    <div className={`${poppins_500.className} text-[24px] text-center mt-[2vh] absolute top-[5vh] left-[23vw] md:left-[40vw] z-10`}>
      <Image src={ProfilePic} className='rounded-full' alt='Profile Picture' onClick={togglePicDrawer} />
      <PictureDrawer toggleDrawer={togglePicDrawer} drawerOpen={picDrawer}/>
      <div onClick={toggleDrawer}>{data?.name?data.name:"Hello"}</div>
      <Drawer open={drawerOpen} placement='bottom' className='rounded-[20px]' width={"50%"} headerStyle={{ display: "none" }} onClose={toggleDrawer}>
        <div className='flex flex-1 flex-row justify-between items-center'>
          <div className={`${poppins_600.className} text-[32px]`}>
            <div>Your </div>
            <div>Name,</div>
          </div>
          <CloseOutlined onClick={toggleDrawer} style={{ fontSize: 20 }} />
        </div>
        <div className='mt-[10vh] flex flex-1 flex-col space-y-[4vh] justify-between items-center'>
          <Input size='large' className='h-[5vh]' value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder={data?.name?data.name:'name'} />
          <Button className='bg-[#340181] h-[15vh] text-[#FEFEFE] w-[50vw]' onClick={()=>{updateUserMutation.mutate({name:input})}} size='large'>save</Button>
        </div>
      </Drawer>
    </div>
  )
}

export default Name