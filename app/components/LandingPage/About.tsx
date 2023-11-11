import React from 'react'
import AboutCards from './AboutCards'
import Image from 'next/image'
import AboutImage from '../../../public/about.svg'
import checkMark from '../../../public/checkmark.svg'
import { poppins_200, poppins_500, poppins_semibold } from '@/fonts/poppins'

const About = () => {
    return (
        <div id="about" className='md:mx-20 md:ml-32'>
            <div className='p-10 px-15 flex-col md:flex-row flex flex-1 space-y-3 md:space-x-3 mb-10'>
                <AboutCards title="1:1 Calls" />
                <AboutCards title="Newsletter" />
                <AboutCards title="Guides & Toolkit" />
            </div>
            <div className='px-10 flex flex-1 flex-col md:flex-row'>
                <div className='w-fit md:w-1/2'>
                    <Image src={AboutImage} width="600" height="396" alt='Demo Image' />
                </div>
                <div className='w-fit flex-row pt-8 space-y-7 text-center text-[#340181] md:w-1/2 md:justify-center'>
                    <div className={`${poppins_500.className} text-[26px] md:text-[30px]`}>Your Name, Your Space.</div>
                    <div className='flex-1 flex-row space-y-3 space-x-2 hidden md:flex md:justify-center'>
                        <Image src={checkMark} alt="checkmark" />
                        <div className={`${poppins_200.className}whitespace-pre-line`}><div>One space for your personalized services,</div> portfolio, booking, newsletter, and<div> community.</div></div>
                    </div>
                    <div className='flex flex-1 flex-row space-y-3 space-x-2 md:hidden md:justify-center'>
                        <Image src={checkMark} alt="checkmark" />
                        <div className={`${poppins_200.className}whitespace-pre-line`}>One space for your personalized services,portfolio, booking, newsletter, and community.</div>
                    </div>
                    <div className='flex flex-1 flex-row space-x-2 md:justify-center'>
                        <Image src={checkMark} alt="checkmark" />
                        <div className="whitespace-pre-line">Host everything within your <span className='text-[#F6014E]'>link.in.bio.</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About