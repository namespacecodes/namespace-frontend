import Image from "next/image"
import Calls from '../../../public/1:1calls.svg'
import NewsLetter from '../../../public/newsletter.svg'
import Docs from '../../../public/docs.svg'
import { callContent,newsLetterContent,guidesContent } from "@/constants"
import { poppins_semibold,poppins_home } from "@/fonts/poppins"
const AboutCards = ({title}:any) => {
    let img=Docs
    let content=guidesContent
    if(title=="1:1 Calls") {
        img=Calls;
        content=callContent;
    }
    if(title==="Newsletter") {
        img=NewsLetter;
        content=newsLetterContent;
    }
  return (
    <div className={`${poppins_home.className} w-fit flex-row flex flex-1  space-x-3 md:flex-col md:space-y-3 text-[16px] text-[#340181]`}> 
        <Image src={img} alt="meetings" width="72" height="72"/>
        <div className="md:flex-col">
        <div className={`${poppins_semibold.className} text-[18px] `}>{title}</div>
        <div className="whitespace-pre-line">{content}</div>
        </div>
    </div>
  )
}

export default AboutCards