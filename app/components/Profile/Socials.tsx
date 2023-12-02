"use client"
import { poppins_300, poppins_600 } from '@/fonts/poppins'
import Image from 'next/image'
import React, { useState } from 'react'
import More from '../../../public/images/more.svg'
import FB from '../../../public/socialmedia/fbcolor.svg'
import X from '../../../public/socialmedia/xcolor.svg'
import Insta from '../../../public/socialmedia/instacolor.svg'
import SocialAccountDrawer from './Drawers/SocialAccountDrawer'
import { getUserSocialMedia } from '@/queries/profile'
import { useQuery } from '@tanstack/react-query'


const Socials = () => {
    const [drawerOpen,setdrawerOpen]= useState(false)
    const socialMedia= useQuery({queryKey:["userSocialMedia"],queryFn:getUserSocialMedia})
    if(socialMedia.isPending) return <div>...Loading</div>
    if(socialMedia.isError) return <div>{socialMedia.error.message}</div>
    const toggleDrawer = () => {
        setdrawerOpen(!drawerOpen)
    }
    
    return (
        <div className={`${poppins_600.className} p-5 text-[20px] text-[#000000] m-5 rounded-[25px] w-[80vw] bg-white shadow-lg shadow-slate-400`}>
            <div>
                <div>Your </div>
                <div>socials,</div>
            </div>
            <div className='flex flex-1 justify-between items-center'>
            {socialMedia.data?.data.length>0?
            <div className='flex flex-1 flex-row justify-between w-[50vw]'>
               
                <Image alt='fb' src={FB} />
                <Image alt='x' src={X} />
                <Image alt='insta' src={Insta} />
               
            </div>
            :<div className={`text-[15px] ${poppins_300.className}`} >Add your social media </div>}
                <Image alt='more' src={More} onClick={toggleDrawer} />
                <SocialAccountDrawer toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
            </div>
               
        </div>
    )
}

export default Socials