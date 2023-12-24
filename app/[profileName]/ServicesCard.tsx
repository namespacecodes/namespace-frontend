import { poppins_400, poppins_500 } from '@/fonts/poppins'
import { Button, Row } from 'antd'
import React from 'react'
import { CaretRightOutlined,UserOutlined } from '@ant-design/icons'

const ServicesCard = ({data}:any) => {
  return (
    <div className={`${poppins_400.className} items-center md:space-y-[6vh]  bg-white shadow-lg rounded-[10px] flex-col text-[14px] md:text-[16px] shadow-slate-400 flex flex-1 p-[5vw] px-[7vw] w-[85vw] mb-[2vh] md:w-[50vw] mt-[5vh]`}>
       <div className='flex flex-1 flex-col md:space-y-[3vh]'>
        <div className={`${poppins_500.className} text-center text-[16px] md:text-[18px]`}>
          {/* Fashion career advice. */}
          {data[0]?.description}
          </div>
        <div className='text-center'>
          {data[0]?.more_info}
          {/* I’ll help you kick start your career in the fashion industry. */}
          </div>
        <div className='flex flex-1 text-center flex-row justify-between'>
            <div>Rs {data[0]?.price}</div>
            <div>Duration: {data[0]?.duration}mins</div>
        </div>
       </div>
        <Button className='bg-[#340181] w-[40vw] md:w-[50%]  text-white'>
            <Row justify={"space-between"} className=']'>
            <UserOutlined />
           <div className={`${poppins_400.className} text-[14px]`}> {data[0]?.service_name}</div>
           <CaretRightOutlined style={{color:"#F6014E"}} />
            </Row>
        </Button>
    </div>
  )
}

export default ServicesCard