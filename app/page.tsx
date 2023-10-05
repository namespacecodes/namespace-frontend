import Image from 'next/image'
import ImageComponent from './components/Authentication/CommonComponent'
import LoginComponent from './components/Authentication/LoginComponent'
import { Suspense } from 'react'
import Loading from './components/Loading'

export default function Home() {
  return (
    <Suspense fallback={<Loading/>}>

    <div style={{width:"100vw",height:"100vh"}} className='flex flex-row justify-center items-center'>
    <ImageComponent/>
    <LoginComponent />
    </div>
    </Suspense>
  )
}
