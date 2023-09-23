import Image from 'next/image'
import ImageComponent from './components/Authentication/CommonComponent'
import LoginComponent from './components/Authentication/LoginComponent'

export default function Home() {
  return (
    <div style={{width:"100vw",height:"100vh"}} className='flex flex-row justify-center items-center'>
    <ImageComponent/>
    <LoginComponent />
    </div>
  )
}
