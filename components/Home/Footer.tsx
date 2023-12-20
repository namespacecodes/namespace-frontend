import { poppins_home, poppins_namespace, poppins_namespace_copyrights, poppins_namespace_footer } from '@/fonts/poppins'
import Link from 'next/link'
import React from 'react'
import facebook from '../../public/socialmedia/facebook.svg'
import twitter from '../../public/socialmedia/x.svg'
import instagram from '../../public/socialmedia/instagram.svg'
import linkedin from '../../public/socialmedia/linkedin.svg'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={`bg-[#340181] ${poppins_home.className} p-10`} style={{display:"flex",flex:1,flexDirection:"row",justifyContent:"space-between"}}>
            <div className='flex flex-col space-y-4'>
                <div className='text-white flex flex-1 flex-row space-x-2'>
                    <Image src={facebook} height="30" width="30" alt='facebook' />
                    <Image src={twitter} alt='X' height="30" width="30" />
                    <Image src={instagram} alt='Instagram' height="30" width="30" />
                    <Image src={linkedin} alt='linkedIn' height="30" width="30" />
                </div>
                <div className={`flex ${poppins_namespace_footer.className} text-[18px] md:text-[24px] space-y-2 text-white flex-col flex`} >
                    <div>namespace.</div>
                    <div className={`flex ${poppins_namespace_copyrights.className} text-[18px] md:text-[24px] text-white flex-col flex`}>Copyright © 2023 -  All rights reserved</div>
                </div>
            </div>
            <div className='space-y-2 text-[13px] md:text-[16px] text-[#FFFFFF] flex flex-col'>
                <Link href="#">About</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Terms & Conditions</Link>
                <Link href="#">Help</Link>
            </div>
        </div>
    )
}

export default Footer