
import { Suspense } from 'react'
import Loading from './components/Loading'
import Header from './components/LandingPage/Header'
import Content from './components/LandingPage/Content'
import About from './components/LandingPage/About'
import Invitation from './components/LandingPage/Invitation'
import Footer from './components/LandingPage/Footer'

export default function Home() {
  return (
    <div>
      <div className='h-1/6 md:h-screen w-screen py-10 bg-gradient-to-b from-[#360181] via-[#470E9C] to-[#000000]'>
        <Header />
        <Content />
      </div>
      <About/>
      <Invitation/>
      <Footer/>
    </div>
  )
}
