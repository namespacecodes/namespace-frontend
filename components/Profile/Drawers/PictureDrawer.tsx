import { poppins_600 } from '@/fonts/poppins'
import { Button, Drawer, Upload } from 'antd'
import React from 'react'
import { CloseOutlined, PlusOutlined } from '@ant-design/icons'
import Image from 'next/image'
import imageUrl from '../../../public/images/profilepic.jpeg'
const PictureDrawer = ({ toggleDrawer, drawerOpen }: any) => {
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (
        <Drawer push={{ distance: 0 }} open={drawerOpen} onClose={toggleDrawer} className='w-[100vw]' headerStyle={{ display: "none" }}>
            <div className='flex flex-1 flex-row justify-between items-center'>
                <div className={`${poppins_600.className} text-[32px]`}>
                    <div>Picture</div>
                    <div>Perfect,</div>
                </div>
                <CloseOutlined onClick={toggleDrawer} style={{ fontSize: 20 }} />
            </div>
                <Upload
                    className="rounded-full"
                    showUploadList={false}
                >
                    {imageUrl ? <Image  className='w-full h-[40vh] bg-black mt-[10vh]' src={imageUrl} alt="avatar" /> : uploadButton}
                </Upload>
                <div className='justify-center flex flex-1 mt-[5vh]'>
                <Button className='bg-[#340181] h-[15vh] text-[#FEFEFE] w-[50vw] text-[20px]' style={{fontSize:"20px",textAlign:"center"}} size='large'>upload</Button>
                </div>
        </Drawer>
    )
}

export default PictureDrawer