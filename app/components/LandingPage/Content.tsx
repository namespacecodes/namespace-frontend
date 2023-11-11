"use client"
import { poppins_600, poppins_content_1, poppins_home, poppins_italic } from '@/fonts/poppins'
import React from 'react'
import { RightCircleOutlined } from '@ant-design/icons';
import SphereComp from './SphereComp';

const Content = () => {
    return (
        <div className='flex flex-1 h-5/6 py-7 px-3 w-screen flex-col md:flex-row' >
            <div className={`${poppins_content_1.className} space-y-24 md:space-y-28 w-fit pt-[10%] pl-[10%] text-[#FFFFFF] md:w-1/2`}>
                <div className='text-6xl space-y-7 hidden md:inline'>
                    <div>Turn your name </div>
                    <div>
                      into a   <span className='text-[#F6014E]'>{" "}brand</span>.
                    </div>
                </div>
                <div  className='text-6xl visible md:hidden '>
                    <div>Turn your name into a <span className='text-[#F6014E]'>{" "}brand</span>. </div>
                </div>
                
                <div className={`${poppins_home.className} break-normal text-[24px]`}>
                    <div><span className={poppins_italic.className}>Quickest</span> way to monetize your audience, All tools to build your personal brand in one space.</div>
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
            <div className='invisible md:w-1/2 md:visible'>
                <SphereComp />
            </div>
        </div>
    )
}

export default Content