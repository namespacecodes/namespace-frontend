import { poppins_600 } from '@/fonts/poppins'
import { Button, Drawer, Input } from 'antd'
import React from 'react'
import { CloseOutlined } from '@ant-design/icons'


const SkillsDrawer= ({ toggleDrawer, drawerOpen }: any) => {
    const { TextArea } = Input;
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
                <TextArea placeholder="short brief on what your users can expect on call." style={{ height: "15vh", textAlign: "center",borderRadius:"5px" }} />
                <TextArea placeholder="tell us more!" style={{ height: "40vh", textAlign: "center", alignItems: "center",borderRadius:"5px" }} />
                <Button className='bg-[#340181] h-[15vh] text-[#FEFEFE] w-[50vw]' size='large'>save</Button>
            </div>
        </Drawer>
    )

}

export default SkillsDrawer