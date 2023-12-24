import { poppins_500} from '@/fonts/poppins'
import Image from 'next/image'
import ProfilePic from '../../public/images/profilepic.jpeg'

const Name = ({data}:any) => {
  return (
    <div className={`${poppins_500.className} text-[24px] text-center mt-[2vh] absolute top-[5vh] left-[23vw] md:left-[43vw] z-10`}>
      <Image src={ProfilePic} className='rounded-full' alt='Profile Picture' />
      
      <div>{data?.name}</div>
      
    </div>
  )
}

export default Name