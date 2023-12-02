import React, { useState } from 'react'
import FB from '../../../public/socialmedia/fbcolor.svg'
import X from '../../../public/socialmedia/xcolor.svg'
import Insta from '../../../public/socialmedia/instacolor.svg'
import LinkedIn from '../../../public/socialmedia/linkedincolor.svg'
import YT from '../../../public/socialmedia/ytcolor.svg'
import CheckMark from '../../../public/checkmarkSocialMedia.svg'
import Image from 'next/image'
import { Button, Drawer, Input } from 'antd'
import { poppins_400, poppins_500, poppins_600 } from '@/fonts/poppins'
import { CloseOutlined } from '@ant-design/icons'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateSocialMediaProfile } from '@/mutations/profile'

const SocialAccountCards = ({ name, socialId, link }: any) => {
  const queryClient = useQueryClient()
  const updateSocialMediaMutation = useMutation({
    mutationFn: ({}: any) => {
      return updateSocialMediaProfile({ profile_id:socialId, profile_link:socialLink,social_media_name:name })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userSocialMedia"] })
    }
  })
  let src = FB
  if (name === "Instagram") src = Insta
  if (name === "X") src = X
  if (name === "linkedIn") src = LinkedIn
  if (name === "YouTube") src = YT
  const [bottomdrawerOpen, setbottomDrawerOpen] = useState(false)
  const [socialLink, setSocialLink] = useState(link)
  const toggleBottomDrawer = () => {
    setbottomDrawerOpen(!bottomdrawerOpen);
  }
  return (
    <div className={` ${poppins_400.className} h-[17vh] space-y-4 bg-white shadow-lg w-[35vw] p-5 rounded-[15px] shadow-slate-400`}>
      <div className='flex flex-1 flex-row justify-between items-start'>
        <div>
          <Image alt='fb' src={src} />
          <div className={` ${poppins_500.className}`}>{name}</div>
        </div>
        <Image style={{ display: socialId ? "inline" : "none" }} alt='fb' src={CheckMark} />
      </div>
      <Drawer push={{ distance: 0 }} open={bottomdrawerOpen} placement='bottom' className='rounded-[20px] ' headerStyle={{ display: "none" }} onClose={toggleBottomDrawer}>
        <div className='flex flex-1 flex-row justify-between items-center'>
          <div className={`${poppins_600.className} text-[24px]`}>
            <div>Add </div>
            <div>{name},</div>
          </div>
          <CloseOutlined onClick={toggleBottomDrawer} style={{ fontSize: 20 }} />
        </div>
        <div className='mt-[10vh] flex flex-1 flex-col space-y-[4vh] justify-between items-center'>
          <Input size='large' className='h-[5vh]' value={socialLink} onChange={(input) => { setSocialLink(input.target.value) }} placeholder='name' />
          <Button className='bg-[#340181] h-[15vh] text-[#FEFEFE] w-[50vw]' size='large' onClick={()=>{
            updateSocialMediaMutation.mutate({})
          }}>save</Button>
        </div>
      </Drawer>
      <div className='justify-center flex flex-1'>
        <Button onClick={toggleBottomDrawer} className='bg-[#340181] text-white text-[12px] rounded-[10px]' >{socialId ? "Update" : "Connect"}</Button>
      </div>
    </div>
  )
}

export default SocialAccountCards