"use client"
import { poppins_600 } from '@/fonts/poppins'
import { Button, Checkbox, Drawer, Input } from 'antd'
import React, { useState } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateUser } from '@/mutations/profile'
const BioDrawer = ({ toggleDrawer, drawerOpen,bio,more }: any) => {
    const queryClient= useQueryClient()
  const updateUserMutation= useMutation({
    mutationFn:({bio,more_info}:any)=>{
      return updateUser({bio,more_info})},
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['userInfo']})
    }
  })
    const [bioInput,setBioInput]= useState(bio?bio:"")
    const [bioMoreInput,setBioMoreInput]= useState(more?more:"")
    const { TextArea } = Input;
    return (
        <Drawer push={{ distance: 0 }} open={drawerOpen} onClose={toggleDrawer} className='w-[100vw]' headerStyle={{ display: "none" }}>
            <div className='flex flex-1 flex-row justify-between items-center'>
                <div className={`${poppins_600.className} text-[32px]`}>
                    <div>Share </div>
                    <div>your story,</div>
                </div>
                <CloseOutlined onClick={toggleDrawer} style={{ fontSize: 20 }} />
            </div>
           
            <div className='p-3 mt-[5vh] flex flex-1 flex-col justify-center items-center space-y-[4vh]'>
                <TextArea placeholder={bio?bio:"short brief on your profession , skills , talent."} value={bioInput} onChange={(input)=>{setBioInput(input.target.value)}} style={{ height: "15vh", textAlign: "center",borderRadius:"5px" }} />
                <TextArea placeholder={more?more:"tell us more!"} value={bioMoreInput} onChange={(input)=>{setBioMoreInput(input.target.value)}} style={{ height: "40vh", textAlign: "center", alignItems: "center",borderRadius:"5px" }} />
                <Button className='bg-[#340181] h-[15vh] text-[#FEFEFE] w-[50vw] md:w-[20vw]' size='large' onClick={()=>{updateUserMutation.mutate({bio:bioInput,more_info:bioMoreInput})}}>save</Button>
            </div>
        </Drawer>
    )

}

export default BioDrawer