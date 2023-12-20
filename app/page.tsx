import Header from '../components/Home/Header'
import Content from '../components/Home/Content'
import About from '../components/Home/About'
import Invitation from '../components/Home/Invitation'
import Footer from '../components/Home/Footer'

export default function Home() {
  return (
    <div>
      <div className='h-1/6 md:h-screen w-screen py-10 bg-gradient-to-b from-[#360181] via-[#470E9C] to-[#2D0643]'>
        <Header />
        <Content />
      </div>
      <About/>
      <Invitation/>
      <Footer/>
    </div>
  )
}
