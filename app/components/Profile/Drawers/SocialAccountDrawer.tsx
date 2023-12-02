"use client"
import { poppins_600 } from '@/fonts/poppins'
import {  Drawer, Row } from 'antd'
import React from 'react'
import { CloseOutlined } from '@ant-design/icons'
import SocialAccountCards from '../SocialAccountCards'
import { useQuery } from '@tanstack/react-query'
import { getUserSocialMedia } from '@/queries/profile'
const SocialAccountDrawer = ({ toggleDrawer, drawerOpen }: any) => {
    const socialMedia= useQuery({queryKey:["userSocialMedia"],queryFn:getUserSocialMedia})
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
                    <SocialAccountCards name='Instagram'  socialId={""} link={""} />
                    <SocialAccountCards name='Facebook'  socialId={""} link={""} />
                    <SocialAccountCards name='X'  socialId={""} link={""} />
                    <SocialAccountCards name='YouTube'  socialId={""} link={""} />
                    <SocialAccountCards name='LinkedIn'  socialId={""} link={""} />
                </Row>
            </div>
        </Drawer>
    )
}

export default SocialAccountDrawer