"use client"
import { poppins_600, poppins_content_1, poppins_home, poppins_italic } from '@/fonts/poppins'
import React from 'react'
import Image from 'next/image';
import { RightCircleOutlined } from '@ant-design/icons';
// import SphereComp from './SphereComp';
import Sphere1 from '../../public/images/sphere_1.svg'
import Sphere2 from '../../public/images/sphere_2.svg'
import { Carousel } from 'antd';

const Content = () => {
    return (
        <div className='flex flex-1 h-[90%] py-7 px-3 w-screen flex-col md:flex-row' >
            <div className={`${poppins_content_1.className} space-y-24 md:space-y-[8vh] w-fit h-fit pt-[10%] pl-[10%] text-[#FFFFFF] md:w-1/2`}>
                <div className='text-6xl space-y-[3vh] hidden md:inline'>
                    <div>Turn your name </div>
                    <div>
                        into a   <span className='text-[#F6014E]'>{" "}brand</span>.
                    </div>
                </div>
                <div className='text-6xl visible md:hidden '>
                    <div>Turn your name into a <span className='text-[#F6014E]'>{" "}brand</span>. </div>
                </div>

                <div className={`${poppins_home.className} break-normal text-[24px]`}>
                    <div><span className={poppins_italic.className}>Quickest</span> way to monetize your audience,<div> All tools to build your personal brand in one space.</div></div>
                </div>
                <div className={poppins_600.className}>
                    <button onClick={() => {
                        document.getElementById("about")?.scrollIntoView(true);
                    }} style={{ display: "flex", flex: 1, textAlign: "center", color: "#360181", backgroundColor: "#F2D89F" }} className='text-[18px] rounded-[20000px] p-4'>
                        <div className='flex flex-1 flex-row align-middle justify-center space-x-2'>
                            <div>
                                Discover More
                            </div>
                            <RightCircleOutlined style={{ color: '#F6014E', fontSize: 20, textAlign: "center", alignItems: "center", marginTop: "2.3%" }} />
                        </div>
                    </button>
                </div>
            </div>
            <div className='hidden md:w-1/2 md:inline mt-[5vh]'>
                {/* <SphereComp /> */}
                <Carousel speed={2000} autoplaySpeed={5000} autoplay dotPosition='left' className='h-[90vh'>
                    <Image src={Sphere1} fill={false} className='h-[70vh]' alt="meetings" />
                    <Image src={Sphere2} fill={false} className='h-[70vh]' alt="meetings" />
                </Carousel>
            </div>
        </div>
    )
}

export default Content