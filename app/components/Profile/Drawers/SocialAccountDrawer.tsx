"use client"
import { poppins_600 } from '@/fonts/poppins'
import {  Drawer, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import SocialAccountCards from '../SocialAccountCards'
import { useQuery } from '@tanstack/react-query'
import { getUserSocialMedia } from '@/queries/profile'
const SocialAccountDrawer = ({ toggleDrawer, drawerOpen }: any) => {
    const socialMedia= useQuery({queryKey:["userSocialMedia"],queryFn:getUserSocialMedia})
    const [instaLink,setInstaLink]= useState<any>()
    const [fbLink,setFbLink]=useState<any>()
    const [ytLink,setYtLink]= useState<any>()
    const [linkedInLink,setLinkedInLink]= useState<any>()
    const [xLink,setXLink]= useState<any>()
    useEffect(() => {
        socialMedia.data?.data.map((item:any,index:any)=>{
            // `let src = Facebook`
            if (item.social_media_name === "Facebook") setFbLink({link:item.profile_link,socialId:item.profile_id})
            if (item.social_media_name === "Instagram") setInstaLink({link:item.profile_link,socialId:item.profile_id})
            if (item.social_media_name === "X") setXLink({link:item.profile_link,socialId:item.profile_id})
            if (item.social_media_name === "LinkedIn") setLinkedInLink({link:item.profile_link,socialId:item.profile_id})
            if (item.social_media_name === "YouTube") setYtLink({link:item.profile_link,socialId:item.profile_id})
            return null;
        })
      }, [socialMedia.data])
      
    if(socialMedia.isPending) return <div>...Loading</div>
    if(socialMedia.isError) return <div>{socialMedia.error.message}</div>
    
    return (
        <Drawer push={{distance:0}} open={drawerOpen} onClose={toggleDrawer} className='w-[100vw]' headerStyle={{ display: "none" }}>
            <div className='flex flex-1 flex-row justify-between items-center'>
                <div className={`${poppins_600.className} text-[32px]`}>
                    <div>Social </div>
                    <div>Accounts,</div>
                </div>
                <CloseOutlined onClick={toggleDrawer} style={{ fontSize: 20 }} />
            </div>
            <div className='p-3 mt-[5vh]'>
                <Row className='flex flex-1 justify-between h-[60vh]' style={{alignContent:'space-between'}}>
                    <SocialAccountCards name='Instagram'  socialId={instaLink?.socialId} link={instaLink?.link} />
                    <SocialAccountCards name='Facebook'  socialId={fbLink?.socialId} link={fbLink?.link} />
                    <SocialAccountCards name='X'  socialId={xLink?.socialId} link={xLink?.link} />
                    <SocialAccountCards name='YouTube'  socialId={ytLink?.socialId} link={ytLink?.link} />
                    <SocialAccountCards name='LinkedIn'  socialId={linkedInLink?.socialId} link={linkedInLink?.link} />
                </Row>
            </div>
        </Drawer>
    )
}

export default SocialAccountDrawer