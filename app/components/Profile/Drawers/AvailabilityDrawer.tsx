"use client"
import { poppins_300, poppins_600 } from '@/fonts/poppins';
import { Button, Drawer, Select, TimePicker } from 'antd';
import React, { useState } from 'react'
import { CloseOutlined } from '@ant-design/icons'
const AvailabilityDrawer = ({ toggleDrawer, drawerOpen }: any) => {
    const [selectedDays, setSelectedDays] = useState<any>([]);
    const handleDayClick = (day:any) => {
      // Check if the day is already selected
      if (selectedDays.includes(day)) {
        // If selected, remove it
        setSelectedDays(selectedDays.filter((selectedDay:any) => selectedDay !== day));
      } else {
        // If not selected, add it
        setSelectedDays([...selectedDays, day]);
      }
    };
  return (
    <Drawer push={{ distance: 0 }} open={drawerOpen} onClose={toggleDrawer} className='w-[100vw]' headerStyle={{ display: "none" }}>
         <div className='flex flex-1 flex-row justify-between items-center'>
                <div className={`${poppins_600.className} text-[32px]`}>
                    <div>Your</div>
                    <div>Availability,</div>
                </div>
                <CloseOutlined onClick={toggleDrawer} style={{ fontSize: 20 }} />
            </div>
         <div className='p-[2vh] mt-[5vh] bg-white shadow-lg shadow-slate-400'>
            <div className={`${poppins_300.className} text-[16px]`}>Days of a week</div>
            <div className='flex bg-[#F5F7FA] justify-center mt-[3vh]'>

        {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
            <div
            key={day}
            style={{
                padding: '10px',
                margin: '5px',
                cursor: 'pointer',
                color: selectedDays.includes(day) ? 'white' : '#340181',
                backgroundColor: selectedDays.includes(day) ? '#340181' : 'white',
                border: '1px solid #ccc',
            }}
            className='rounded-full'
            onClick={() => handleDayClick(day)}
            >
            {day.substring(0,1)}
          </div>
        ))}
        </div>
        <div className={`${poppins_300.className} mt-[3vh] text-[16px]`}>Time of the day</div>
        <div className='pt-[3vh]'>
        <TimePicker.RangePicker />
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center mt-[16vh]'>
      <Button className='bg-[#340181] h-[15vh] text-[#FEFEFE] w-[30vw] rounded-[10px]' size='large'>save</Button>
      </div>
    </Drawer>
  )
}

export default AvailabilityDrawer