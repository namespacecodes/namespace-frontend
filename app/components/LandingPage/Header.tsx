import { poppins_home,poppins_namespace } from "@/fonts/poppins"

const Header = () => {
  return (
    <div className='px-10 w-screen flex flex-1 flex-row justify-between'>
      <div className={`${poppins_namespace.className} text-[18px] md:text-[24px] text-[#FFFFFF]`}>namespace.</div>
      <div className={`${poppins_home.className} flex-row  flex text-[14px] md:text-[18px] text-[#F6014E] space-x-1.5`}>
      <div>Home</div>
      <div className='text-[#FFFFFF] invisible'>Mission</div>
      </div>
      <div className={`${poppins_home.className} invisible flex-row flex text-[14px] md:text-[18px] text-[#FFFFFF]`}>
        Log In
      </div>
    </div>
  )
}

export default Header