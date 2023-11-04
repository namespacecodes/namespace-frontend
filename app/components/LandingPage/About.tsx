import React from 'react'
import AboutCards from './AboutCards'
import Image from 'next/image'
import AboutImage from '../../../public/about.svg'
import checkMark from '../../../public/checkmark.svg'
import { poppins_semibold } from '@/fonts/poppins'

const About = () => {
  return (
    <div id="about">
    <div className='p-10 flex-col md:flex-row flex flex-1 space-y-3 md:space-x-3'>
        <AboutCards title="1:1 Calls"/>
        <AboutCards title="Newsletter"/>
        <AboutCards title="Guides & Toolkit"/>
    </div>
    <div className='px-10 flex flex-1 flex-col md:flex-row'>
        <div className='w-fit md:w-1/2'>
            <Image src={AboutImage} width="600" height="396" alt='Demo Image'/>
        </div>
        <div className='w-fit flex-row pt-8 space-y-7 text-[#340181] md:w-1/2'>
            <div className={`${poppins_semibold.className} text-[28px] md:text-[30px]`}>Your Name, Your Space.</div>
            <div className='flex flex-1 flex-row space-y-3 space-x-2'>
                <Image src={checkMark} alt="checkmark" />
                <div className="whitespace-pre-line">One space for your personalized services, portfolio, booking, newsletter, and community.</div>
            </div>
            <div className='flex flex-1 flex-row space-x-2'>
                <Image src={checkMark} alt="checkmark" />
                <div className="whitespace-pre-line">Host everything within your link.in.bio.</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About