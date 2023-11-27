import { poppins_600 } from '@/fonts/poppins'
import {  Drawer, Row } from 'antd'
import React from 'react'
import { CloseOutlined } from '@ant-design/icons'
import SocialAccountCards from '../SocialAccountCards'
const SocialAccountDrawer = ({ toggleDrawer, drawerOpen }: any) => {
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
                    <SocialAccountCards name='Instagram' />
                    <SocialAccountCards name='Facebook' />
                    <SocialAccountCards name='X' />
                    <SocialAccountCards name='YouTube' />
                    <SocialAccountCards name='linkedIn' />
                </Row>
            </div>
        </Drawer>
    )
}

export default SocialAccountDrawer