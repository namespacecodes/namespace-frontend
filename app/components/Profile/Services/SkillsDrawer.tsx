"use client"
import { poppins_600 } from '@/fonts/poppins'
import { Button, Drawer, Input } from 'antd'
import React, { useState } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateServices } from '@/mutations/profile'


const SkillsDrawer= ({ toggleDrawer, drawerOpen,description,moreInfo,service_id }: any) => {
    const { TextArea } = Input;
    const queryClient= useQueryClient()
    const updateServiceMutation=useMutation({
       mutationFn:({description,more_info}:any)=>{
        return updateServices({description,more_info,service_id})
       },
       onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['userServices']})
      }
    })
    const [desc,setDesc]=useState(description?description:"")
    const [more,setMore]=useState(moreInfo?moreInfo:"")
    return (
        <Drawer push={{ distance: 0 }} open={drawerOpen} onClose={toggleDrawer} className='w-[100vw]' headerStyle={{ display: "none" }}>
            <div className='flex flex-1 flex-row justify-between items-center'>
                <div className={`${poppins_600.className} text-[32px]`}>
                    <div>Talk</div>
                    <div>about your</div>
                    <div>skills,</div>
                </div>
                <CloseOutlined onClick={toggleDrawer} style={{ fontSize: 20 }} />
            </div>
            <div className='p-3 mt-[5vh] flex flex-1 flex-col justify-center items-center space-y-[4vh]'>
                <TextArea placeholder={description?description:"short brief on what your users can expect on call."} value={desc} onChange={(input)=>{setDesc(input.target.value)}} style={{ height: "15vh", textAlign: "center",borderRadius:"5px" }} />
                <TextArea placeholder={moreInfo?moreInfo:"tell us more!"} value={more} onChange={(input)=>{setMore(input.target.value)}} style={{ height: "40vh", textAlign: "center", alignItems: "center",borderRadius:"5px" }} />
                <Button className='bg-[#340181] h-[15vh] text-[#FEFEFE] w-[50vw]' size='large' onClick={()=>{updateServiceMutation.mutate({description:desc,more_info:more})}}>save</Button>
            </div>
        </Drawer>
    )

}

export default SkillsDrawer