"use client"
import { poppins_600 } from '@/fonts/poppins'
import { Button, Drawer, Input } from 'antd'
import React, { useState } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import Description from './Description'
import Availability from './Availability'
import { getUserServices } from '@/queries/profile'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { updateServices } from '@/mutations/profile'



const ServicesDrawer = ({ toggleDrawer, drawerOpen }: any) => {
  const {data,isPending,isError,}= useQuery({queryKey:["userServices"],queryFn:getUserServices})
  const [price,setPrice]=useState(data?.data[0]?.price)
  const [duration,setDuration]=useState(data?.data[0]?.duration)
  const queryClient= useQueryClient()
    const updateServiceMutation=useMutation({
       mutationFn:({description,more_info}:any)=>{
        return updateServices({price,duration,service_id:data?.data[0].service_id})
       },
       onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['userServices']})
      }
    })
  if(isPending){
    return <div>Loading...</div>
  }
  if(isError){
    return <div>Error...</div>
  }
  return (
    <Drawer push={{ distance: 0 }} open={drawerOpen} onClose={toggleDrawer} className='w-[100vw]' headerStyle={{ display: "none" }}>
      <div className='flex flex-1 flex-row justify-between items-center'>
        <div className={`${poppins_600.className} text-[32px]`}>
          <div>Your </div>
          <div>service,</div>
        </div>
        <CloseOutlined onClick={toggleDrawer} style={{ fontSize: 20 }} />
      </div>
      <div className='mt-[10vh] items-center space-y-[5vh] flex flex-1 flex-col'>
        <Description />
        <Availability />
        <div className={`${poppins_600.className} p-6 text-[20px] text-[#000000] m-5 flex-row flex flex-1 justify-between rounded-[25px] w-[80vw] md:w-[30vw] bg-white shadow-lg shadow-slate-400`}>
          <div>Call duration </div>
          <Input placeholder='minutes' value={duration} onChange={(input)=>{setDuration(input.target.value)}} bordered={false} className='text-center' style={{ borderBottom: "1px solid black", width: "25vw", borderRadius: 0 }} />
        </div>
        <div className={`${poppins_600.className} p-6 text-[20px] text-[#000000] m-5 flex-row flex flex-1 justify-between rounded-[25px] w-[80vw] md:w-[30vw] bg-white shadow-lg shadow-slate-400`}>
          <div>Price</div>
          <Input placeholder='rupees' value={price} onChange={(input)=>{setPrice(input.target.value)}} bordered={false} className='text-center' style={{ borderBottom: "1px solid black", width: "25vw", borderRadius: 0 }} />
        </div>
        <Button className='bg-[#340181] h-[15vh] text-[#FEFEFE] w-[50vw] md:w-[20vw]' size='large' onClick={()=>{updateServiceMutation.mutate({price,duration})}}>save</Button>
      </div>
    </Drawer>
  )
}

export default ServicesDrawer