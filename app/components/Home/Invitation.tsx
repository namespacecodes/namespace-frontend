import { poppins_300, poppins_600, poppins_home, poppins_semibold } from '@/fonts/poppins'
import { Button, Col, Input } from 'antd'
import Waitlist from './Waitlist'


const Invitation = () => {
  return (
    <div className='p-10 flex flex-1 flex-col mt-20 mb-20 space-y-3' >
        <div className={`${poppins_600.className} text-[40px] text-center text-[#340181] md:text-[48px]`}>
            namespace is launching soon!
        </div>
        <div className={`${poppins_300.className} text-[20px] text-center text-[#340181] whitespace-pre-line md:text-[24px]`}>
        <div>Be Among the First to Experience Our Application and </div>Showcase Your Skills to the World.
        </div>
        <Waitlist/>
    </div>
  )
}

export default Invitation