"use client"
import Header from '../../components/Profile/Header'
import Socials from '../../components/Profile/Socials'
import Bio from '../../components/Profile/Bio'
import Services from '../../components/Profile/Services'
import Name from '../../components/Profile/Drawers/Name'
import CreateLink from '../../components/Profile/CreateLink'
import Cookies from 'universal-cookie'

const Page = () => {
  const cookies = new Cookies();
  console.log(cookies.get("user_id"));
  
  return (
    <div className='flex flex-1 flex-col items-center'>
        <Header/>
        <div className='mb-[20vh] md:mb-[25vh]'>
        <Name />
        </div>
        <Socials/>
        <Bio/>
        <Services/>
        <CreateLink/>
        {/* </div> */}
    </div>
  )
}

export default Page