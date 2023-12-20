import React from 'react'
import Image from 'next/image'
import loginImage from '../../public/images/loginimg.jpg'
import logo from '../../public/images/logo.png'
const ImageComponent = () => {
  return (
    <div className='flex flex-col justify-center items-center w-4/12 h-5/6 bg-[#fefbf7]'>
        <Image src={logo} alt='Image' className='w-1/4 h-1/5'/>
        <p className='color-black'>Build your brand name with namespace</p>
        <Image src={loginImage} className='w-5/6 h-3/4'  alt='Image'/>
    </div>
  )
}

export default ImageComponent