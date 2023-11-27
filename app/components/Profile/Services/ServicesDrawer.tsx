import { poppins_600 } from '@/fonts/poppins'
import { Drawer } from 'antd'
import React from 'react'
import { CloseOutlined } from '@ant-design/icons'
import Description from './Description'
import Availability from './Availability'
import CallDuration from './CallDuration'
import Price from './Price'



const ServicesDrawer = ({toggleDrawer,drawerOpen}:any) => {
  return (
    <Drawer push={{ distance: 0 }} open={drawerOpen}  onClose={toggleDrawer} className='w-[100vw]' headerStyle={{ display: "none" }}>
        <div className='flex flex-1 flex-row justify-between items-center'>
                <div className={`${poppins_600.className} text-[32px]`}>
                    <div>Your </div>
                    <div>service,</div>
                </div>
                <CloseOutlined onClick={toggleDrawer} style={{ fontSize: 20 }} />
            </div>
            <div className='mt-[10vh] items-center space-y-[5vh] flex flex-1 flex-col'>
                <Description/>
                <Availability/>
                <CallDuration/>
                <Price/>
            </div>
    </Drawer>
  )
}

export default ServicesDrawer